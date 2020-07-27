import {SuccessfulApiResponse} from "../generalResponses/SuccessfulApiResponse.js";

export class GetVideosSuccessful extends SuccessfulApiResponse {
    
    static defaultResponse() {
        return {
                "page": 2,
                "total": 4,
                "videos": [
                  {
                    "video_id": 25,
                    "title": "muy buen dato",
                    "description": "gracias por ver 🤯",
                    "thumbnail_url": "francogior98@gmail.com/muy buen dato_thumbnail",
                    "uuid": 42,
                    "location": "Argentina",
                    "is_private": false,
                    "likes": 2,
                    "dislikes": 3,
                    "view_count": 91,
                    "firebase_url": "francogior98@gmail.com/muy buen dato",
                    "timestamp": "2020-07-02T06:49:31.043Z",
                    "reaction": "dislike",
                    "author": "Franco",
                    "popularity": 192
                  },
                  {
                    "video_id": 28,
                    "title": "perrito gracioso",
                    "description": "tremendo",
                    "thumbnail_url": "francogior98@gmail.com/perrito gracioso_thumbnail",
                    "uuid": 42,
                    "location": "México",
                    "is_private": false,
                    "likes": 1,
                    "dislikes": 1,
                    "view_count": 68,
                    "firebase_url": "francogior98@gmail.com/perrito gracioso",
                    "timestamp": "2020-07-02T06:55:39.672Z",
                    "reaction": "none",
                    "author": "Franco",
                    "popularity": 131
                  }
                ]
        }
    }
}