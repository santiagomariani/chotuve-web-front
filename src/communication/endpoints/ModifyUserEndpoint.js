import { Endpoint } from "./Endpoint.js";

export class ModifyUserEndpoint extends Endpoint {
  constructor(userId) {
    super();
    this.userId = userId;
  }

  url() {
    return "/users/" + this.userId;
  }

  /*
    ownResponses() {
        return [];
    }
    */

  method() {
    return "PATCH";
  }

  needsAuthorization() {
    return true;
  }
}
