
export const CONSTANT_SERVICE = {
    API_URL_BASE: process.env.NODE_ENV === 'production' ? "https://api.extons.io/api" : "https://api.extons.io/api",
    AuthenticationHeaderField: "Authorization",
    HEADER: {}
}