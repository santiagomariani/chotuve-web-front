import {ServerErrorResponse} from "../responses/generalResponses/ServerErrorResponse.js";
import { GetUsersEndpoint } from "communication/endpoints/GetUsersEndpoint.js";
import { ModifyUserEndpoint } from "communication/endpoints/ModifyUserEndpoint.js";
import { DeleteUserEndpoint } from "communication/endpoints/DeleteUserEndpoint.js";
import { AddUserEndpoint } from "communication/endpoints/AddUserEndpoint.js";
import { CheckUserIsAdminEndpoint } from "communication/endpoints/CheckUserIsAdminEndpoint.js";

class ApiClient {
    constructor(requester, onServerErrorDo = () => {
    }) {
        this._requester = requester;
        this._handleServerError = onServerErrorDo;
        this._handleResponse = this._handleResponse.bind(this);
    }

    _handleResponse(response, onResponse) {
        if (response instanceof ServerErrorResponse) {
            console.log("Server error: ", response);
            return this._handleServerError(response);
        }

        return onResponse(response);
    }

    users(data, onResponse) {
        return this._requester.call({
            endpoint: new GetUsersEndpoint(),
            onResponse: (response) => this._handleResponse(response, onResponse),
            data: data
        });
    }

    modifyUser(data, onResponse, userId) {
        return this._requester.call({
            endpoint: new ModifyUserEndpoint(userId),
            onResponse: (response) => this._handleResponse(response, onResponse),
            data: data
        });
    }

    deleteUser(onResponse, userId) {
        return this._requester.call({
            endpoint: new DeleteUserEndpoint(userId),
            onResponse: (response) => this._handleResponse(response, onResponse)
        });
    }

    addUser(data, onResponse) {
        return this._requester.call({
            endpoint: new AddUserEndpoint(),
            onResponse: (response) => this._handleResponse(response, onResponse),
            data: data
        }); 
    }

    getUserAdminInfo(onResponse) {
        return this._requester.call({
            endpoint: new CheckUserIsAdminEndpoint(),
            onResponse: (response) => this._handleResponse(response, onResponse)
        }); 
    }
}

export default ApiClient;