// eslint-disable-next-line
import { isLetterInclude } from "../../../../radiomag-client-vue/src/views/LoginPage/scripts/isLetterInclude.js";

export const phone = (phone: string) => {
  return 12 <= phone.length && !isLetterInclude(phone);
};
