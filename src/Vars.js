import axios from 'axios';

export const URL = 'data/memoryImages.json';

export function getImagesData() {
  return axios.get(URL);
}

const sizes = {
    desktop: "1024",
    tablet: "768px",
    mobile: "425px",
  };
  
  export const MEDIA_QUERIES = {
    DESKTOP: `(min-width: ${sizes.desktop})`,
    TABLET: `(max-width: ${sizes.tablet})`,
    MOBILE: `(max-width: ${sizes.mobile})`,
  };