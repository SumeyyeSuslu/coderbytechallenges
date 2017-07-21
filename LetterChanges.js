function LetterChanges(str) { 
    var result = "" ;
    for (var j=0; j<str.length; j++)
    {
        var letter = str.charAt(j);
        if (letter<="z" && letter>="a"){
        if (letter=="z"){
            letter = "a";
        }
        else {
            letter = String.fromCharCode(str.charCodeAt(j)+1);
        }
      if ((letter=="a")||(letter=="e")||(letter=="i")||(letter=="o")||(letter=="u"))
        {
            letter = letter.toUpperCase();
        }
      
        
        
    }
    result  = result + letter;
    }

  // code goes here  
  return result; 
         
}
   
// keep this function call here 
LetterChanges(readline());