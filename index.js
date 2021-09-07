// const yosay = require('yosay')

// const find = (arr, Callback) => {

//     var value = ''
//     for (var i = 0; i < arr.length; i++) {

//         if (Callback(arr[i])) {
//             value = arr[i]
//             break
//         }
//     }
//     return value

// }
// console.log(find([1, 4 - 5, 12], (n) => n < 0));



// const findIndex = (arr, Callback) => {

//     var value = ''
//     for (var i = 0; i < arr.length; i++) {
//         if (Callback(arr[i])) {
//             value = i
//             break
//         }
//     }
//     return value
// }
// console.log(findIndex([1, 4, -5, -2], (n) => n < 0));



// const digitize = (n) => { //接受一个number类参数，拆分成一个数组并返回
//     var str = n + ""; //加上空字符中，把接收的参数转换为字符串
//     var arr = []; //声明结果空数组，稍后返回

//     str.split("").forEach((item) => {
//         arr.push(parseInt(item));
//     })
//     return arr; //返回结果数组
// }
// console.log(digitize(123456));



//替换某个
// const fill = (arr, num, start, end) => {
//     // var arr1 = []
//     for (var i = 0; i < arr.length; i++) {

//         // arr1.push(arr[i])
//         arr.splice(arr[end - start], 1, num)
//         console.log(arr[end - start]);
//     }
//     return arr

// }
// console.log(fill(['a', 'b', 'c'], 7, 1, 2));


//翻转数组
// const reverse = (arr) => {
//     var Array = []
//     for (var i = arr.length - 1; i >= 0; i--) {
//         Array.push(arr[i])
//     }
//     return Array
// }
// console.log(reverse([1, 2, 3, 4, 5]));


//替换某个
const fill = (arr, num, start, end) => {
    if (num) {
        if (start) { // 当有开始参数
            if (end) { //有结束参数
                for (var i = start; i < end; i++) {
                    arr[i] = num

                }
            } else {
                for (var i = start; i <= arr.length - 1; i++) {
                    arr[i] = num
                    console.log(start);
                }
            }
            return arr
        } else { //没有开始参数
            for (var i = 0; i < arr.length; i++) {
                arr[i] = num //全部的替换掉
            }
            return arr
        }

    }

}
console.log(fill(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 7, 5));