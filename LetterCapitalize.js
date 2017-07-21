function LetterCapitalize(str) { 
 var state = 0;
 var result = "";
 for (var i=0; i<str.length; i++)
 { 
     letter = str.charAt(i);
     if (state===0){
         letter = letter.toUpperCase();
         result = result + letter;
         state=1;
     }
     else {
        if(letter===" "){
         state = 0;
        }
         result = result + letter;
         
        }
 }
  // code goes here  
  return result; 
         
}
   
// keep this function call here 
LetterCapitalize(readline());