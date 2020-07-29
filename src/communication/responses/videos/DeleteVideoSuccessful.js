import { SuccessfulApiResponse } from "../generalResponses/SuccessfulApiResponse.js";

export class DeleteVideoSuccessful extends SuccessfulApiResponse {
  static defaultResponse() {
    return { message: "OK" };
  }
}
