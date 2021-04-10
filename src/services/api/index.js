import axios from 'axios';
import { CONSTANT_SERVICE } from './constant';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { EXTONS_USER_LOCAL } from '../../constant/data';

class Service {
    constructor() {
        let service = axios.create({
            baseURL: CONSTANT_SERVICE.API_URL_BASE
        });
        service.interceptors.response.use(this.handleSuccess, this.handleError);
        this.service = service;
    }

    handleSuccess(response) {
        const successObject = {
            status: "success",
            data: response.data,
        }
        return successObject;
    }

    handleError(error) {
        let errorObject = {
            error: error.response,
            status: "error",
            message: error.response?.data,
        }

        if (axios.isCancel(error)) {
            errorObject.error = error;
        }

        return Promise.reject(errorObject);
    }

    preparePrivateHeaderConfig() {
        // const dataUserIsLogin = await AsyncStorage.getItem(EXTONS_USER_LOCAL);
        // let dataCheck = JSON.parse(dataUserIsLogin);

        return {
            [CONSTANT_SERVICE.AuthenticationHeaderField]: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxYzA0YWZiOC1hYmQyLTQwMjAtYjRlYS1mOTg5ODkwMTZjZTkiLCJpc3MiOiJleHRvbnMuaW8iLCJpYXQiOjE2MTgwNzQ2NTksImV4cCI6MTYxODA3NDk1OSwidW5pcXVlX25hbWUiOiIxYzA0YWZiOC1hYmQyLTQwMjAtYjRlYS1mOTg5ODkwMTZjZTkifQ.UsNMgp0c__48FeadTI7UyLQH1tjH6ZDDqaVF2yICw_E"
        }
    }

    getAPIURL(path) {
        return CONSTANT_SERVICE.API_URL_BASE + path;
    }

    getDefaultConfig({ isPrivate, isFormData } = {}) {
        let config = { headers: { ...CONSTANT_SERVICE.HEADER } }

        console.log(444545, isPrivate);
        if (isPrivate) {
            const privateHeaderConfig = this.preparePrivateHeaderConfig();
            Object.assign(config.headers, privateHeaderConfig);
        }

        if (isFormData) {
            Object.assign(config.headers, {
                'Content-Type': 'multipart/form-data'
            });
        }
        return config;
    }


    async GET(path, { isPrivate = false } = {}) {
        const config = this.getDefaultConfig({ isPrivate });
        return await this.service.get(path, config);
    }

    async POST(path, payload, { isPrivate = false, isFormData = false } = {}) {
        const config = this.getDefaultConfig({ isPrivate, isFormData });
        return await this.service.post(path, payload, config);
    }

    async PUT(path, payload, { isPrivate = false } = {}) {
        const config = this.getDefaultConfig({ isPrivate });

        return await this.service.put(path, payload, config);
    }

    async DELETE(path, { isPrivate = false } = {}) {
        const config = this.getDefaultConfig({ isPrivate });

        return await this.service.delete(path, config);
    }
}

export default new Service;
