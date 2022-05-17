import { config } from "../const/config";
import axios from "axios";
import { SpeakerFormParam } from "../interfaces/interface";

const apiUrl = config.API_ENDPOINT;

export const requestSpeaker = async (prop: SpeakerFormParam): Promise<any> => {
  const { formData, recaptchaValue } = prop;
  try {
    const response = await axios.post(`${apiUrl}/speakers/request`, {
      ...formData,
      "g-recaptcha-response": recaptchaValue,
    });
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
