function ChkArmstrong(n) {
    var r;
    var x;
    var s;
    x = n;
    s = 0;
    while (x != 0) {
        r = x % 10;
        s = s + r * r * r;
        x = x / 10;
    }
    if (s == n) {
        console.log("Armstrong number");
    }
    else {
        console.log("NOT a  Armstrong number");
    }
}
ChkArmstrong(371);
