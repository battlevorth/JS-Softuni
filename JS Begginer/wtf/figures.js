function figures(input){
    let shape = (input[0]);
   
    if (shape == "square") {
        let firstNumber = Number(input[1]);
        console.log ((firstNumber * firstNumber).toFixed(3));

    } else if (shape == "rectangle"){
        let firstNumber = Number(input[1]);
        let secondNumber = Number(input[2]);
        let result = firstNumber * secondNumber
        console.log (result.toFixed(3))
        
    } else if (shape == 'circle'){
        let firstNumber = Number(input[1]);
        let radius = Math.PI * (firstNumber * firstNumber);
        console.log(radius.toFixed(3))
    } else if (shape == 'triangle'){
        let firstNumber = Number(input[1]);
        let secondNumber = Number(input[2]);
        let trinagleF = (firstNumber * secondNumber) / 2;
        console.log (trinagleF.toFixed(3))
    }
    
}
figures(["triangle","4.5","20"])