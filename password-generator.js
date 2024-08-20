const generator = require("generate-password")

var password = generator.generate({
	length: 10,
	numbers: true
});

function randompassword(password){
    console.log(password)
}

randompassword(password)