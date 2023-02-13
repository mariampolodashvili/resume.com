const txt11 = document.getElementById("school"),
resul = document.getElementById ("result11");

resul.innerHTML = localStorage.getItem("value11")

txt11.addEventListener ("keyup", getValue11);
 

 function getValue11() {
    localStorage.setItem ('value11', txt11.value);
    result11.innerHTML = localStorage.getItem("value11")
}  

const txt12= document.getElementById("degree"),
resu = document.getElementById ("result12");

resu.innerHTML = localStorage.getItem("value12")

txt12.addEventListener ("keyup", getValue12);

function getValue12() {
    localStorage.setItem ('value12', txt12.value);
    result12.innerHTML = localStorage.getItem("value12")
}
const txt13 = document.getElementById("date"),
res = document.getElementById ("result13");

res.innerHTML = localStorage.getItem("value13")

txt13.addEventListener ("keyup", getValue13);

function getValue13() {
    localStorage.setItem ('value13', txt13.value);
    result13.innerHTML = localStorage.getItem("value13")
}
const txt14 = document.getElementById("edu"),
re = document.getElementById ("result14");

re.innerHTML = localStorage.getItem("value14")

txt14.addEventListener ("keyup", getValue14);

function getValue14() {
    localStorage.setItem ('value14', txt14.value);
    result14.innerHTML = localStorage.getItem("value14")
}

function validation11()
{
    var form = document.getElementById("form");
    var school = document.getElementById("school").value;
    var pattern = /^[ა-ჰ]{2,}$/;

    if (school.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        form.school.style.borderColor = "#27ae60";
       
    }
    else
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
        form.school.style.borderColor = "#e74c3c";
    }
}

