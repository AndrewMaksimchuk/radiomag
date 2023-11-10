import { createTransport } from "nodemailer";

export const transporter = createTransport({
  service: "Gmail",
  auth: {
    type: "OAuth2",
    user: "mail",
    clientId: "clientid",
    clientSecret: "clientsecret",
    refreshToken: "refreshtoken",
    accessToken: "accesstoken",
    expires: 12345,
  },
});
