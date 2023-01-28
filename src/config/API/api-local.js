import { host, port, protocol, trailUrl } from "./api-commen";

const hostUrl = `${protocol}://${host}`;
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
