/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GRAPH_CMS_API_URL: string;
  readonly VITE_GRAPH_CMS_API_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
