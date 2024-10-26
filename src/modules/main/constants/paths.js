// 이미지 경로
const BASE = "@/";
const IMAGES = `${BASE}assets/images/landing/`;

export const PATHS = {
  ICON: `${IMAGES}icon/`,
  MAIN: `${IMAGES}main/`,
};

export const getImageUrl = (path) => {
  return new URL(`../../assets/${path}`, import.meta.url).href;
};
