const txt6 = document.getElementById("tan"),
resultt = document.getElementById ("result6");

resultt.innerHTML = localStorage.getItem("value6")

txt6.addEventListener ("keyup", getValue6);
 

 function getValue6() {
    localStorage.setItem ('value6', txt6.value);
    result6.innerHTML = localStorage.getItem("value6")
}  

const txt7 = document.getElementById("dam"),
resulttt = document.getElementById ("result7");

resulttt.innerHTML = localStorage.getItem("value7")

txt7.addEventListener ("keyup", getValue7);

function getValue7() {
    localStorage.setItem ('value7', txt7.value);
    result7.innerHTML = localStorage.getItem("value7")
}
const txt8 = document.getElementById("sdate"),
resultttt = document.getElementById ("result8");

resultttt.innerHTML = localStorage.getItem("value8")

txt8.addEventListener ("keyup", getValue8);

function getValue8() {
    localStorage.setItem ('value8', txt8.value);
    result8.innerHTML = localStorage.getItem("value8")
}
const txt9 = document.getElementById("edate"),
resulttttt = document.getElementById ("result9");

resulttttt.innerHTML = localStorage.getItem("value9")

txt9.addEventListener ("keyup", getValue9);

function getValue9() {
    localStorage.setItem ('value9', txt9.value);
    result9.innerHTML = localStorage.getItem("value9")
}
const txt0 = document.getElementById("disc"),
resultttttt = document.getElementById ("result0");

resultttttt.innerHTML = localStorage.getItem("value0")

txt0.addEventListener ("keyup", getValue0);

function getValue0() {
    localStorage.setItem ('value0', txt0.value);
    result0.innerHTML = localStorage.getItem("value0")
}

function validation6()
{
    var form = document.getElementById("form");
    var tan = document.getElementById("tan").value;
    var pattern = /^[ა-ჰ]{2,}$/;

    if (tan.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        form.tan.style.borderColor = "#27ae60";
       
    }
    else
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
        form.tan.style.borderColor = "#e74c3c";
    }
}

function validation7()
{
    var form = document.getElementById("form");
    var dam = document.getElementById("dam").value;
    var pattern = /^[ა-ჰ]{2,}$/;

    if (dam.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        form.dam.style.borderColor = "#27ae60";
       
    }
    else
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
        form.dam.style.borderColor = "#e74c3c";
    }
}
