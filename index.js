const fi = (function () {
  return {
    libraryMethod: function () {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function (collection, func) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          func(collection[i], i, collection);
        }
      } else if (typeof collection === "object") {
        for (let item in collection) {
          func(collection[item], item, collection);
        }
      }
      return collection;
    },

    map: function (collection, func) {
      let newArr = [];
      if (Array.isArray(collection)) {
        for (let item = 0; item < collection.length; item++) {
          newArr.push(func(collection[item], item, collection));
        }
      } else if (typeof collection === "object") {
        for (let item in collection) {
          newArr.push(func(collection[item], item, collection));
        }
      }
      return newArr;
    },

    reduce: function (collection, callback, acc) {
      let newArr = collection.slice();
      if (!acc) {
        acc = newArr[0];
        newArr = newArr.slice(1);
      }
      for (let item of newArr) {
        acc = callback(acc, item, newArr);
      }
      return acc;
    },

    find: function (collection, callback) {
      for (let item of collection) {
        if (callback(item)) {
          return item;
        }
      }
      return undefined;
    },

    filter: function (collection, callback) {
      let newArr = [];
      for (let item of collection) {
        if (callback(item)) {
          newArr.push(item);
        }
      }
      return newArr;
    },

    size: function (collection) {
      let count = 0;
      for (let key in collection) {
        count++;
      }
      return count;
    },

    first: function (collection, num) {
      let collectionCopy = collection.slice();
      let newArr = [];
      if (!num) {
        return collection[0];
      }
      for (let i = 0; i < 3; i++) {
        newArr.push(collection[i]);
        collectionCopy = collectionCopy.slice(1);
      }

      return newArr;
    },

    last: function (collection, num) {
      return !num ? collection[collection.length - 1] : collection.slice(-num);
    },

    compact: function (collection) {
      let newArr = [];
      for (var i = 0; i < collection.length; i++) {
        if (collection[i]) {
          newArr.push(collection[i]);
        }
      }
      return newArr;
    },

    sortBy: function (arr, func) {
      return [...arr].sort(function (a, b) {
        return func(a) - func(b);
      });
    },

    flatten: function (arrayOfArrays, shallow) {
      let newArr = [];
      if (!shallow) {
        for (let item of arrayOfArrays) {
          if (Array.isArray(item)) {
            newArr = newArr.concat(this.flatten(item));
          } else {
            newArr.push(item);
          }
        }
      } else {
        for (let item of arrayOfArrays) {
          if (typeof item === "number") {
            newArr.push(item);
          } else if (Array.isArray(item)) {
            for (let num of item) {
              newArr.push(num);
              console.log(newArr);
            }
          }
        }
      }
      return newArr;
    },
    uniq: function (collection, isTrue, callback) {
      var newArr = [];
      if (!callback) {
        for (let num of collection) {
          if (!newArr.includes(num)) {
            newArr.push(num);
          }
        }
      } else {
        let newObj = {};
        for (let item of collection) {
          let modifiedItem = callback(item);
          if (newObj[modifiedItem] === undefined) {
            newObj[modifiedItem] = item;
            newArr.push(item);
          }
        }
        //return Object.values(newObj)
      }
      return newArr;
    },

    keys: function (object) {
      let newArr = [];
      for (let key in object) {
        newArr.push(key);
      }
      return newArr;
    },
    values: function (object) {
      let newArr = [];
      for (let key in object) {
        newArr.push(object[key]);
      }
      return newArr;
    },
    functions: function (obj) {
      let newArr = [];
      for (let key in obj) {
        if (typeof obj[key] === "function") {
          console.log(obj[key]);
          newArr.push(obj[key]);
        }
      }
      return newArr;
    },
  };
})();

fi.libraryMethod();
