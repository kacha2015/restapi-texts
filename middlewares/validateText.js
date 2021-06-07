/*
    Middleware - Validate empty text
*/

const validateText = (req, res, next) => {

    const textRequired = req.query.text;

    if ( textRequired === '' ) {
        return res.status(400).json({
           text: "no text"
        });
    }

    next();
}

module.exports = {
    validateText
}

