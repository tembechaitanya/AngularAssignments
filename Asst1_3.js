function DisplayFactors(No) {
    var iCnt = 0;
    for (iCnt = 1; iCnt < No; iCnt++) {
        if ((No % iCnt) == 0) {
            console.log(iCnt);
        }
    }
}
DisplayFactors(20);
