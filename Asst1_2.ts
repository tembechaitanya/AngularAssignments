
function Area(radius: number) : number
{
    var pi: number = 3.14
    var Ans: number = 0.0
    Ans = pi * radius * radius
    return Ans
}

var iRet: number = 0.0
iRet = Area(5)

console.log("Area of Circle is " + iRet)


