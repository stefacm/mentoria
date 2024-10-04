/// <reference types="astro/client" />
/// <reference types="vitest/globals" />

interface ImportMetaEnv {
  readonly PUBLIC_APP_NAME: string;
  readonly PUBLIC_API_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

type Fn = () => void;
type Reject<T> = (reason: T) => void;