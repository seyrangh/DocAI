import { authMiddleware } from "@kinde-oss/kinde-auth-nextjs/server";

export const config = {
  matcher: ["/dashboard, /dashboard/:path*", "/auth-callback"],
};

export default authMiddleware;
