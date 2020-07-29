import { Endpoint } from "./Endpoint.js";

export class DeleteVideoEndpoint extends Endpoint {
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
    return "DELETE";
  }

  needsAuthorization() {
    return true;
  }
}
