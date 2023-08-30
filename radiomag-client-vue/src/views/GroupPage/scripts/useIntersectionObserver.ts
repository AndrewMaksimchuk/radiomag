import { onMounted, onBeforeUnmount, onUpdated } from "vue";

let intersectionObserver: IntersectionObserver;

const options = {
  threshold: 0.1,
};

const callback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((ent) => {
    if (0.1 < ent.intersectionRatio) {
      ent.target.classList.add("visibility-visible");
    }
  });
};

const getCollection = () => {
  const cardLine = document.querySelectorAll(".card-line");
  const cardTable = document.querySelectorAll(".card-table");
  return [...cardLine, ...cardTable];
};

const observeViewRun = () => {
  const collection = getCollection();

  if (0 === collection.length) {
    return;
  }

  intersectionObserver = new IntersectionObserver(callback, options);

  collection.forEach((element) => {
    intersectionObserver.observe(element);
  });
};

const observeViewStop = () => {
  intersectionObserver?.disconnect();
};

export const useIntersectionObserver = () => {
  onMounted(() => {
    observeViewRun();
  });

  onUpdated(() => {
    observeViewStop();
    observeViewRun();
  });

  onBeforeUnmount(() => {
    observeViewStop();
  });
};
