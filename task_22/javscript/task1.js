
function fn1() {
	var items=document.getElementsByName('nam');
	for(var i=0; i<items.length; i++){
		if (items[i].type=='checkbox')
			items[i].checked=true;
	}
}
function fn2() {
	var items=document.getElementsByName('nam');
	for(var i=0; i<items.length; i++){
		if (items[i].type=='checkbox')
			items[i].checked=false;
	}
}
function fn3() {
	var select=0;
	var items=document.getElementsByName('nam');
	for(var i=0; i<items.length; i++){
		if (items[i].type=='checkbox' && items[i].checked==true)
			select=parseInt(items[i].value)+select;
	}
	
	document.getElementById('total').innerHTML="total is="+select;
	// document.write("total is="+select);

}

   
 
