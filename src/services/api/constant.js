let apiProd = "https://api.extons.io/api";
let apiLocal = "http://192.168.61.21:5000/api";
let apiTest = "https://test-api-v1.extons.io/api"

export const CONSTANT_SERVICE = {
    API_URL_BASE: process.env.NODE_ENV === 'production' ? apiProd : apiTest,
    AuthenticationHeaderField: "Authorization",
    linkImage: "https://cdn-extons.tons.network/extons_resources/asset_logos/",
    HEADER: {}
}