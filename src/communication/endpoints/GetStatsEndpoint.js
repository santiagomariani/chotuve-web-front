import {Endpoint} from "./Endpoint.js";

export class GetStatsEndpoint extends Endpoint {
  url() {
    return '/stats'
  }

  method() {
    return 'GET'
  }

  needsAuthorization() {
    return false;
  }
}