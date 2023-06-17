const HTMLNodeCollection = function(nodes) {

  const _isValidNodes = function(nodes) {
    return (nodes instanceof NodeList) || (nodes instanceof HTMLCollection);
  };

  if (!_isValidNodes(nodes)) {
    throw new Error('nodes argument must be a NodeList, HTMLCollection or Array instance');
  }

  const _nodes = nodes;
  const _cache = Array.from(_nodes);

  this.length = _cache.length;

  this[Symbol.iterator] = function() {
    return _cache[Symbol.iterator]();
  };

  this.every = function(fn) {
    return _cache.every(fn);
  };

  this.first = function() {
    return _cache[0] || null;
  };

  this.forEach = function(fn) {
    _cache.forEach(fn);
  };

  this.get = function(id) {
    for (const node of _cache) {
      if (node.id === id) {
        return node;
      }
    }
    return null;
  };

  this.isEmpty = function() {
    return _cache.length === 0;
  };

  this.last = function() {
    return _cache[_cache.length - 1] || null;
  };

  this.map = function(fn) {
    return _cache.map(fn);
  };

  this.querySelector = function(selector) {
    return _cache.find(node => node.matches(selector)) || null;
  };

  this.querySelectorAll = function(selector) {
    return new HTMLNodeCollection(_cache.filter(node => node.matches(selector)));
  };

  this.remove = function(index, deleteCount=1) {
    return new HTMLNodeCollection(_cache.splice(index, deleteCount));
  };

  this.some = function(fn) {
    return _cache.some(fn);
  };

};


const collectHTML = function(selector) {
  const nodes = document.querySelectorAll(selector);
  return new HTMLNodeCollection(nodes);
};