function forLoop(){

    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            document.getElementById("numberOutput").innerHTML += " " + (i);
          }
        
    }
    
}