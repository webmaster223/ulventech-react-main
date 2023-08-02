import axios from "axios";
const URL = "https://ulventech-react-exam.netlify.app/api";
export const HttpService = {
  getFormData() {
    return axios.get(`${URL}/form`);
  },
  postFormData(data: any) {
    return axios.post(`${URL}/form`, data);
  },
};
