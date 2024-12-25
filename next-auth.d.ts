import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name: string;
    group: string;
    token: string;
  }

  interface Session {
    user: User;
    accessToken: string;
  }
} 