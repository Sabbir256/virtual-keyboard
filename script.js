// get the keyboard
var board = document.getElementById("keyboard");

// get the textbox
var tb = document.getElementById("textbox");

var str = "";
var shiftActive = false;
var capsLockActive = false;

board.addEventListener('click', (e)=>{
    var target = e.target;

    // for general characters
    if(target.classList.contains('keys')){
        // print key values to the textbox
        str += target.innerHTML;
        tb.innerHTML = str;
        if(shiftActive)
        {
            shiftActive = false;
            var shiftK = document.getElementById("shift");
            // console.log(shiftK);
            shiftK.style.backgroundColor = "#fff";

            var chars = document.getElementsByClassName("char");
            for(let char of chars){
                char.innerHTML = char.innerHTML.toLowerCase(); 
            }
        }
    }

    // for spacebar button
    if(target.classList.contains("space"))
    {
        str += ' ';
        tb.innerHTML = str;
    }

    // for backspace button
    if(target.classList.contains("delete"))
    {
        str = str.slice(0, -1);
        tb.innerHTML = str;
    }

    // for shift key
    if(target.classList.contains("shift")){
        target.style.backgroundColor = "#FFD523";
        var chars = document.getElementsByClassName("char");
        for(let char of chars){
            char.innerHTML = char.innerHTML.toUpperCase(); 
        }
        shiftActive = true;
    }

    // for caps-lock
    if(target.id == "capsLock")
    {
        if(capsLockActive == false){
            target.style.backgroundColor = "#FFD523";
            var chars = document.getElementsByClassName("char");
            for(let char of chars){
                char.innerHTML = char.innerHTML.toUpperCase(); 
            }
            capsLockActive = true;
        }
        else
        {
            capsLockActive = false;
            target.style.backgroundColor = "#fff";
            var chars = document.getElementsByClassName("char");
            for(let char of chars){
                char.innerHTML = char.innerHTML.toLowerCase(); 
            }
        }
    }

    // for return button
    if(target.id == "return")
    {
        
        str += '<br>';
        tb.innerHTML = str;
    }
})






