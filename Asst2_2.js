function Summation(Arr) {
    var iSum = 0;
    for (var iCnt = 0; iCnt < Arr.length; iCnt++) {
        iSum = iSum + Arr[iCnt];
    }
    return iSum;
}
var list = [10, 20, 30, 40, 50, 50];
var iRet = Summation(list);
console.log("Summation of whole array is : " + iRet);
