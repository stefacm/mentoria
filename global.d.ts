/**
 * This file can be used to define Global Typescript types
 */

/// <reference types="astro/client" />
/// <reference types="vitest/globals" />
/// <reference types="shared/config/global" />

interface ImportMetaEnv {
  readonly PUBLIC_APP_NAME: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
