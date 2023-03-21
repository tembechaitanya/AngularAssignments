//not getting logic...

function ChkString(str : string, word: string) : void 
{
    let result : string
    if(str.includes(word))
    {
        console.log( word + " is present in given string")
    }
    else{
        console.log( word + " is NOT present in given string")
    }
}

var word : string = "Hello"
ChkString("Hello World welcome to you", word)