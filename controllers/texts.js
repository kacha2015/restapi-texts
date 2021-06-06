const { getReverseText } = require('../helpers/getReverseText');
const { isPalindrome } = require('../helpers/isPalindrome');

const getText = (req, res) => {

    const textRequired = req.query.text;

    try {
        
        const textResponse = getReverseText(textRequired);

        res.status(200).json({
           text: textResponse,
           palindrome: isPalindrome(textRequired)
        });

    } catch (error) {
        res.status(400).json({
            text: "no text"
        });
    }
}

module.exports = {
    getText
}