import { Endpoint } from "./Endpoint.js";

export class ModifyVideoEndpoint extends Endpoint {
  constructor(videoId) {
    super();
    this.videoId = videoId;
  }

  url() {
    return "/videos/" + this.videoId;
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
