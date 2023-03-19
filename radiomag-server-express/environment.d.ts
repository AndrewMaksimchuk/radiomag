declare namespace NodeJS {
  export interface ProcessEnv {
    readonly PORT: string;
    readonly DB_NAME: string;
    readonly NODE_ENV: string;
  }
}
