import {Endpoint} from "./Endpoint.js";

export class DeleteUserEndpoint extends Endpoint {
    constructor(userId) {
        super();
        this.userId = userId;
    }

    url() {
        return '/users/' + this.userId
    }
    
    /*
    ownResponses() {
        return [];
    }
    */

    method() {
        return 'DELETE'
    }

    needsAuthorization() {
        return true;
    }
}