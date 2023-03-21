
function Checkprime(iNo: number) : boolean
{
    var iCnt : number = 0
    var flag : number = 0;


    for(iCnt = 1; iCnt <= iNo; iCnt++)
    {
        if((iNo % iCnt) == 0)
        {
            flag++;
        }
    }

    if(flag == 2)
    {
        console.log("Its a prime number")
    }
    else
    {
        console.log("Its not a prime number")
    }
}

Checkprime(7)
