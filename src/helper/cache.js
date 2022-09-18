// main object in localStorage
const STORE = "commercejs";

// save in cache
export const saveInCache = (key, value) => {
  const tmp_store = JSON.parse(localStorage.getItem(STORE)) || {};
  tmp_store[key] = value;

  localStorage.setItem(STORE, JSON.stringify({ ...tmp_store }));
};

// get from cache
export const getFromCache = (key) => {
  const cache_store = JSON.parse(localStorage.getItem(STORE));

  if (!cache_store) return null;
  return cache_store[key] || null;
};

// delete from cache
export const deleteFromCache = (key) => {
  const cache_store = JSON.parse(localStorage.getItem(STORE));
  if (!cache_store) return;

  try {
    delete cache_store[key];
    localStorage.setItem(STORE, JSON.stringify(cache_store));
  } catch (err) {
    console.log(err);
  }
};

// clear cache
export const clearCache = () => {};
