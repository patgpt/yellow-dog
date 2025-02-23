declare module "bun" {
  interface Env {
    // # Parameters for Vercel Postgres Templates
    POSTGRES_URL: string;
    POSTGRES_URL_NON_POOLING: string;
    POSTGRES_USER: string;
    POSTGRES_HOST: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_DATABASE: string;
    POSTGRES_URL_NO_SSL: string;
    POSTGRES_PRISMA_URL: string;
    // Payload
    PAYLOAD_SECRET: string;
    PAYLOAD_ADMIN_EMAIL: string;
    PAYLOAD_ADMIN_PASSWORD: string;
    PAYLOAD_ADMIN_SECRET: string;
    // Next Public
    NEXT_PUBLIC_SERVER_URL: string;
    // Next Private
    CRON_SECRET: string;
    PREVIEW_SECRET: string;
  }
}