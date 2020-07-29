import { GetUsersSuccessful } from "../responses/users/GetUsersSuccessful";
import { GetVideosSuccessful } from "../responses/videos/GetVideosSuccessful";
import { GetUserAdminInfoSuccessful } from "../responses/users/GetUserAdminInfoSuccessful";
import { GetUsersEndpoint } from "communication/endpoints/GetUsersEndpoint";
import { GetVideosEndpoint } from "communication/endpoints/GetVideosEndpoint";
import { ModifyUserEndpoint } from "../endpoints/ModifyUserEndpoint";
import { ModifyVideoEndpoint } from "../endpoints/ModifyVideoEndpoint";
import { ModifyVideoSuccessful } from "../responses/videos/ModifyVideoSuccessful";
import { DeleteVideoEndpoint } from "../endpoints/DeleteVideoEndpoint";
import { DeleteVideoSuccessful } from "../responses/videos/DeleteVideoSuccessful";
import { ModifyUserSuccessful } from "../responses/users/ModifyUserSuccessful";
import { DeleteUserEndpoint } from "communication/endpoints/DeleteUserEndpoint";
import { DeleteUserSuccessful } from "../responses/users/DeleteUserSuccessful";
import { AddUserEndpoint } from "communication/endpoints/AddUserEndpoint";
import { AddUserSuccessful } from "../responses/users/AddUserSuccessful";
import { CheckUserIsAdminEndpoint } from "communication/endpoints/CheckUserIsAdminEndpoint";

const fakeRequesterExpectedResponses = () => {
  return {
    [GetUsersEndpoint.name]: GetUsersSuccessful,
    [ModifyUserEndpoint.name]: ModifyUserSuccessful,
    [DeleteUserEndpoint.name]: DeleteUserSuccessful,
    [AddUserEndpoint.name]: AddUserSuccessful,
    [CheckUserIsAdminEndpoint.name]: GetUserAdminInfoSuccessful,
    [GetVideosEndpoint.name]: GetVideosSuccessful,
    [ModifyVideoEndpoint.name]: ModifyVideoSuccessful,
    [DeleteVideoEndpoint.name]: DeleteVideoSuccessful,
  };
};

export default fakeRequesterExpectedResponses;
