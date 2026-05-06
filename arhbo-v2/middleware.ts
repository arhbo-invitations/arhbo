import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  const pathname = request.nextUrl.pathname

  // Redirect dash subdomain to /dash/* routes
  if (host.startsWith('dash.')) {
    const url = request.nextUrl.clone()
    if (!pathname.startsWith('/dash')) {
      url.pathname = `/dash${pathname === '/' ? '/dashboard' : pathname}`
      return NextResponse.rewrite(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
