function SimpleSymbols(str) { 
     str = "=" +str+ "=";
   for (var i=1; i<str.length-1; i++){
     if (str.charAt(i)<="z" && str.charAt(i)>="a"){
      if (str[i-1]!=="+" || str[i+1]!=="+")
      {
          return false;

   }
   }
   }
  // code goes here  
  return true; 
         
}
   
// keep this function call here 

var result = SimpleSymbols("e+=+b+");
if (result)
  console.log("true");
else 
  console.log("false");
