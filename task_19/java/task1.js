debugger;
var a= 2;
    b=2016;
    c="29 days";
    d="30 days";
    e="31 days";
switch(a){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:  document.write('year='+b+' '+"month="+a+'<br> '+"days="+e);
    break;

    case 4:
    case 6:
    case 9:
    case 11:  document.write('year='+b+' '+"month="+a+'<br> '+"days="+d);
    break;

    case 2: document.write('year='+b+' '+"month="+a+'<br> '+"days="+c);
}
function leapyear(year) {
  return  year % 4 == 0;
}
console.log(leapyear(2016));