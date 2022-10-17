function generateRandomString(length) {
    let result = "";
    let characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
  
function generateRandomNumber() {
    return Math.floor(1000 + Math.random() * 900000);
}

module.exports = { generateRandomString, generateRandomNumber };