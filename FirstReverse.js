function FirstReverse(str) { 
  var x="";
  for ( var i=0;i<str.length; i++){
    x= x+str.charAt(str.length-i-1);

  }
  
  // code goes here  
  return x; 

         
}
   
// keep this function call here 
FirstReverse(readline());