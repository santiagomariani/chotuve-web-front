import { SuccessfulApiResponse } from "../generalResponses/SuccessfulApiResponse.js";

export class ModifyUserSuccessful extends SuccessfulApiResponse {
  static defaultResponse() {
    return {
      display_name: "Javier Hernán Ferreyra Iañez",
      email: "jferreyra@fi.uba.ar",
      id: 31,
      image_location:
        "https://lh3.googleusercontent.com/a-/AOh14GjDHomHBUWDx2YJPj91WaxAytc2qzBTs2EXz6aI=s96-c",
      phone_number: null,
    };
  }
}
