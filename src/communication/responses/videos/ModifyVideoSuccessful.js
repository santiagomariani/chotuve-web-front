import { SuccessfulApiResponse } from "../generalResponses/SuccessfulApiResponse.js";

export class ModifyVideoSuccessful extends SuccessfulApiResponse {
  static defaultResponse() {
    return {
      video_id: 25,
      title: "muy buen dato",
      description: "gracias por ver 🤯",
      thumbnail_url: "francogior98@gmail.com/muy buen dato_thumbnail",
      uuid: 42,
      location: "Argentina",
      is_private: false,
      likes: 2,
      dislikes: 3,
      view_count: 91,
      timestamp: "2020-07-02T06:49:31.043Z",
      reaction: "dislike",
      author: "Franco",
      popularity: 192,
    };
  }
}
