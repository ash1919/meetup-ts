import { config } from "../const/config";
import axios from "axios";
import { SponsorFormParam } from "../interfaces/interface";

const apiUrl = config.API_ENDPOINT;

export const requestSponsor = async (prop: SponsorFormParam): Promise<any> => {
  const { formData, recaptchaValue } = prop;
  try {
    const response = await axios.post(`${apiUrl}/sponsor`, {
      ...formData,
      "g-recaptcha-response": recaptchaValue,
    });
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
