const fs = require("fs")

fs.writeFile("welcome2.txt", "HELLO NODE!!!", "utf-8",(err) => {
    if(err) throw err
    console.log("le ficher crée")
})


fs.readFile('welcome2.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log(data.toString());
});
