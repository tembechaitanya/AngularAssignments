function Fibonacci(iNo) {
    var a = 0;
    var b = 1;
    var c;
    for (var iCnt = 0; iCnt < iNo; iCnt++) {
        console.log(a);
        c = a + b;
        a = b;
        b = c;
    }
}
Fibonacci(8);
