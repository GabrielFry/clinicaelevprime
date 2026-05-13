import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  /* Evita aviso de lockfile duplicado ao rastrear arquivos (rode o build na pasta do projeto) */
  outputFileTracingRoot: path.join(process.cwd()),
};

export default nextConfig;
