import axios from 'axios';
import { CONSTANT_SERVICE } from './constant';

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
        // const { token } = AuthenticationServices.hasUserSession();

        return {
            [CONSTANT_SERVICE.AuthenticationHeaderField]: "token"
        }
    }

    getAPIURL(path) {
        return CONSTANT_SERVICE.API_URL_BASE + path;
    }

    getDefaultConfig({ isPrivate, isFormData } = {}) {
        let config = { headers: { ...CONSTANT_SERVICE.HEADER } }
        console.log(1111, config);
        console.log(isPrivate);
        if (isPrivate) {
            const privateHeaderConfig = this.preparePrivateHeaderConfig();
            Object.assign(config.headers, privateHeaderConfig);
        }

        if (isFormData) {
            Object.assign(config.headers, {
                'Content-Type': 'multipart/form-data'
            });
        }

        console.log("2222222", config);

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
