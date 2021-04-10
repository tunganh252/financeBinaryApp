import apiService from "../../api";

const UserServices = {};

UserServices.POST_LOGIN_USER = async (data) => {
    return await apiService.POST(`/v1/user/token`, {
        username: data.username,
        password: data.password
    });
}

UserServices.POST_SIGNUP_USER = async (data) => {
    return await apiService.POST(`/v1/user/register`, {
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        registerCode: data.registerCode
    });
}

UserServices.POST_SEND_RIGSTER_CODE = async (data) => {
    return await apiService.POST(`/v1/user/send-register-code`, {
        email: data.email,
    });
}

UserServices.POST_LOGOUT_USER = async () => {
    return await apiService.POST(`/v1/user/tokens/cancel`, {}, { isPrivate: true, isFormData: false })
}

UserServices.POST_REFRESH_TOKEN = async (token) => {
    return await apiService.POST(`/v1/user/tokens/${token}/refresh`)
}


export default UserServices;