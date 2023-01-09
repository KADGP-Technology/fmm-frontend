import { host, port, protocol } from "./api-commen";

const hostUrl = `${protocol}://${host}${":" + port}`;
// const endpoint = `${protocol}://${host}${port ? ":" + port : ""}${trailUrl}`;

const config = {
  protocol: protocol,
  host: host,
  port: port,
  // apiUrl: trailUrl,
  // endpoint: endpoint,
  hostUrl: hostUrl,
};
export default config;
