

function SecondMax(Arr : number[]) : number
{
    var iNo1 : number = 0;
    var iNo2 : number = 0;
    
    for(var iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        if(Arr[iCnt] > iNo1)
        {
            iNo2 = iNo1
            iNo1 = Arr[iCnt]
        }
        else if(Arr[iCnt] > iNo2 && Arr[iCnt] < iNo1)
        {
            iNo2 = Arr[iCnt]
        }
    } 
    return iNo2
}

var list : number[] = [10,5,7,125,2,1,75]
var iRet = SecondMax(list)
console.log("Second largest number among all array elements : " + iRet)