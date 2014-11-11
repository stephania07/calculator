/*$(document).ready(function(){
var $body = document.getElementById("main");
$body.
	displayOutput();

});*/

function displayOutput(){
  return $('#displayoutput').val();
}

var previousResult;
var nextOperation;

function add(a, b){
  return ((a * 100000000000000) + (b * 100000000000000))/100000000000000
}

function multiply(a, b){
  return a * b;
}

function divide(a, b) {
  return a  / b;
}

function currentValue(string){
  return $('#displayoutput').val() * 1;
}

function calculate(){
  if(!!nextOperation){
    previousResult = nextOperation(previousResult, currentValue());
  } else {
    previousResult = currentValue();
  }
}
				

function clear(){
   return 0;
}

function changeValue() {
  if($('#displayoutput').val() > -1){
	  return $('#displayoutput').val() + '-';
	}else{
	  return $('#displayoutput').val();
	}
}

function press(buttonValue){
  switch (buttonValue) {
    case '+':
      calculate();
      nextOperation = add;
      $('#displayoutput').val('');
      break;
    case '-':
      // handle -
			
			
      break;
    case '*':
      calculate();
      nextOperation = multiply;
      $('#displayoutput').val('');
      break;
    case '/':
      calculate();
			nextOperation = divide;
			$('#displayoutput').val('');
      break;
    case 'C':
      clear();
      $('#displayoutput').val(0);			
      break;
    case '=':
      calculate();
      $('#displayoutput').val(roundNumber(previousResult));
      break;
    case '+/-':
     changeValue();
		 $('#displayoutput').val('-');
      break;
    default:
      var current = $('#displayoutput').val();
      $('#displayoutput').val(current + buttonValue);
  }
}
function roundNumber(number) {
  return Math.floor(number * 1000000000000)/1000000000000;
}
