import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // 1. DEFINIR LA CLAVE SECRETA (Cámbiala si quieres)
  const SECRET_ACCESS_KEY = 'taller'; 
  const COOKIE_NAME = 'almacolors_vip_access';

  // 2. EXCEPCIONES (Rutas que siempre deben estar abiertas)
  // - /api (para que funcione la newsletter y stripe)
  // - /_next (archivos internos de next)
  // - /static y /public (imágenes)
  // - /proximamente (la propia landing)
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.includes('.') || // Archivos con extensión (jpg, png, css)
    pathname === '/proximamente'
  ) {
    return NextResponse.next();
  }

  // 3. LÓGICA DE LA LLAVE MAESTRA
  // Si alguien entra con ?secret=taller, le damos la cookie VIP
  if (searchParams.get('secret') === SECRET_ACCESS_KEY) {
    const response = NextResponse.redirect(new URL('/', request.url));
    response.cookies.set(COOKIE_NAME, 'true', {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 días
    });
    return response;
  }

  // 4. COMPROBACIÓN DE ACCESO
  // Si tiene la cookie VIP, le dejamos pasar
  const hasVipCookie = request.cookies.get(COOKIE_NAME);

  if (hasVipCookie) {
    return NextResponse.next();
  }

  // 5. BLOQUEO
  // Si no tiene cookie ni clave, lo mandamos a la sala de espera
  return NextResponse.redirect(new URL('/proximamente', request.url));
}

// Configuración: A qué rutas afecta
export const config = {
  matcher: [
    /*
     * Coincide con todas las rutas excepto:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};