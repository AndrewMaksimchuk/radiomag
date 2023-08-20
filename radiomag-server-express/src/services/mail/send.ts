import { transporter } from "./transporter";

interface SendParams {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

const isNotValidParams = (params: SendParams) => {
  return !(params.text || params.html);
};

export const send = async (params: SendParams) => {
  if (isNotValidParams(params)) {
    return { ok: false };
  }

  return await transporter.sendMail(params);
};
