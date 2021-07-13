import axios from "axios";
const instance = axios.create();
instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;

export default axios.create({
    baseURL: "https://randomuser.me/",
});