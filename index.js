function myEach(element, alert) {
    Object.values(element).forEach((elem) => {
      alert(elem);
    });
    return element;
  }
  
  function myMap(element, callback) {
    const objValues = Object.values(element);
    callback = objValues.map((elem) => elem * 3);
    return callback;
  }
  
  function myReduce(collection, callback, acc) {
    const objValues = Object.values(collection);
    if (acc) {
      let objtotal = objValues.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue * 3;
      }, acc);
      return objtotal;
    } else {
      let objtotal = objValues.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue * 3;
      });
      return objtotal;
    }
  }
  
  function myFind(element, target) {
    element = Object.values(element);
    for (let i = 0; i < element.length; i++)
      if (target(element[i])) return element[i];
    return undefined;
  }
  
  function myFilter(element, val) {
    let objValues = Object.values(element);
    return objValues.filter((num) => num > 10);
  }
  
  function mySize(element) {
    let objValues = Object.values(element);
    const newArr = new Set(objValues);
    return newArr.size;
  }
  
  function myFirst(element, n) {
    let objValues = Object.values(element);
    if (n) {
      return objValues.slice(0, n);
    }
    return objValues[0];
  }
  
  function myLast(element, n) {
    let objValues = Object.values(element);
    if (n) {
      return objValues.slice(-n);
    }
    let last = objValues.slice(-1);
    return last[0];
  }
  
  function myKeys(element) {
    return Object.keys(element);
  }
  
  function myValues(element) {
    return Object.values(element);
  }