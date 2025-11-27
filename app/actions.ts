"use server";

import { z } from "zod";
import { Resend } from "resend";

// Inicializamos Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// --- ESQUEMAS DE VALIDACIÓN ---

const ContactSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("El email no es válido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

const NewsletterSchema = z.object({
  email: z.string().email("Por favor, introduce un email válido"),
});

// --- ACTIONS ---

export async function submitContactForm(prevState: any, formData: FormData) {
  // 1. Extraer datos
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  // 2. Validar con safeParse
  const validation = ContactSchema.safeParse(rawData);

  if (!validation.success) {
    // CORRECCIÓN: Usamos .issues en lugar de .errors
    return {
      success: false,
      error: validation.error.issues[0]?.message || "Error de validación",
    };
  }

  try {
    const data = validation.data; // Datos ya tipados y limpios

    // 3. Enviar el email
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "elnidodealmu@gmail.com", // Tu email
      subject: `Nuevo mensaje de la web: ${data.name}`,
      text: `Has recibido un mensaje de contacto:\n\nNombre: ${data.name}\nEmail: ${data.email}\n\nMensaje:\n${data.message}`,
      replyTo: data.email,
    });

    if (error) {
      console.error("Error de Resend:", error);
      return { success: false, error: "Error al enviar el email: " + error.message };
    }

    return { success: true, error: null };

  } catch (error) {
    console.error("Error inesperado:", error);
    return { success: false, error: "Ocurrió un error inesperado en el servidor." };
  }
}

export async function subscribeToNewsletter(prevState: any, formData: FormData) {
  // 1. Validar email
  const rawEmail = formData.get("email");
  const validation = NewsletterSchema.safeParse({ email: rawEmail });

  if (!validation.success) {
    return {
      success: false,
      error: validation.error.issues[0]?.message || "Email inválido",
    };
  }

  try {
    const email = validation.data.email;
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    // --- LOG DE DEPURACIÓN 1 ---
    console.log("👉 Intentando suscribir a:", email);
    console.log("👉 Usando Audience ID:", audienceId);

    if (!audienceId) {
      console.error("❌ ERROR: Falta RESEND_AUDIENCE_ID");
      return { success: false, error: "Error de configuración en el servidor." };
    }

    // 2. Crear contacto en Resend
    // MEJORA: Quitamos 'firstName' si está vacío para no enviar datos sucios
    const response = await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: audienceId,
    });

    // --- LOG DE DEPURACIÓN 2 ---
    console.log("👉 Respuesta de Resend:", JSON.stringify(response, null, 2));

    if (response.error) {
      console.error("❌ Error devuelto por Resend:", response.error);
      return { success: false, error: "No se pudo completar la suscripción." };
    }

    return { success: true, error: null };

  } catch (error) {
    console.error("❌ EXCEPCIÓN CRÍTICA:", error);
    return { success: false, error: "Ocurrió un error técnico." };
  }
}
