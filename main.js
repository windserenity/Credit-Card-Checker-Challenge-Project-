// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

const validateCred = array => {
  // console.log('original array ' + array); // prints orignal array to consle for tests
  let tempArray = [];
  let tempArray2 = [];
  let reconstructedArry = [];
    for (let i = array.length-2; i >= 0; i-=2){ // loop for every other number starting from the second to the right
      tempArray.push(array[i]*2);       
      }
    for (let k = array.length-1; k >= 0; k-=2){ // loop for every other number starting the first from the right
       tempArray2.push(array[k]);
       }
    
    for (let j = 0; j < tempArray.length; j++){ // run through new array and check if any num is bigger then 9 
        if (tempArray[j]> 9 ){
          tempArray[j] = tempArray[j] -9;
         }
      } 

    // Join both arrays back into a single string
     for(let x = 0; x < tempArray2.length + tempArray.length; x++){
         if(x % 2 === 0){
           reconstructedArry.push(tempArray2[x/2]);
         }else{
           reconstructedArry.push(tempArray[(x-1)/2]);
         };
      };
   reconstructedArry.reverse(); // revert to origninal order. 
   
   const reducer = (accumulator, curr) => accumulator + curr; // callback function to add up array.
   let sumOfArray = reconstructedArry.reduce(reducer) %10;
      // console.log('remainder ' + sumOfArray) // returnes the reminder value
      // console.log('doubled array ' + reconstructedArry); // returnes reconstructed array based on the loghn aglogrethom
      if (sumOfArray === 0){
        return true;
      }else{
        return false;
      }



};
console.log(validateCred(mystery5));


const findInvalidCards = nestedArray => {
  let falseArray = [];
  for (let i = 0 ; i < nestedArray.length ; i++){
    if (validateCred(nestedArray[i]) === false){
      // console.log(validateCred(nestedArray[i]));
      falseArray.push(nestedArray[i]);
    }
    
  }
  return falseArray;
};

// console.log(findInvalidCards(batch));

const idInvalidCardCompanies = ArrayOfInvalidNum => {
  let arrOfCompanies = [];
   ArrayOfInvalidNum.forEach(element => {
      switch (element[0]){
        case 3:
             arrOfCompanies.push('Amex');
          break;  
        case 4:
          arrOfCompanies.push('Visa');
          break;
        case 5:
          arrOfCompanies.push('Mastercard');
          break;
        case 6:
          arrOfCompanies.push('Discover');
          break; 
        default:
             console.log('Company not found.');
      }  
   });
   
  let uniqueArr = [...new Set(arrOfCompanies)];


  return uniqueArr;

};


console.log(idInvalidCardCompanies(findInvalidCards(batch)));