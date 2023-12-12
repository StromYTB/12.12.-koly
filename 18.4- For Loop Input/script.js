


function forLoop(){

    const numberInput = document.getElementById("numberInput").value

    for (let i = 0; i <= numberInput; i++) {
        
        document.getElementById("numOutput").value += " " + (i);
        
        
    }
    
}
