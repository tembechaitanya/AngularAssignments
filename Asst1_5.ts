

function Fibonacci(iNo : number) : void 
{
    var a : number = 0
    var b : number = 1
    var c : number

    for(var iCnt = 0; iCnt < iNo; iCnt++)
    {
        console.log(a)
        c = a + b
        a = b
        b = c
    }
}

Fibonacci(8)