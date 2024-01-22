// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];            //sumDoubleArr =  80  ---> true
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];            //sumDoubleArr =  80  ---> true
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];               //sumDoubleArr =  60  ---> true
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];            //sumDoubleArr =  60  ---> true
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];            //sumDoubleArr =  100 ---> true

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];          //sumDoubleArr =  85  ---> false
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];          //sumDoubleArr =  82  ---> false
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];             //sumDoubleArr =  78  ---> false
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];          //sumDoubleArr =  65  ---> false
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];          //sumDoubleArr =  71  ---> false

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];             //sumDoubleArr =  61  ---> false
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];          //sumDoubleArr =  50  ---> true
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]; //sumDoubleArr =  56  ---> false
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];          //sumDoubleArr =  84  ---> false
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];          //sumDoubleArr =  60  ---> true

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

function validateCred(arr){
  let doubleArr = [];
  let sumDoubleArr = 0;
  let numCheck = 0

  for(let i = arr.length-1; i >= 0; i--){
    numCheck = arr[i];
  
    if ((arr.length-1-i) % 2 === 1){
      numCheck *= 2

      if (numCheck > 9){
        numCheck -=9;     
        doubleArr.unshift(numCheck);
        sumDoubleArr+= numCheck;
        numCheck = 0;
        }else{      
          doubleArr.unshift(numCheck);
          sumDoubleArr+= numCheck
          numCheck = 0;}

      }else{      
        doubleArr.unshift(numCheck);
        sumDoubleArr+= numCheck
        numCheck = 0;}
    };

    /* Checkpoint
    console.log(valid1) //-----------------> [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8] 
    console.log(doubleArr) //--------------> [8, 5, 6, 9, 3, 7, 5, 9, 0, 8, 0, 1, 3, 8, 0, 8] 
    console.log(sumDoubleArr) //-----------> 80
    */

  if(sumDoubleArr % 10 === 0){
    return true;
  }else{
    return false;
  
  };
  

};

//console.log(validateCred(valid1)); //---> true


function findInvalidCards(nestedArr){
  let validCards = [];
  let invalidCards = [];

  for(let i = 0; i < nestedArr.length; i++){
    if (validateCred(nestedArr[i])=== true){
      validCards.push(nestedArr[i]);
    }else {
       invalidCards.push(nestedArr[i]); 
    }
  }
    return invalidCards;
};

let valid = [valid1, valid2, valid3, valid4, valid5];
let invalid = [invalid1, invalid2, invalid3, invalid4, invalid5];


function isInvalidCardCompanies(invalidCardCompanies){
  let cardCompanyName = []

  for(let i = 0; i < invalidCardCompanies.length; i++){ 
     switch(invalidCardCompanies[i][0]){
      case 3:
        cardCompanyName.push('Amex');
        break;
      case 4:
        cardCompanyName.push("Visa");
        break;
      case 5:
        cardCompanyName.push("Mastercard");
        break;
      case 6:
        cardCompanyName.push("Discover");
        break;
      default:
        cardCompanyName.push("Company not found");
    }
  };
  
  let cardCompanyUnique = new Set(cardCompanyName);
  const cardCompanyNameUniqueArr = [...cardCompanyUnique];

  return cardCompanyNameUniqueArr
};

console.log(isInvalidCardCompanies(findInvalidCards(batch)));  //----> [ 'Visa', 'Mastercard', 'Amex', 'Discover' ]

console.log(validateCred(valid1)) //----> true

console.log(findInvalidCards(valid)); //-------> []
console.log(findInvalidCards(invalid)); /*-----> [ [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5],
                                                   [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3],
                                                   [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4],
                                                   [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5],
                                                   [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]  ]*/