//Uyga vazifa

/*1. Уникальные значения в массиве:
Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные значения из исходного массива, используя Set.*/


// let numbers = [1,2,2,3,4,5,5,6,6,7,8,9,9];

// function unique(arr){
// return [...new Set(arr)];
// }

// console.log(unique(numbers));
//=======================================================================================================================================================================



/*2. Подсчет уникальных символов в строке:
Напишите функцию, которая принимает строку и возвращает объект Map, в котором ключами являются уникальные символы из строки, а значениями - количество раз, которое каждый символ встречается в строке.*/


// let string = "How are you doing?";

// function check(str){

//  let charMap = new Map();

//  for(let char of str){ 

//     if(charMap.has(char)){
//         charMap.set(char, charMap.get(char)+1);
//     } else {
//     charMap.set(char,1)
//     }

// } 
//   return charMap;
// }


// console.log(check(string));
//=======================================================================================================================================================================


/*3. Проверка уникальности элементов:
Напишите функцию, которая принимает массив и возвращает true, если все элементы массива уникальны, и false в противном случае, используя Set.*/

// function checkTheSameElements(arr) {
//     let uniqueSet = new Set(arr);
//     return uniqueSet.size === arr.length;
// }


// console.log(checkTheSameElements([1, 2, 3, 4, 5]));
// console.log(checkTheSameElements([1, 2, 3, 3, 4, 5])); 
//=======================================================================================================================================================================



/*4.Объединение двух массивов без дубликатов:
Напишите функцию, которая принимает два массива и возвращает новый массив, содержащий все уникальные элементы из обоих массивов, используя Set.*/

// let array1 = [1,2,3,4,4,4,5,66,6];
// let array2 = [2,9,8,8,9,7];

// let combine = array1.concat(array2);

// function checkUnique(arr){
//  return[...new Set(arr)]
// }

// console.log(checkUnique(combine));
//=======================================================================================================================================================================



/*5. Подсчет количества слов в строке:
Напишите функцию, которая принимает строку и возвращает объект Map, в котором ключами являются уникальные слова из строки, а значениями - количество раз, которое каждое слово встречается в строке.*/

// let sentence = "The weather is great! Yes, The weather is great!";

// function countWords(str) {
//     let words = str.split(" ");
   
//     let wordMap = new Map();
    
//     for (let word of words) {
        
//         if (wordMap.has(word)) {
//             wordMap.set(word, wordMap.get(word) + 1);
//         } else {
//             wordMap.set(word, 1);
//         }
//     }
//     return wordMap;
// }


// console.log(countWords(sentence));
//=======================================================================================================================================================================



/*6. Удаление дубликатов из массива:
Напишите функцию, которая принимает массив и возвращает новый массив без дубликатов, используя Set.*/

// let numbers = [1,2,3,4,5,5,5,6];

// function deleteTheSameNums(nums){
//     return[...new Set(nums)];
// }

// console.log(deleteTheSameNums(numbers));
//=======================================================================================================================================================================


/*7. Проверка на подмножество:
Напишите функцию, которая принимает два массива и возвращает true, если первый массив является подмножеством второго массива, и false в противном случае, используя Set.
*/

// let array1 = [22,33,44,55];
// let array2 = [11,22,33,44,55,66,77];

// function checkSubset(arr1, arr2) {
//     let set1 = new Set(arr1);
//     let set2 = new Set(arr2);

//     for(let el of set1){
//         if(set2.has(el)){
//             return true;
//         }
//     }
//     return false;
// }

// console.log(checkSubset(array1,array2));
//=======================================================================================================================================================================



/* 8. Уникальные символы в двух строках:
Напишите функцию, которая принимает две строки и возвращает новую строку, содержащую только уникальные символы из обеих строк, используя Set.*/

// function checkTheUnique(str1,str2){
//     let combine = str1.concat(str2);
//     let uniqueSet = new Set(str1,str2);

//     for(let char of combine){
//         uniqueSet.add(char);
//     }

//     return [...uniqueSet].join('')
// }
// console.log(checkTheUnique("What happened?","What do you mean?"));
//=======================================================================================================================================================================



/* 9.Сложение значений в Map:
Напишите функцию, которая принимает объект Map, содержащий числовые значения, и возвращает сумму всех значений.*/


// function sumOfMap(){

//     let map = new Map();
//     map.set('age',24);
//     map.set('age1',23);
//     map.set('age2',24);
//     map.set('age3',25);

//   let sum = 0;

//   map.forEach(value => {
//     sum += value; 
//    });

//     return sum;
// }
// console.log(sumOfMap());
//=======================================================================================================================================================================



/*10. Нахождение общих ключей в двух Map:
Напишите функцию, которая принимает два объекта Map и возвращает новый объект Map, содержащий только ключи, которые присутствуют в обоих исходных Map.*/

// let map = new Map();
// map.set('age', 24);
// map.set('height', 180);
// map.set('weight', 75);


// let map1 = new Map();
// map1.set('age', 24);
// map1.set('height', 180);
// map1.set('weight', 75);
// map1.set('color', "black");
// map1.set('student',false);


// function check(x1,x2){
//    let result = new Map();

//    for(let key of x1.keys()){
//     if(x2.has(key)){
//         result.set(key,true);
//     }
//    }
//    return result;
// }

// console.log( check(map,map1));