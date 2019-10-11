const NodeCache = require('node-cache');

class CacheManager {
  constructor(defaultTTL) {
    this.storage = new NodeCache({
      stdTTL: defaultTTL,
      checkperiod: defaultTTL * 1.5,
    });
  }

  set(key, value, ttl) {
    this.storage.set(key, value, ttl);
  }

  has(key) {
    const val = this.storage.get(key);

    return undefined !== val;
  }

  get(key) {
    return this.storage.get(key);
  }

  del(key) {
    this.storage.del(key);
  }

  flush() {
    this.storage.flushAll();
  }
}

module.exports = CacheManager;
