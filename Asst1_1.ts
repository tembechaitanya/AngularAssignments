

function maximum(iNo1: number, iNo2: number, iNo3: number) : void
{
    if((iNo1 > iNo2) && (iNo1 > iNo3))
    {
        console.log(iNo1 + " is Maximum than "+ iNo2 + " & " + iNo3)
    }
    else if ((iNo2 > iNo1) && (iNo2 > iNo3))
    {
        console.log(iNo2 + " is Maximum than "+ iNo1 + " & " + iNo3)
    }
    else
    {
        console.log(iNo3 + " is Maximum than "+ iNo1 + " & " + iNo2)
    }
}

maximum(110, 81, 12)