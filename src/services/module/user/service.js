import apiService from "../../api";

const UserServices = {};

UserServices.POST_LOGIN_USER = async (data) => {
    return await apiService.POST(`/v1/user/token`, {
        username: data.username,
        password: data.password
    });
}

UserServices.POST_LOGOUT_USER = async () => {
    return await apiService.POST(`/v1/user/tokens/cancel`, {}, { isPrivate: true, isFormData: false })
}


export default UserServices;