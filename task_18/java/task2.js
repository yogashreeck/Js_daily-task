var markMass=10;
    markHeight=1;
    johnMass=1;
    johnHeight=10;
    markBmi=markMass/markHeight**2;
    johnBmi=johnMass/johnHeight**2;
    boolean=markBmi>johnBmi;
    document.write("mark mass="+markMass+"kg"+"<br>" );
    document.write("john Mass="+johnMass+"kg"+"<br>");
    document.write("mark Height="+markHeight+"meter"+"<br>");
    document.write("john Height="+johnHeight+"meter"+"<br>");
    document.write("mark Bmi="+markBmi+"<br>");
    document.write("john Bmi="+johnBmi+"<br>");
    document.write(boolean);
    if(markBmi>johnBmi)
    {
    	console.log( " is mark's Bmi higher than john's?"+boolean);
    }