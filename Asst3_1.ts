

class Arithmatic
{
    public Number1;
    public Number2;

    public constructor(A: number, B: number)
    {
        this.Number1 = A;
        this.Number2 = B;
    }

    public Addition() : number
    {
        return this.Number1 + this.Number2;
    }

    public Subtraction() : number
    {
        return this.Number1 - this.Number2;
    }

    public Multiplication() : number
    {
        return this.Number1 * this.Number2;
    }

    public Division() : number
    {
        return this.Number1 / this.Number2;
    }

}

var obj1 = new Arithmatic(10,5);
var obj2 = new Arithmatic(50,10);

var Ret = obj1.Addition(); 
console.log("Addition is : " + Ret);

Ret = obj1.Subtraction();
console.log("Subtraction is : " + Ret);

Ret = obj1.Multiplication();
console.log("Multiplication is : " + Ret);

Ret = obj1.Division();
console.log("Division is : " + Ret);