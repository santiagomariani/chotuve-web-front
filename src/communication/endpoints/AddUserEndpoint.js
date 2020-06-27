import {Endpoint} from "./Endpoint.js";

export class AddUserEndpoint extends Endpoint {
    url() {
        return '/users'
    }
    
    /*
    ownResponses() {
        return [];
    }
    */

    method() {
        return 'POST'
    }

    needsAuthorization() {
        return true;
    }
}