module.exports = function check(str, bracketsConfig) {
  let arrStr = str.split('');
  let arrOpen = [];
  let result = true;
  arrStr.forEach(element => {
    bracketsConfig.forEach(el => {
      if (element === el[0] && element === el[1]) {
        if (arrOpen[arrOpen.length - 1] === element) {
          arrOpen.pop();
        } else {
          arrOpen.push(element);
        }
      } else if (element === el[0]) {
        arrOpen.push(element)
      } else if (element === el[1]) {
        if (arrOpen[arrOpen.length - 1] === el[0] && arrOpen[0] !== undefined) {
          arrOpen.pop();
        } else {
          result = false;
        }
      }
    })
  });
  if (arrOpen.length === 0 && result) {
    return true
  } else return false;
  
}
