/*
    Function - Validate text is palindrome
*/


const cleanStr = (val) =>  val.replace(/[^A-Z0-9]/ig, "").toLowerCase();

const isPalindrome = ( value ) => {
  
    const cleanValue = cleanStr(value);
    const reverseValue = cleanValue.split('').reverse().join('');

    return cleanValue === reverseValue;
}

module.exports = { isPalindrome };