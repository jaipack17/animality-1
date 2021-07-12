const axios = require("axios");
const { animals, base } = require("../config/default.js");

/**
 * @typedef {Object} AnimalObject
 * @property {string} name
 * @property {string} image
 * @property {string} fact
 */

module.exports = {
  /**
   * Returns an image and a fact of the specified animal type(s).
   * @param {string | string[]} [type='random'] The animal type(s).
   * @returns {AnimalObject | AnimalObject[]} The image and fact object.
   */
  async getAsync(type = 'random') {
    const isArray = Array.isArray(type);
    if ((typeof type !== 'string' && !isArray) || isArray && (type = type.flat()) && !type.every(t => typeof t === 'string')) throw new TypeError("'type' must be a string or an array of strings");
    
    type = type === 'random' ? animals[Math.floor(Math.random() * animals.length)] : !isArray ? type.toLowerCase() : [...new Set(type.map(t => t.toLowerCase()))];
    
    if (!isArray && !animals.includes(type)) throw new TypeError(`'${type}' is not a valid type, the valid types are: ${animals.join(', ')}, random`);
 
    if (isArray) return Promise.all(type.map(t => this.getAsync(t)));

    try {
        axios.all([axios.get(`${base}/img/${type}`), axios.get(`${base}/fact/${type}`)]).then((res) => {
            return { name: type, image: res[0].data.link, fact: res[1].data.fact }
        })
    } catch(err) {
        throw new Error(`Failed to get type '${type}' from API.\n${err}`);
    }
  }
};
