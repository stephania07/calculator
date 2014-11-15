$('document').ready(function(){
var $table = document.querySelector("#main");
$(":button").click(function(){
  press($(this).text());
});
});

function displayOutput(){
  return $('#displayoutput').val();
}

var previousResult;
var nextOperation;

function add(a, b){
  return ((a * 100000000000000) + (b * 100000000000000))/100000000000000
/*	mantissaA = a.toString().match(/[^.]*.?(\d)/)[1].length;
	mantissaB = b.toString().match(/[^.]*.?(\d)/)[1].length;
  var digits = Math.max(mantissaA, mantissaB);
	var sum = a + b;
    return sum.toFixed(digits);*/
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b) {
//	mantissaA = a.toString().match(/[^.]*.?(\d)/)[1].length;
//  mantissaB = b.toString().match(/[^.]*.?(\d)/)[1].length;
//  var digits = Math.max(mantissaA, mantissaB);
//	var quotient = a / b;
//    return quotient.toFixed(digits);
  
	return a / b;
}

function toNum(string){
  return string * 1;
}

function currentValue(string){
  return $('#displayoutput').val() * 1;
}

function calculate(){
  if(!!nextOperation){//if next operation is there, then do this below function.
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
			calculate();			
			nextOperation = subtract;
			$('#displayoutput').val('');
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
      $('#displayoutput').val('');			
      break;
    case '=':
     // previousResult = nextOperation(previousResult, toNum($('#displayoutput').val()));
			calculate();
			nextOperation = undefined;
			$('#displayoutput').val(previousResult);
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

