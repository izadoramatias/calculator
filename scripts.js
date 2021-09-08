function insert(numberInsertByUser){

    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + numberInsertByUser;
}

function clearResultOnDisplay(){
    document.getElementById('result').innerHTML = '';
}

function calculate(){
    
    var result = document.getElementById('result').innerHTML;
    if(result){
        document.getElementById('result').innerHTML = eval(result);
    }

}

