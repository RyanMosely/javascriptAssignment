
alert("Lets make a password! Please select if you want numbers, upper case letters, lower case letters, or special characters to be included in your generated password in the following windows.")





//BEGINNING OF MAIN IF ELSE --------------------------------------------


//BEGINNING OF FUNCTION--------

function passGen(numb, upp, lowe, speci){

//grabs a set amount of charcters and puts them into a variable
    var len = prompt("How long do you want your password to be? Please choose between 8-128 characters.")

//object to store loop outputs
if(len>=8&&len<=128){
    var z= [];
    
//loops for random numbers, uppercase, lower case, and special



    var i = 0;

    while(i<len){
        
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

//END OF FUNCTION--------------------------


   






//END OF MAIN IF/ELSE STATEMENT------------------------------------------------------------
var num = confirm("Do you want numbers in your password?");
var up = confirm("Do you want uppercase letters in your password?");
var low = confirm("Do you want lowercase in your password?");
var spec = confirm("Do you want special characters in your password?");
var charTypes = [];






charTypes.push(num);
charTypes.push(up);
charTypes.push(low);
charTypes.push(spec);



if(num===false&&up===false&&low===false&&spec===false){
    alert("Please refresh the broweser and select at least one type of character.")
    
}
else{
   

passGen(charTypes[0], charTypes[1], charTypes[2], charTypes[3]);
function genClick(){
    document.getElementById("password").innerHTML = t;
}



function copy(){
    document.getElementById("password").select();
    document.execCommand("Copy");
}

};
