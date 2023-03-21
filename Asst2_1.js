function FindMax(Arr) {
    var iMax = Arr[0];
    for (var iCnt = 0; iCnt < Arr.length; iCnt++) {
        if (Arr[iCnt] > iMax) {
            iMax = Arr[iCnt];
        }
    }
    return iMax;
}
var list = [10, 22, 9, 12, 5, 100];
var iRet = FindMax(list);
console.log("Max among all is : " + iRet);
