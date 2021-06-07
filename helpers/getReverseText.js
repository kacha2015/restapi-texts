/*
    Function - Return reverse text
*/

const getReverseText = ( value ) => {

    return value.split('').reverse().join('');

};

module.exports = { getReverseText };