// netlify/functions/deploy.ts

import type { Config } from "@netlify/functions";

const BUILD_HOOK = "https://api.netlify.com/build_hooks/673dd2e3f02e4b9622a5f558"; // replace me!

export default async (req: Request) => {
  await fetch(BUILD_HOOK, {
    method: "POST",
  });
};

export const config: Config = {
  schedule: "0 0 * * *",
};
