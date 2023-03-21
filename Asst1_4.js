function Checkprime(iNo) {
    var iCnt = 0;
    var flag = 0;
    for (iCnt = 1; iCnt <= iNo; iCnt++) {
        if ((iNo % iCnt) == 0) {
            flag++;
        }
    }
    if (flag == 2) {
        console.log("Its a prime number");
    }
    else {
        console.log("Its not a prime number");
    }
}
Checkprime(7);
