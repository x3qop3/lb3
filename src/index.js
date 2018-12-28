/* Часть 1 - Функции */

/*
 Задание 1:

 Функция должна принимать один аргумент и возвращать его
 */
function returnFirstArgument(arg) {
    return arg;

}

/*
 Задание 2:

 Функция должна принимать два аргумента и возвращать сумму переданных значений
 Значение по умолчанию второго аргумента должно быть 100
 */
function defaultParameterValue(a, b) {
    b=100;
    return a+b;
}

/*
 Задание 3:

 Функция должна возвращать все переданные в нее аргументы в виде массива
 Количество переданных аргументов заранее неизвестно
 */
function returnArgumentsArray() { 
var result = []; 
for (var i = 0; i < arguments.length; i++) { 
result[i] = arguments[i]; 
} 
return result; 
}
/*
 Задание 4:

 Функция должна принимать другую функцию и возвращать результат вызова переданной функции
 */
function returnFnResult(fn) {
    return fn();
}

/*
 Задание 5:

 Функция должна принимать число (значение по умолчанию - 0) и возвращать функцию (F)
 При вызове F, переданное число должно быть увеличено на единицу и возвращено из F
 */
function returnCounter(number = 0) {
    return function F()
    {
        return ++ number;
    }

}

/*
 Задание 6 *:

 Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
 Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию
 */
function bindFunction(F, x , y, z) 
{
F = F.bind(null, x ,y,z )
return F;
}
/* Часть 2 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++ ) {
        fn(array[i], i, array);
    }
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
    let results = []; 

    for (let i = 0; i < array.length; i++ ) { 
        let item = fn(array[i], i, array); 

        results.push(item); 
    }

    return results; 
}


/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
    let i = 0;
    let result = initial || array[i++];

    while (i < array.length) {
        result = fn(result, array[i], i, array);
        i++;
    }
    return result;
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
    delete obj[prop];
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
    if (prop in obj) {
        return true;
    } else {
        return false;
    }
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
var arr = [];
for(var svoistvo in obj)
{
    arr.push(svoistvo);
}
return arr;

}


/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
    var arr = [];
    for (var svoistvo in obj)
    {
        svoistvo = key.toUpperCase();
        arr.push(svoistvo)
    }
    return arr;
}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from, to) {
}

/* Часть 3 - работа с исключениями и отладчиком */

/*
 Задача 1:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true только если fn вернула true для всех элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */
function isAllTrue(array, fn) {
    if(!Array.isArray(array) || array.length == 0){
        throw new Error('empty array');
    }
    if(typeof fn != 'function'){
        throw new Error('fn is not a function');
    }

    var isTrue = true;

    
    for(var k = 0; k < array.length; k++){
        if(fn(array[k]) == false){
            return false;
        }
    }
    return isTrue;
}

/*
 Задача 2:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true если fn вернула true хотя бы для одного из элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */
function isSomeTrue(array, fn) {
    if(!Array.isArray(array) || array.length == 0){
        throw new Error('empty array');
    }
    if(typeof fn != 'function'){
        throw new Error('fn is not a function');
    }

    for(var i = 0; i < array.length; i++){
        if(fn(array[i])){
            return true;
        }
    }
}

/*
 Задача 3:
 Функция принимает заранее неизветсное количество аргументов, первым из которых является функция fn
 Функция должна поочередно запусти fn для каждого переданного аргумента (кроме самой fn)
 Функция должна вернуть массив аргументов, для которых fn выбросила исключение
 Необходимо выбрасывать исключение в случаях:
 - fn не является функцией (с текстом "fn is not a function")
 */
function returnBadArguments(fn) {
    var arr = [];

    if(typeof fn != 'function'){
        throw new Error('fn is not a function');
    }
    if(arguments.length == 1){
        return arr;
    }

    for(var i = 1; i < arguments.length; i++){
        try{
            fn(arguments[i]);
        } catch(e){
            arr.push(arguments[i])
        }
    }
    return arr;
}
}

/*
 Задача 4:
 Функция имеет параметр number (по умолчанию - 0)
 Функция должна вернуть объект, у которого должно быть несколько методов:
 - sum - складывает number с переданными аргументами
 - dif - вычитает из number переданные аргументы
 - div - делит number на первый аргумент. Результат делится на следующий аргумент (если передан) и так далее
 - mul - умножает number на первый аргумент. Результат умножается на следующий аргумент (если передан) и так далее

 Количество передаваемых в методы аргументов заранее неизвестно
 Необходимо выбрасывать исключение в случаях:
 - number не является числом (с текстом "number is not a number")
 - какой-либо из аргументов div является нулем (с текстом "division by 0")
 */
function calculator() {
    var number = number || 0;

    if(!Number.isFinite(number)){
        throw new Error('number is not a number');
    }

    var obj;
    return obj = {
        sum : function(){
            for (var i = 0; i < arguments.length; i ++) {
                number = number + arguments[i];
            }
            return number;
        },
        dif : function(){
            for (var i = 0; i < arguments.length; i ++) {
                number = number - arguments[i];
            }
            return number;
        },
        div : function(){
            for (var i = 0; i < arguments.length; i ++) {
                if(arguments[i] == 0){
                    throw new Error('division by 0');
                }
                number = number / arguments[i];
            }
            return number;
        },
        mul : function(){
            for (var i = 0; i < arguments.length; i ++) {
                number = number * arguments[i];
            }
            return number;
        }
    }
}

export {
    returnFirstArgument,
    defaultParameterValue,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction,
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    isAllTrue,
    isSomeTrue,
    returnBadArguments,
    calculator
}
