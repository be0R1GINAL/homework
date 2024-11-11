
// const users = ['John','Ann','Alex','Max']
// const numbers = [1,2,3]

// function checkForCopyItem(array, item) {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] === item) {
//             return `There is a copy of the ${item} in array`
//         }
//     }
//     return `There is no such item in the array`
// }

// console.log(checkForCopyItem(users, 'Ann'))


function nameUser( firstName){
return "Hello " + firstName
}
const result = nameUser('Nikita')
console.log(result)




const numbers = [2,4,1,6,30,24,245,13,9,11,10,76,55,25,18,7]
function checkNumbers(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] > 10) {
            console.log(array[i])
        }
    }
    
}
checkNumbers(numbers)


function calc(firstNumber, secondNumber, Sign) {
    if(Sign === '-' ){
        return firstNumber - secondNumber
    }
    if(Sign === '+'){
        return firstNumber + secondNumber
    }
    if(Sign === '*'){
        return firstNumber * secondNumber
    }
    if(Sign === '/'){
        return firstNumber / secondNumber
    }
}
console.log(calc(12,6,'+'))










