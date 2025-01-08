const getImageURL = (fileName) => {
  return new URL(`../assets/${fileName}`, import.meta.url).href; 
}

export default { getImageURL }; 