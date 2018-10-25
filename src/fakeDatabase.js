const db = {};
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Gets a value associated with key
 *
 * @param {string|number} key
 * @returns value
 */
async function get(key) {
  await delay(1000);
  return db[key];
}

/**
 * Sets a key with a value
 *
 * @param {string|number} key
 * @param {*} value
 */
async function set(key, value) {
  await delay(1000);
  db[key] = value;
}

module.exports = { get, set };
