var input_value=121;

var new_input=input_value;
var result=0;
while(input_value!=0)
{
    var first_value=input_value%10;
     result=result*10+first_value;
    input_value=Math.floor(input_value/10);

}
console.log(result);

//console.log(input_value);
if(new_input==result){
    console.log("It is in palindrome");
}
else {
    console.log("It is not in palindrome");
}



