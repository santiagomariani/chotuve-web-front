import {Endpoint} from "./Endpoint.js";

export class GetUsersEndpoint extends Endpoint {
    static url() {
        return '/users'
    }
    
    /*
    ownResponses() {
        return [];
    }
    */

    method() {
        return 'GET'
    }

    needsAuthorization() {
        return true;
    }
}