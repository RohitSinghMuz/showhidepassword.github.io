
    function fun() {
        var buttref = document.getElementById("butt");
        if (buttref.innerText == "Show password") {
            var passref = document.getElementById("passkkk");
            passref.type = "text";
            var buttref1 = document.getElementById("butt");
            buttref1.innerText = "Hide password";
        }
        else {

            var passref = document.getElementById("passkkk");
            passref.type = "password";
            var buttref1 = document.getElementById("butt");
            buttref1.innerText = "Show password";


        }
    }

    function fun1() {
        var greetref = document.getElementById("asd");
        greetref.innerText = "Good Morning!!"
    }
    function fun2() {
        var greetref = document.getElementById("asd");
        greetref.innerText = "Good Noon!!"
    }
    function fun3() {
        var greetref = document.getElementById("asd");
        greetref.innerText = "Good Night!!"
    }

