import { useSendFormData } from "./sendFormData";

export const setup = () => {
  const { sendFormData } = useSendFormData();

  return {
    sendFormData,
  };
};
