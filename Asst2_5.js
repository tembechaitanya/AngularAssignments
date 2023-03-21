function ChkString(str, word) {
    var result;
    if (str.includes(word)) {
        console.log(word + " is present in given string");
    }
    else {
        console.log(word + " is NOT present in given string");
    }
}
var word = "Hello";
ChkString("Hello World welcome to you", word);
