import {GetProfileEndpoint} from "../endpoints/GetProfileEndpoint";
import {GetProfileSuccessful} from "../responses/profiles/GetProfileSuccessful";
import {GetUsersSuccessful} from "../responses/users/GetUsersSuccessful"
import {LoginEndpoint} from "../endpoints/LoginEndpoint";
import {LoginSuccessful} from "../responses/login/LoginSuccessful";
import { GetUsersEndpoint } from "communication/endpoints/GetUsersEndpoint";
import { ModifyUserEndpoint } from "../endpoints/ModifyUserEndpoint";
import { ModifyUserSuccessful } from "../responses/users/ModifyUserSuccessful"; 
import { DeleteUserEndpoint } from "communication/endpoints/DeleteUserEndpoint";
import { DeleteUserSuccessful } from "../responses/users/DeleteUserSuccessful";



const fakeRequesterExpectedResponses = () => {
    return {
        [GetProfileEndpoint.name]: GetProfileSuccessful,
        [LoginEndpoint.name]: LoginSuccessful,
        [GetUsersEndpoint.name]: GetUsersSuccessful,
        [ModifyUserEndpoint.name]: ModifyUserSuccessful, 
        [DeleteUserEndpoint.name]: DeleteUserSuccessful
    }
};

export default fakeRequesterExpectedResponses;