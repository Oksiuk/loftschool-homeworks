/* ДЗ 1 - Функции */

/* Задание 1 */
function returnFirstArgument(arg) {
    return arg;
}
  
/* Задание 2 */
function sumWithDefaults(a, b = 100) {
    return a + b;
}
  
/* Задание 3 */
function returnFnResult(fn) {
    return fn();
}
  
/* Задание 4 */
function returnCounter(number = 0) {
    
    return function() {
      return number += 1;
    }
}

/* Задание 5 */
function returnArgumentsArray() {
    return Array.from(arguments);
}
  
/* Задание 6 * */
  
function bindFunction(fn) {
    var that = this;
    var args = Array.from(arguments).slice(1);
  
    return function() {
      return fn.apply(that, args);
    }
}
  
export {
    returnFirstArgument,
    sumWithDefaults,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction
}
  