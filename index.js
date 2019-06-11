Array.prototype.select = function(callback) {
    const selected = [];
  
    for (const item of this) {
      if (callback(item)) {
          selected.push(item)
      }
    }
  
    return selected;
  };
  
  Array.prototype.calc = function() {
    let sum = 0;
  
    for (const item of this) {
      if (typeof item === "number" && !isNaN(item)) {
        sum += item;
      } else {
        return null;
      }
    }
  
    return sum;
  };
  
  Array.prototype.unpack = function(depth=1) {
    let unpacked = [];
    
    for (const item of this) {
      if (Array.isArray(item) && depth > 0) {
        unpacked = unpacked.concat(item.unpack(depth - 1));
      } else {
        unpacked.push(item);
      }
    }
  
    return unpacked;
  };
  
  
  
  // TEST
  console.log([1, 2, 3, 4, 5].select(x => x > 2)); // [3,4,5]
  
  console.log([1, 2, 3, 4, 5].calc()); //15
  console.log([1, 2, 3, "Oh hi", 5].calc()); //null
  
  console.log([[1, [2,3,[4,5]]],[6,7,[8,9],[10]]].unpack()); // [ 1, [ 2, 3, [ 4, 5 ] ], 6, 7, [ 8, 9 ], [ 10 ] ]
  console.log([[1, [2,3,[4,5]]],[6,7,[8,9],[10]]].unpack(3)); //  [1,2,3,4,5,6,7,8,9,10]
  
  