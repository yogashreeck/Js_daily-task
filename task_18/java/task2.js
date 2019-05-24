var markMass=10;
    markHeight=1;
    johnMass=1;
    johnHeight=10;
    markBmi=markMass/markHeight**2;
    johnBmi=johnMass/johnHeight**2;
    boolean=markBmi>johnBmi;
    document.write("mark Bmi="+markBmi+"<br>");
    document.write("john Bmi="+johnBmi+"<br>");
    if(markBmi>johnBmi)
    {
    	console.log( " is mark's Bmi higher than john's?"+boolean);
    }