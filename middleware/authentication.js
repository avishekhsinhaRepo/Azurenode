const auth = (req, res) => {
    console.log("Authencating...")
    req.next();
}
module.exports = auth;