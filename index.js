const request = require('superagent');

module.exports = {
  get: async (url) => {
    const res = {};
    try {
      const response = await request.get(encodeURI(url));
      res.status = response.status;
      res.body = response.body;
    } catch (err) {
      res.status = err.response.status;
      res.body = err.response.body;
    }
    return res;
  },

  post: async (url, body = {}) => {
    const res = {};
    try {
      const response = await request.post(encodeURI(url)).send(body);
      res.status = response.status;
      res.body = response.body;
    } catch (err) {
      res.status = err.response.status;
      res.body = err.response.body;
    }
    return res;
  },

  put: async (url, body = {}) => {
    const res = {};
    try {
      const response = await request.put(encodeURI(url)).send(body);
      res.status = response.status;
      res.body = response.body;
    } catch (err) {
      res.status = err.response.status;
      res.body = err.response.body;
    }
    return res;
  },

  delete: async (url, body = {}) => {
    const res = {};
    try {
      const response = await request.delete(encodeURI(url)).send(body);
      res.status = response.status;
      res.body = response.body;
    } catch (err) {
      res.status = err.response.status;
      res.body = err.response.body;
    }
    return res;
  },
}
