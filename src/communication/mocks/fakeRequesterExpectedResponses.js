import {GetProfileEndpoint} from "../endpoints/GetProfileEndpoint";
import {GetProfileSuccessful} from "../responses/profiles/GetProfileSuccessful";
import {GetUsersSuccessful} from "../responses/users/GetUsersSuccessful"
import {GetUserAdminInfoSuccessful} from "../responses/users/GetUserAdminInfoSuccessful"
import {LoginEndpoint} from "../endpoints/LoginEndpoint";
import {LoginSuccessful} from "../responses/login/LoginSuccessful";
import { GetUsersEndpoint } from "communication/endpoints/GetUsersEndpoint";
import { ModifyUserEndpoint } from "../endpoints/ModifyUserEndpoint";
import { ModifyUserSuccessful } from "../responses/users/ModifyUserSuccessful"; 
import { DeleteUserEndpoint } from "communication/endpoints/DeleteUserEndpoint";
import { DeleteUserSuccessful } from "../responses/users/DeleteUserSuccessful";
import { AddUserEndpoint } from "communication/endpoints/AddUserEndpoint";
import { AddUserSuccessful } from "../responses/users/AddUserSuccessful";
import { CheckUserIsAdminEndpoint } from "communication/endpoints/CheckUserIsAdminEndpoint";





const fakeRequesterExpectedResponses = () => {
    return {
        [GetProfileEndpoint.name]: GetProfileSuccessful,
        [LoginEndpoint.name]: LoginSuccessful,
        [GetUsersEndpoint.name]: GetUsersSuccessful,
        [ModifyUserEndpoint.name]: ModifyUserSuccessful, 
        [DeleteUserEndpoint.name]: DeleteUserSuccessful,
        [AddUserEndpoint.name]: AddUserSuccessful,
        [CheckUserIsAdminEndpoint.name]: GetUserAdminInfoSuccessful
    }
};

export default fakeRequesterExpectedResponses;