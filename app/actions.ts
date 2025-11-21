"use server";

import { z } from "zod";
import { Resend } from "resend";

// Inicializamos Resend con tu clave
const resend = new Resend(process.env.RESEND_API_KEY);

// Definimos el esquema de validación
const ContactSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("El email no es válido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    // 1. Extraer y validar datos
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // Validar
    const data = ContactSchema.parse(rawData);

    // 2. Enviar el email
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "alopezbravoarnaiz@gmail.com", // Tu email
      subject: `Nuevo mensaje de la web: ${data.name}`,
      text: `Has recibido un mensaje de contacto:\n\nNombre: ${data.name}\nEmail: ${data.email}\n\nMensaje:\n${data.message}`,
    });

    return { success: true, error: null };

  } catch (error) {
    // 3. Manejo de Errores
    
    if (error instanceof z.ZodError) {
      // === AQUÍ ESTÁ EL CAMBIO ===
      // Creamos una variable temporal y le forzamos el tipo 'any' para que TS no se queje
      const validationError = error as any; 
      return { success: false, error: validationError.errors[0].message };
    }

    // Si es otro tipo de error
    return { success: false, error: "Hubo un error al enviar el mensaje. Inténtalo de nuevo." };
  }
}
// ... (Mantén los imports y la función submitContactForm que ya tenías) ...

// 1. Esquema de validación solo para el email
const NewsletterSchema = z.object({
  email: z.string().email("Por favor, introduce un email válido"),
});

// 2. Nueva función para suscribirse
// ... (El resto del archivo déjalo igual, solo cambia esta función del final) ...

export async function subscribeToNewsletter(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email");
    const data = NewsletterSchema.parse({ email });

    // --- ZONA DE DEPURACIÓN ---
    console.log("1. Intentando suscribir a:", data.email);
    console.log("2. Usando Audience ID:", process.env.RESEND_AUDIENCE_ID);

    // Guardamos la respuesta de Resend en una variable
    const response = await resend.contacts.create({
      email: data.email,
      firstName: "",
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID as string,
    });

    // Imprimimos qué nos dice Resend
    console.log("3. Respuesta de Resend:", response);

    // Si Resend devuelve un error explícito (aunque no lance excepción)
    if (response.error) {
      console.error("ERROR EN RESEND:", response.error);
      return { success: false, error: "Error de Resend: " + response.error.message };
    }

    return { success: true, error: null };

  } catch (error) {
    console.error("ERROR EN EL CATCH:", error); // Ver el error real
    
    if (error instanceof z.ZodError) {
       const validationError = error as any;
       return { success: false, error: validationError.errors[0].message };
    }
    return { success: false, error: "Hubo un error técnico." };
  }
}