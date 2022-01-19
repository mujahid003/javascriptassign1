// function showDialogue(){
//     alert('Hello World')
// }

function clearStatement(){
    document.getElementById('statement').innerHTML = " ";
}
function clearOutput(){
    document.getElementById('output').innerHTML = " ";

}


    document.getElementById('alert-name').onclick = function(){
        alert('Hello World')
        document.getElementById('statement').innerHTML =   "alert('Hello World')";
        document.getElementById('output').innerHTML = "";
    // alert("Hello World")
    }

    document.getElementById('alert-var').onclick = function(){
        document.getElementById('statement').innerHTML =   "";
        document.getElementById('output').innerHTML = "";

        let html = "<ul><li>A variable name can't contain any spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.<li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords.For example, <code>userAlert</code> and <code>myVar</code> are legal</li></ul>"
        document.getElementById('output').innerHTML = html;
    
        // alert("Hello World")
    }

    document.getElementById('alert-cam').onclick = function(){
        document.getElementById('statement').innerHTML =   "";
        document.getElementById('output').innerHTML = "";

        let html = "<h3>Examples</h3><ul><li><code>user</code></li><li><code>userResponse</code><li><code>userResponseTime</code></li><li><code>userResponseTimeLimit</code></li></ul>"
        document.getElementById('output').innerHTML = html;
    
        // alert("Hello World")
    }

    document.getElementById('alert-nmb').onclick = function(){
        alert(123)
        document.getElementById('statement').innerHTML =   "alert(123)";
        document.getElementById('output').innerHTML = "";
    // alert("Hello World")
    }



    // function addMe(value)
    document.getElementById('add-btn').onclick = function(){
        document.getElementById('statement').innerHTML =   "";
        document.getElementById('output').innerHTML = "";
        let a = 10
        let b = 5
        let result = a + b
   document.getElementById('output').innerHTML = "<p class='text-center'>" + result + "</p>";
   let statement = "let a = " + a + "; <br> let b =" + b + ";<br> let result = a + b; " 
   document.getElementById('statement').innerHTML = statement;
}

document.getElementById('sub-btn').onclick = function(){
    document.getElementById('statement').innerHTML =   "";
    document.getElementById('output').innerHTML = "";
    let a = 10
    let b = 5
    let result = a - b
document.getElementById('output').innerHTML = "<p class='text-center'>" + result + "</p>";
let statement = "let a = " + a + "; <br> let b = " + b + ";<br> let result = a - b; " 
document.getElementById('statement').innerHTML = statement;
}

document.getElementById('mul-btn').onclick = function(){
    document.getElementById('statement').innerHTML =   "";
    document.getElementById('output').innerHTML = "";
    let a = 10
    let b = 5
    let result = a * b
document.getElementById('output').innerHTML = "<p class='text-center'>" + result + "</p>";
let statement = "let a = " + a + ";<br> let b = " + b + ";<br> let result = a * b;" 
document.getElementById('statement').innerHTML = statement;
}

document.getElementById('div-btn').onclick = function(){
    document.getElementById('statement').innerHTML =   "";
    document.getElementById('output').innerHTML = "";
    let a = 10
    let b = 5
    let result = a / b
document.getElementById('output').innerHTML = "<p class='text-center'>" + result + "</p>";
let statement = "let a = " + a + ";<br> let b = " + b + ";<br> let result = a / b;" 
document.getElementById('statement').innerHTML = statement;
}

document.getElementById('some-btn').onclick = function(){
    document.getElementById('statement').innerHTML =   "";
    document.getElementById('output').innerHTML = "";
    let someCalculations = 36 / 6 * 3 + 2  ** 4  - (3 + 5);
document.getElementById('output').innerHTML = "<p class='text-center'>" + someCalculations + "</p>";
let statement = "let someCalculations = 36 / 6 * 3 + 2  ** 4  - (3 + 5);" 
document.getElementById('statement').innerHTML = statement;
}

// document.getElementById('clearStatement').onclick function(){
//     document.getElementById('statement').innerHTML = "";
// }
    // addMe(10)

