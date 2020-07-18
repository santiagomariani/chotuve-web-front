import {SuccessfulApiResponse} from "../generalResponses/SuccessfulApiResponse.js";

export class GetUserAdminInfoSuccessful extends SuccessfulApiResponse {
    
    static defaultResponse() {
        return {
                "admin": "True"
        }
    }
}