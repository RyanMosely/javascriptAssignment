


//This Alert Method gives instructions to the user for the next confirmation windows.

alert("Lets make a password! Please select if you want numbers, upper case letters, lower case letters, or special characters to be included in your generated password in the following windows.")




//BEGINNING OF FUNCTION(refer to variables below function for argument representation)-----------------------------------------------------------------------------------------

function passGen(numb, upp, lowe, speci){

//Grabs a set amount of charcters and puts them into a variable.
    var len = prompt("How long do you want your password to be? Please choose between 8-128 characters.")



//If 'len' is between 8-128 characters, it executes the following loop/code blocks.
//Else it alerts the user to refresh the browser and to choose between 8-128 characters.  
if(len>=8&&len<=128){

//Variable representing an empty array to store loop outputs.
    var z= [];
    


//Loops for random numbers, upper case letters, lower case letters, and special characters.
//As the loop passes through each if/else statement, it iterates 'i' by 1.
//Once 'i' === the conditional statement, javascript then jumps out of the loop.
    var i = 0;

    while(i<len){

//Conditional statement for numbers.
    if(numb === true){   
       { var numbers = "0123456789";
        var a = Math.floor(Math.random() * (numbers.length));
        var b = a+1;
        var c = numbers.substring(a,b);
        z.push(c);
        i++;
    
    
    if(i ==len)
    {break};
    }
}else{
    console.log(false);
}

//Conditional statement for upper case letters.
if(upp === true){
    {
        var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
        var a = Math.floor(Math.random() * (upperCase.length));
        var b = a+1;
        var c = upperCase.substring(a,b);
        z.push(c);
        i++;
    
    if(i ==len)
    {break};
    }
}else{
    console.log(false);
    }

//Conditional statement for lower case letters.
if(lowe === true){    
    {
        var lowerCase = "abcdefghiklmnopqrstuvwxyz";
        var a = Math.floor(Math.random() * (lowerCase.length));
        var b = a+1;
        var c = lowerCase.substring(a,b);
        z.push(c);
        i++;
    
    if(i ==len)
    {break};}
}else{
    console.log(false);
}

//Conditional statement for special characters.
if(speci === true){
    {
        var special = "#$%&'\"()*+,-./";
        var a = Math.floor(Math.random() * (special.length));
        var b = a+1;
        var c = special.substring(a,b);
        z.push(c);
        i++;
    
    if(i ==len)
    {break};}
}

else{
    console.log(false);
}


    };
    

    t = z.join('');
}

else{

    alert("Please refresh browser and choose between 8-128 characters")
}

    }

//END OF FUNCTION--------------------------------------------------------------------------------


   





//Each variable represents a confirmation on whether the user wants lower case letters, upper case letters, numbers, or special characters included in their generated password.

var num = confirm("Do you want numbers in your password?");
var up = confirm("Do you want uppercase letters in your password?");
var low = confirm("Do you want lowercase in your password?");
var spec = confirm("Do you want special characters in your password?");


//The boolean data type for each confirmation is then stored in the charTypes variable.
var charTypes = [];

charTypes.push(num);
charTypes.push(up);
charTypes.push(low);
charTypes.push(spec);


//If the user doe not choose a charactrer type when prompted, they are then asked to refresh the browser and to choose at least one character type.
//Else when they did choose at least one character type, the charTypes variable that represents the confirmation on character choices are then passed as arguments in the passGen() function.
if(num===false&&up===false&&low===false&&spec===false){
    alert("Please refresh the broweser and select at least one type of character.")
    
}
else{
   

passGen(charTypes[0], charTypes[1], charTypes[2], charTypes[3]);
function genClick(){
    document.getElementById("password").innerHTML = t;
}


//Function that copies the generated password that is set in the textbox to the clipboard.
function copy(){
    document.getElementById("password").select();
    document.execCommand("Copy");
}

};
