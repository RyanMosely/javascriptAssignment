//PASSGEN VER 1


/*
var a = prompt("letter b");


if(a === "b"|| a==="c"||a === "df"){

function passGen(){
    var len = prompt("how long do you want your password to be?")
    var z= [];
    
    for(var i = 0; i<len; i++){
        var characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz#$%&'\"()*+,-./";
        var a = Math.floor(Math.random() * (characters.length));
        var b = a+1;
        var c = characters.substring(a,b);
        z.push(c);
    }

    document.write(z.join(''));
    }

    passGen();

}
else{
    document.write("howdy");
}
*/
//------------------------------------------------------------------------------



//PASSGEN VER 2 (CONVERTED ARRAY INTO OBJECT)

/*

//choose symbol criteria

var a = prompt("letter b");


if(a === "b"|| a==="c"||a === "d"){

//grabs a set amount of charcters and puts them into a variable

function passGen(){
    var len = prompt("how long do you want your password to be?")

    var z= {
        testOne: [],
        testTwo: "words",
        testThree: "stuff",
    };
    
    
    for(var i = 0; i<len; i++){
        var characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz#$%&'\"()*+,-./";
        var a = Math.floor(Math.random() * (characters.length));
        var b = a+1;
        var c = characters.substring(a,b);
        z.testOne.push(c);
    };

    var t = z.testOne.join('');
    var u = z.testTwo;
    var g = z.testThree;

    j = u+g;

    document.write(t);
    }

    passGen();

}
else{
    document.write("howdy");
}


*/

//----------------------------------------------------------------------------------------

//PASSGEN VER 3 (DO LOOP)

/*
//choose symbol criteria

var a = prompt("letter b");


if(a === "b"|| a==="c"||a === "d"){

//grabs a set amount of charcters and puts them into a variable

function passGen(){
    var len = prompt("how long do you want your password to be?")

//object to store loop outputs

    var z= {
        testOne: [],
        testTwo: "words",
        testThree: "stuff",
    };
    
//loops for random numbers



    var i = 0;

    do{
        var numbers = "0123456789";
        var a = Math.floor(Math.random() * (numbers.length));
        var b = a+1;
        var c = numbers.substring(a,b);
        z.testOne.push(c);
        i++;
    }
    
    
while(i<len);








    var t = z.testOne.join('');
    var u = z.testTwo;
    var g = z.testThree;

    j = u+g;

    document.write(t);
    }

    passGen();

}
else{
    document.write("howdy");
}
*/
//--------------------------------------------------------

//PASSGEN VER 3 (WHILE LOOP)

/*

var hi = confirm("Hello! Would you like a password?")




if(hi===true){

//BEGINNING OF FUNCTION----------------------------------------------

function passGen(numb, upp, lowe, speci){

//grabs a set amount of charcters and puts them into a variable
    var len = prompt("how long do you want your password to be?")

//object to store loop outputs

    var z= {
        testOne: [],
       
    };
    
//loops for random numbers, uppercase, lower case, and special



    var i = 0;

    while(i<len){
        
       { var numbers = "0123456789";
        var a = Math.floor(Math.random() * (numbers.length));
        var b = a+1;
        var c = numbers.substring(a,b);
        z.testOne.push(c);
        i++;
    
    
    if(i ==len)
    {break};
    }
    {
        var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
        var a = Math.floor(Math.random() * (upperCase.length));
        var b = a+1;
        var c = upperCase.substring(a,b);
        z.testOne.push(c);
        i++;
    
    if(i ==len)
    {break};}
    {
        var lowerCase = "abcdefghiklmnopqrstuvwxyz";
        var a = Math.floor(Math.random() * (lowerCase.length));
        var b = a+1;
        var c = lowerCase.substring(a,b);
        z.testOne.push(c);
        i++;
    
    if(i ==len)
    {break};}
    {
        var special = "#$%&'\"()*+,-./";
        var a = Math.floor(Math.random() * (special.length));
        var b = a+1;
        var c = special.substring(a,b);
        z.testOne.push(c);
        i++;
    
    if(i ==len)
    {break};}
    };
    

    var t = z.testOne.join('');
    

    document.write(t);
    }

//END OF FUNCTION------------------------------------------------------


   


}
else{
    document.write("howdy");
}
//END OF MAIN IF/ELSE STATEMENT------------------------------------------------------------
var num = confirm("Do you want Numbers in your password?");
var up = confirm("Do you want Uppercase letters in your password?");
var low = confirm("Do you want Lowercase in your password?");
var spec = confirm("Do you want special characters in your password?");
var charTypes = [];



charTypes.push(num);
charTypes.push(up);
charTypes.push(low);
charTypes.push(spec);

passGen(charTypes[0], charTypes[1], charTypes[2], charTypes[3]);

*/
//--------------------------------------------------------------------------------------

