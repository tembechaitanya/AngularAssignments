
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

var obj = new Circle(10);
var Ret = obj.AreaOfCircle();
console.log("Area of cicle is : " + Ret)