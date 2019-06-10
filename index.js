Array.prototype.select = function(cb) {
  let selected = [];

  for (const key in this) {
    cb(this[key], key, this) && selected.push(this[key]);
  }

  return selected;
};

Array.prototype.calc = function() {
  let sum = 0;

  for (const key of this) {
    if (typeof key === "number" && !isNaN(key)) {
      sum += key;
    } else {
      return null;
    }
  }

  return sum;
};

Array.prototype.unpack = function() {
  let unpacked = [];
  
  for (const key of this) {
    if (key instanceof Array) {
      unpacked = unpacked.concat(key.unpack());
    } else {
      unpacked.push(key);
    }
  }

  return unpacked;
};



// TEST
console.log([1, 2, 3, 4, 5].select(x => x > 2)); // [3,4,5]

console.log([1, 2, 3, 4, 5].calc()); //15
console.log([1, 2, 3, "Oh hi", 5].calc()); //null

console.log([[1, [2,3,[4,5]]],[6,7,[8,9],[10]]].unpack()); //  [1,2,3,4,5,6,7,8,9,10]

