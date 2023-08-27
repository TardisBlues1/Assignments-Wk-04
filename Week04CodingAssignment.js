console.log("Question 1: ")
const ages = [3,9,23,64,2,8,28,93]
//This creates the arry due to using brackets
console.log(ages)
const newAges = ages[ages.length - 1] - ages[0]
console.log(newAges)
//In order to calculate the last value, you use the formula x[x.length -1]. This retrieves the last value in the array. 
//You then subtract the first value in the array which is x[0]
ages.push(25)
//You use x.push() in order to add new values to the array
console.log(ages)
let newNewAges = ages[ages.length - 1] - ages[0]
console.log(newNewAges)
let total = 0
for (let i = 0; i < ages.length; i++){
    total += ages[i]
}
//This for loop runs through all of the numbers in the array adding them together
const avgAge = total/ages.length;
//This takes the total that we just found and divides it by the number of items in the array
console.log(avgAge)

console.log("Question 2: ")
let names = ["Sam", 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
let totalLetters = 0
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length
}
let avgLetters = totalLetters/names.length
console.log(avgLetters)
//The loops runs through all of the letters in the array adding them together. That total is then divided by the total number of elements depicted by "names.length"

for (let i = 0; i < names.length; i++) {
    console.log(names.join(' '))
}
//This was done to run the loop and concatenate the words back together with spaces. I used the join method to concatenate the previously provided names.

console.log("Question 3: ")
console.log("You access the last element in an array by using x[x.length] - 1")

console.log("Question 4: ")
console.log("You access the first element of an array by using x[0]")

console.log("Question 5: ")
let names2 = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
let nameLengths = []

for (let i = 0; i < names2.length; i++) {
    nameLengths.push(names2[i].length)
}
//I created a new array called 'namesLength' and pushed the previous arrays contents 
//through the loop with ".length" to get the number of characters. I had to change the 
//variable name to names2 as names was previously used.
console.log(nameLengths)

console.log("Question 6: ")
let nameLengths2 = [3, 5, 3, 5, 4, 3] 
let sum = 0

for (let i = 0; i < nameLengths2.length; i++) {
    sum += nameLengths2[i]
}
//This for loop runs through all of the numbers in the array adding them together
console.log(sum)

console.log("Question 7: ")
const repeater = (word, n) => {
    let result = ""
    for (let i = 0; i < n; i++) {
        result += word
    }
    return result
}

let result = repeater("hello", 3)
console.log(result)
// I created an arrow function using "word" and "n" as parameters. I then created an empty 
//string called result and used a for loop to run "n" times adding the "word" to the result each time it runs.

console.log("Question 8: ")
const full_name = (firstName, lastName) => `${firstName} ${lastName}`
console.log(full_name("Tenth","Doctor"))
//I created an arrow function that takes in the two parameters, "firstName"and lastName" that returns the full name together using template literals

console.log("Question 9: ")
const sumGreaterThan100 = arr => {
    let totalSum = 0 
    
    // I created a loop to go through each number in the array
    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i] // This will add the current number to the sum
    }
    return totalSum > 100
    // This will compare the totalSum with the number 100 and return true if greater than, or return false if less than
}


const numbers = [45, 57, 23, 18]
const result2 = sumGreaterThan100(numbers)
console.log(result2) 

const numbers2 = [6, 10, 12, 5]
const result3 = sumGreaterThan100(numbers2)
console.log(result3)

console.log("Question 10: ")
const arrayAverage = (numbers2) => {
    if (numbers2.length === 0) {
      return 0; // I did this to check for arrays without an element
    }
      let sum = 0 
  
        for (let i = 0; i < numbers2.length; i++) {
      sum += numbers2[i] 
        }
      const average = sum / numbers2.length
    return average
  
}
  //The loops runs through all of the numbers in the array adding them together. That total is then divided by the total number of elements depicted by "numbers.length"

  const numbersArray = [7, 25, 47, 68, 99]
  const averageResult = arrayAverage(numbersArray)
  console.log(averageResult) 
  
console.log("Question 11: ")
const compareAverage = (array1, array2) => {
    let sum1 = 0
    let sum2 = 0
  
    // I started by looping through the first array to calculate its sum
    for (let i = 0; i < array1.length; i++) {
      sum1 += array1[i] 
    }
  
    // I then looped through the second array to calculate its sum
    for (let i = 0; i < array2.length; i++) {
      sum2 += array2[i] 
    }
  
    // I calculated the averages by dividing the sums by the number of elements (x.length)
    const average1 = sum1 / array1.length
    const average2 = sum2 / array2.length
  
    // I compared the averages and returned the result
    return average1 > average2
  }
  
  
  const array1 = [4, 6, 8]
  const array2 = [2, 7, 5]
  
  console.log(compareAverage(array1, array2))

  console.log("Question 12: ")
  const willBuyDrink = (isHotOutside, moneyInPocket) => {
    return isHotOutside && moneyInPocket > 10.50;
  }// This function will return true if it is hot outside (isHotOutside is true) and if moneyInPocket is greater than 10.50 since "&&" was used
  
  //Example:
  const isHot = true
  const money = 15.75
    
  const shouldBuyDrink = willBuyDrink(isHot, money)
console.log(shouldBuyDrink)

console.log("Question 13: ")
//I'm a big doctor who fan that stans David Tennant (the 10th and 14th Doctor). I thought it would be fun to create a function 
//that plays on that. The user is prompted to enter a number. There have only been 15 doctors, so an input outside of those parameters
//gives a specific response assuming their not a fan of Doctor Who, thus uncool :). 
//If an input that is between 1 and 15, but not 10 or 14 is entered, then you have to enter again until you get the right answer ;).
const askFavoriteDoctor = () => {
    let favoriteDoctor = parseInt(prompt("Who is your favorite Doctor Who Doctor? (Enter a number)"))
 //I ran into a problem with trying to figure out how to enter the numbers because when entered in the prompt, it is considered a string. 
 //I found that parseInt with convert it for you. 
    while (true) {
      if (favoriteDoctor === 10 || favoriteDoctor === 14) { //I used if/else if, to run my conditions. I also used boolean logic(||) and operators (===, <, and >)
        return "Great choice! You're a true Doctor Who fan!"
      } else if (favoriteDoctor < 1 || favoriteDoctor > 15) { 
        return "Not a Who fan? Fezzes are cooler than you! Access Denied Forever!"
      } else {
        favoriteDoctor = parseInt(prompt("Don't be a Lasagna. Is that you Mickey? Try again! (Enter a number)")) 
        //I used another prompt here to pop up again if they enter a Doctor that is between 1 through 15, but not 10 or 14. I added some Who references for fun.
      }
    }
  }
  
    const resultx = askFavoriteDoctor()
  console.log(resultx) 