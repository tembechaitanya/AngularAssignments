
class Circle
{
    public PI;
    public Radius;

    public constructor(val : number)
    {
        this.PI = 3.14;
        this.Radius = val;
    }

    public AreaOfCircle() : number
    {
        let AOC = 0;
        AOC = this.PI * this.Radius * this.Radius;
        return AOC;
    }

}

class CircleX extends Circle
{   
    public constructor(val : number)
    {
        super(val);
    }

    public Circumference() : number
    {
        let Circumference : number = 0;
        Circumference = 2 * this.PI * this.Radius;
        return Circumference;
    }
}

var obj = new CircleX(10);
var Ret = obj.AreaOfCircle();
console.log("Area of Circle is : " + Ret);

Ret = obj.Circumference();
console.log("Circumference is :" + Ret); 