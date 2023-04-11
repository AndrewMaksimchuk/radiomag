/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
