const html = document.documentElement;

export const className = "overflow-hidden";

export const useModal = () => {
  html.classList.toggle(className);
};
