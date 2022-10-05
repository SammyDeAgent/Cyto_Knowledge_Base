// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) 
// contains 20 letters. 
// The use of "and" when writing out numbers is in compliance with British usage.

const onesMap = ['one','two','three','four','five','six','seven','eight','nine']; // starts from 1 - 9
const specialMap = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']; // Doesn't include case for 1X, starts from 2X
const tensMap = ['twenty','thirty','forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']; // One-X case, starts from 10 - 19
const hundred = 7;
const thousand = 8;
const and = 3;

const limit = 1000;

let numberSum = 0;

for(let i = 1; i <= limit; i++){
  let temp = i;
  let sum = 0;
  let andFlag = false;
  let debug = "";
  if(parseInt(temp / 1000) != 0) {
    sum += onesMap[parseInt(temp/1000)-1].length + thousand;
    debug += onesMap[parseInt(temp/1000)-1] + " thousand ";
    temp %= 1000;
  }  
  if(parseInt(temp / 100) != 0){
    sum += onesMap[parseInt(temp/100)-1].length + hundred;
    debug += onesMap[parseInt(temp/100)-1] + " hundred "
    temp %= 100;
    if(temp != 0) {
      debug += "and";
      andFlag = true;
    }
  }
  if(parseInt(temp / 10) != 0){
    if(parseInt(temp/10) == 1) {
      temp %= 10;
      sum += specialMap[parseInt(temp)].length;
      debug += " " + specialMap[parseInt(temp)];
      if(andFlag) sum += and;
      numberSum += sum;
      console.log(`${i} - ${debug}: ${sum}`);
      continue;
    }else{
      sum += tensMap[parseInt(temp/10)-2].length;
      debug += " " + tensMap[parseInt(temp/10)-2];
      temp %= 10;
    }
  }
  if(temp != 0) {
    sum += onesMap[parseInt(temp)-1].length;
    debug += " " + onesMap[parseInt(temp)-1]
  }
  if(andFlag) sum += and;
  numberSum += sum;
  console.log(`${i} - ${debug}: ${sum}`);
}
console.log(numberSum);
