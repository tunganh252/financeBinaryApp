import apiService from "../../api";

const UserServices = {};

UserServices.POST_LOGIN_USER = async (data) => {
    return await apiService.POST(`/v1/user/token`, {
        username: data.username,
        password: data.password
    }, { isPrivate: false });
}



export default UserServices;