//PASSGEN VER 4 (IF ELSE INSIDE WHILE LOOP)
/*


var hi = confirm("Hello! Would you like a password?")




if(hi===true){

//BEGINNING OF FUNCTION----------------------------------------------

function passGen(numb, upp, lowe, speci){

//grabs a set amount of charcters and puts them into a variable
    var len = prompt("how long do you want your password to be?")

//object to store loop outputs

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
}else{
    console.log(false);
}
    };
    

    var t = z.join('');
    

    document.write(t);
    }

//END OF FUNCTION------------------------------------------------------


   


}
else{
    document.write("howdy");
}
//END OF MAIN IF/ELSE STATEMENT------------------------------------------------------------
var num = confirm("Do you want Numbers in your password?");
var up = confirm("Do you want Uppercase letters in your password?");
var low = confirm("Do you want Lowercase in your password?");
var spec = confirm("Do you want special characters in your password?");
var charTypes = [];



charTypes.push(num);
charTypes.push(up);
charTypes.push(low);
charTypes.push(spec);

passGen(charTypes[0], charTypes[1], charTypes[2], charTypes[3]);

*/



//--------------------------------------------------------------------------------------

//PASSGEN VER 5 (IF ELSE INSIDE IF ELSE)



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
var num = confirm("Do you want Numbers in your password?");
var up = confirm("Do you want Uppercase letters in your password?");
var low = confirm("Do you want Lowercase in your password?");
var spec = confirm("Do you want special characters in your password?");
var charTypes = [];






charTypes.push(num);
charTypes.push(up);
charTypes.push(low);
charTypes.push(spec);



if(num===false&&up===false&&low===false&&spec===false){
    alert("Please select at least one kind of character")
    
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


// DO WHILE LOOP EXAMPLE
//----------------------------------

/*

var i=0;


while(i <11){
   i++;
}
document.write(i+" ");

if(i % 2 !== 0){
    
    document.write(i-1);
}

*/




// CHECK IF NUMBER IS EVEN EXAMPLE
/*
var t = 5;

if(t % 2 !==0)
{document.write(t-1)};
*/


/*
var a = {
    number: ["1","2","3"],
    letter: ["a","b","c"]
};

var b = [a.letter.join(''), a.number.join('')]

console.log(b.join(''));
*/


//create function to check if all characters are included in password



/*PSEUDO CODE
---------------------------------------------
click button GP to generate password
click button C to copy password from text area

onclick generate function(){
    if user chooses
} 

onclick copy function(){
    copy password from text area
}

"#$%&'\"()*+,-./"



*/

/*RANDOM NUMBER GENERATOR METHOD
-----------------------------------
console.log(Math.ceil(Math.random() * 5));
*/


/* NOTES
-----------------------------------

var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";


- math.random() chooses random number between 1-0

- math.floor() rounds number down

- substring() method returns the part of the string
between the start and end indexes, or to the end 
of the string.


console.log(Math.floor(Math.random(chars.substring(0,chars.length))));

* ALLOWS YOU TO DETERMINE  BETWEEN BEGINNING AND END OF STRING OF WHAT YOU WANT TO PRINT
console.log(chars.substring(0,chars.length));

*RANDOMLY CHOOSES NUMBER BETWEEN 0 THROUGH VARIABLE LENGTH
Math.floor(Math.random() * Math.floor(chars.length));

*RANDOMLY CHOOSES INDEX POINT IN STRING STARTING FROM 0
console.log(chars.substring(0,Math.floor(Math.random() * Math.floor(chars.length))));
/*

*/

/*
var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

var a = Math.floor(Math.random() * (chars.length));
var b = a+1;
var c = chars.substring(a,b);
var z =[];
z.push(c);
console.log(z);
*/

//document.write(z.join(''));




//console.log(c);
//console.log(a);
//console.log(b);

//console.log(z);

//console.log(Math.floor(Math.random(chars) * Math.floor(chars.length)));
