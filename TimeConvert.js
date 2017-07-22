function TimeConvert(num) { 
var min = num%60;
var hour = Math.floor(num/60);


return (hour+ ":"+min);
         
}
   
// keep this function call here 
TimeConvert(readline());
