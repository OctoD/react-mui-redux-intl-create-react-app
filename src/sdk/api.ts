import axios from "axios";
import { Mediator } from "tiinvo";

const orchestrator = Mediator();
const tokenchannel = "api.client.security.token";

export function create(baseURL: string) {
  const client = axios.create({
    baseURL
  });

  orchestrator.subscribe(tokenchannel, (token: string) => {
    client.defaults.headers = client.defaults.headers || {};
    client.defaults.headers["Authorization"] = ["Bearer", token].join(" ");
  });

  return client;
}

export function settoken(token: string) {
  orchestrator.publish(tokenchannel, token);
}
