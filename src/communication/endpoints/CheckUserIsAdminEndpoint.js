import { Endpoint } from "./Endpoint.js";
import { GetUserAdminInfoSuccessful } from "../responses/users/GetUserAdminInfoSuccessful";

export class CheckUserIsAdminEndpoint extends Endpoint {
  url() {
    return "/users/admin";
  }

  method() {
    return "GET";
  }

  needsAuthorization() {
    return true;
  }
}
