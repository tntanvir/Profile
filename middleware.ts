import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Only match blog pathnames, leave root route alone
  matcher: ['/blog/:path*', '/(en|bn)/blog/:path*']
};
