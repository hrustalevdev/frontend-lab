import type { Configuration } from "webpack-dev-server";

export function getDevServerConfig({
  port,
}: {
  port: number | string;
}): Configuration {
  return {
    port,
  };
}
