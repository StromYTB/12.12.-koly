function forLoop(){

    const numberInput = document.getElementById("numberInput").value

    for (let i = 1; i <= numberInput; i++) {
        
        
        if (i % 2 == 0 && numberInput % 2 == 0) {
            document.getElementById("numberOutput").innerHTML += " " + (i);
          }else if (numberInput % 2 !== 0 && i % 3 == 0){
            document.getElementById("numberOutput").innerHTML += " " + (i);
          }
        
        
    }
    
}