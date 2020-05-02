/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (let i = 0; i < array.length; ++i) {
        fn(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    let newArray = [];

    for (let i = 0; i < array.length; ++i) {
        let item = fn(array[i], i, array);

        newArray.push(item);
    }

    return newArray;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    let accumulator;
    let index;

    if (initial) {
        accumulator = initial;
        index = 0;
    } else {
        accumulator = array[0];
        index = 1;
    }

    for (let i = index; i < array.length; ++i) {
        accumulator = fn(accumulator, array[i], i, array);
    }

    return accumulator;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    return Object.keys(obj).map(key => key.toUpperCase());
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
    let newArray = [];
    let length = array.length;
    let start, end;

    switch (true) {
        case from === undefined:
            start = 0;
            break;
        case from >= length:
            return newArray;
        case from >= 0 && from < length: 
            start = from;
            break;
        case from < 0 && -from < length:
            start = length + from;
            break;
        case from < 0 && -from >= length: 
            start = 0;
            break;
    }

    switch (true) {
        case to === undefined:
            end = length;
            break;
        case to > 0 && to <= length:
            end = to;
            break;
        case to > length:
            end = length;
            break;
        case to < 0 && -to <= length:
            end = length + to;
            break;
        case to < 0 && -to > length:
            return newArray;
    }

    for (let i = start; i < end; ++i) {
        newArray.push(array[i]);
    }

    return newArray;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    let proxy = new Proxy(obj, {
        set(target, prop, value) {
            target[prop] = value * value;
            
            return true;
        }
    });

    return proxy;
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
