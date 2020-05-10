export function getSelectedValue(array, toFind, type) {
    let result;
    if (type === 1) {
      result = array.filter(data => data.value === toFind)
    } else {
      result = array.filter(data => parseInt(data.value[0]) === parseInt(toFind))
    }
    return result[0]
  }