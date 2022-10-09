function ensure(value) {
    try {
        value = document.getElementById("value");
        const output = document.getElementById("output-value");
        
        if (value.value == "") {
            throw new Error ("Please enter a number into the value field");
        }
        output.innerText = value.value;
       
    }
    catch (err) {
        console.log(`Error: ${err.message}`);
    }
   
}