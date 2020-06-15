import {GetProfileEndpoint} from "../endpoints/GetProfileEndpoint";
import {GetProfileSuccessful} from "../responses/profiles/GetProfileSuccessful";
import {GetUsersSuccessful} from "../responses/users/GetUsersSuccessful"
import {LoginEndpoint} from "../endpoints/LoginEndpoint";
import {LoginSuccessful} from "../responses/login/LoginSuccessful";
import {InvalidCredentials} from "../responses/login/InvalidCredentials";
import { GetUsersEndpoint } from "communication/endpoints/GetUsersEndpoint";


const fakeRequesterExpectedResponses = () => {
    return {
        [GetProfileEndpoint.name]: GetProfileSuccessful,
        [LoginEndpoint.name]: LoginSuccessful,
        [GetUsersEndpoint.name]: GetUsersSuccessful
    }
};

export default fakeRequesterExpectedResponses;