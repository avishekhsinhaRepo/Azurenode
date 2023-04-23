const loggingMiddleWare = (req, res) => {
    console.log("Logging...");
    req.next();
};

module.exports = loggingMiddleWare;