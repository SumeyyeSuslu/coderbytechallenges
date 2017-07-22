function LongestWord(sen) { 
  
 var str = "";
  for (var i =0; i<sen.length; i++){
      if (sen.charAt(i).match(/[a-z]/i))
           str = str + sen.charAt(i);
      
      else 
       str = str + " ";
      
  }
 var  astr =  str.split(" ");
 var curmax = astr[0].length;
 var curind = 0;
 for (i=1; i<astr.length; i++){
    var current = astr[i].length;
    if (current>curmax)
    {
        curmax = current;
        curind = i;
    }
 }
 
  // code goes here  
  return astr[curind]; 
       
}
   
// keep this function call here 
LongestWord(readline());
