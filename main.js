function caesarCipherEncryptor(string, key) {
	let myArray = string.split("");
	let newString = ''
    let char = ''
    let charCode = ''

    key = key % 26;
    console.log(key)
	for(let i = 0; i < myArray.length; i++){
		char = myArray[i]
		charCode = char.charCodeAt(0);
        charCode = charCode + key
        if (charCode > 122) {
          charCode = 96 + (charCode - 122);
        }
		newString += String.fromCharCode(charCode);
	}
	return newString
}
