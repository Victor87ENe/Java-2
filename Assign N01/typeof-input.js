
function message(){

var userInput = prompt("Enter your data here");
var save = userInput;
var number = parseInt(save);
var alphabet = String(save);



if (!isNaN(number)){

document.getElementById("js-display").
innerText = (`This type of data is:\n ` + typeof number);

}else if (alphabet){
    document.getElementById("js-display").
innerText = (`This type of data is:\n `+ typeof alphabet);


}else{

    document.getElementById("js-display").
    innerText = ("Invalid input:\n Please enter a valid data type");
}
return

};