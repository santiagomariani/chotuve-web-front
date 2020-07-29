import { Endpoint } from "./Endpoint.js";

export class GetVideosEndpoint extends Endpoint {
  url() {
    return "/videos";
  }

  /*
    ownResponses() {
        return [];
    }
    */

  method() {
    return "GET";
  }

  needsAuthorization() {
    return true;
  }
}
