import axios from 'axios';
import { CONSTANT_SERVICE } from './constant';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { EXTONS_USER_LOCAL } from '../../constant/data';
import { useSelector } from 'react-redux';

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

    async preparePrivateHeaderConfig() {
        const dataUserIsLogin = await AsyncStorage.getItem(EXTONS_USER_LOCAL);
        let dataCheck = JSON.parse(dataUserIsLogin);

        return {
            [CONSTANT_SERVICE.AuthenticationHeaderField]: `Bearer ${dataCheck.accessToken}`
        }
    }

    getAPIURL(path) {
        return CONSTANT_SERVICE.API_URL_BASE + path;
    }

    async getDefaultConfig({ isPrivate, isFormData } = {}) {
        let config = { headers: { ...CONSTANT_SERVICE.HEADER } }

        if (isPrivate) {
            const privateHeaderConfig = await this.preparePrivateHeaderConfig();
            Object.assign(config.headers, privateHeaderConfig);
        }

        if (isFormData) {
            Object.assign(config.headers, {
                'Content-Type': 'multipart/form-data'
            });
        }

        // console.log('%c Call API ', 'background: #000; color: #bada55; font-size: 20px');
        return config;
    }


    async GET(path, { isPrivate = false } = {}) {
        const config = await this.getDefaultConfig({ isPrivate });
        return await this.service.get(path, config);
    }

    async POST(path, payload, { isPrivate = false, isFormData = false } = {}) {
        const config = await this.getDefaultConfig({ isPrivate, isFormData });
        return await this.service.post(path, payload, config);
    }

    async PUT(path, payload, { isPrivate = false } = {}) {
        const config = await this.getDefaultConfig({ isPrivate });

        return await this.service.put(path, payload, config);
    }

    async DELETE(path, { isPrivate = false } = {}) {
        const config = await this.getDefaultConfig({ isPrivate });

        return await this.service.delete(path, config);
    }
}

export default new Service;
