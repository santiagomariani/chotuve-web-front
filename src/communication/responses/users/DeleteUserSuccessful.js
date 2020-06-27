import {SuccessfulApiResponse} from "../generalResponses/SuccessfulApiResponse.js";

export class DeleteUserSuccessful extends SuccessfulApiResponse {
    
    static defaultResponse() {
        return {'message': 'User deleted.'}
    }
}