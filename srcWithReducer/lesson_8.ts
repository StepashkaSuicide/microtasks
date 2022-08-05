import React from 'react';


// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

// export function sum(...nums: Array<number>): number {
//     let x = 0;
//     return nums.map(i => x += i, x).reverse()[0]
// }


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

// export function getTriangleType(a: number, b: number, c: number): string {
//     if (a + b >= c && b + c >= a && a + c >= b) {
//         if (a === b && c === b) {
//             return "10"
//         } else if (a === b || a === c || c === b) {
//             return "01"
//         } else {
//             return "11"
//         }
//     } else {
//         return "00"
//     }
// }


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

// export function getSum(number: number): number {
//     let spl = number.toString().split('')
//     let mapSpl = spl.map(Number)
//     return (mapSpl.reduce((acc, item) => acc + item, 0))
// }

// export function getSum (number:number):number {
//     let figures = "" + number
//     let sum = 0
////     for (let i = 0; i < figures.length; i++)
//         sum += +figures[i]
//
//     return sum
// }



// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

// export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
//     let sumChet = 0, sumNeChet = 0
//     arr.forEach((num, i) => {
//             if (i % 2 === 0) {
//                 sumChet = sumChet + num
//             } else {
//                 sumNeChet = sumNeChet + num
//             }
//         }
//     )
//     return sumChet > sumNeChet
// }

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


// export function getSquarePositiveIntegers(array: Array<number>): Array<number> {

// let result = []
//     for (let i= 0; i< array.length; i++){
//         if (i !== array.length - 1){
//            result = Math.pow(array[i], array[i])
//         }
//     }
//     return result
// }

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

// export function sumFirstNumbers(n: number): number {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }
// ----
// export function sumFirstNumbers(n: number): number {
// return n * (n + 1) / 2;
// }

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


// export function getBanknoteList(amountOfMoney: number): Array<number> {
//     //...здесь пишем код.
//     // В return стоит "заглушка", чтоб typescript не ругался
//     return [1]
// }

































