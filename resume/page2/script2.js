
const txt = document.getElementById("saxeli"),
result = document.getElementById ("result1");

result.innerHTML = localStorage.getItem("value1")

txt.addEventListener ("keyup", getValue1);
 

 function getValue1() {
    localStorage.setItem ('value1', txt.value);
    result1.innerHTML = localStorage.getItem("value1")
}  

const txt2 = document.getElementById("gvari"),
resulti = document.getElementById ("result2");

resulti.innerHTML = localStorage.getItem("value2")

txt2.addEventListener ("keyup", getValue2);

function getValue2() {
    localStorage.setItem ('value2', txt2.value);
    result2.innerHTML = localStorage.getItem("value2")
}
const txt3 = document.getElementById("shesaxeb"),
resultii = document.getElementById ("result3");

resultii.innerHTML = localStorage.getItem("value3")

txt3.addEventListener ("keyup", getValue3);

function getValue3() {
    localStorage.setItem ('value3', txt3.value);
    result3.innerHTML = localStorage.getItem("value3")
}
const txt4 = document.getElementById("gmail"),
resultiii = document.getElementById ("result4");

resultiii.innerHTML = localStorage.getItem("value4")

txt4.addEventListener ("keyup", getValue4);

function getValue4() {
    localStorage.setItem ('value4', txt4.value);
    result4.innerHTML = localStorage.getItem("value4")
}
const txt5 = document.getElementById("nomeri"),
resultiiii = document.getElementById ("result5");

resultiiii.innerHTML = localStorage.getItem("value5")

txt5.addEventListener ("keyup", getValue5);

function getValue5() {
    localStorage.setItem ('value5', txt5.value);
    result5.innerHTML = localStorage.getItem("value5")
}








let uploadButton = document.getElementById("upload-button");
let chosenImage = document.getElementById ("chosen-image");
let fileName = document.getElementById ("file-name");

uploadButton.onchange = () => {
    let reader = new FileReader ();
    reader. readAsDataURL (uploadButton.files[0]);
    console.log (uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute ("src", reader.result);
    }

}

function validation()
{
    var form = document.getElementById("form");
    var saxeli = document.getElementById("saxeli").value;
    var pattern = /^[ა-ჰ]{2,}$/;

    if (saxeli.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        form.saxeli.style.borderColor = "#27ae60";
       
    }
    else
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
        form.saxeli.style.borderColor = "#e74c3c";
    }
}



function validation2()
{
    var form = document.getElementById("form");
    var gvari = document.getElementById("gvari").value;
    var pattern = /^[ა-ჰ]{2,}$/;

    if (gvari.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        form.gvari.style.borderColor = "#27ae60";
       
    }
    else
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
        form.gvari.style.borderColor = "#e74c3c";
    }
}

function validation4()
{
    var form = document.getElementById("form");
    var gmail = document.getElementById("gmail").value;
    var pattern = /^[a-zA-Z0-9.]+@redberry.ge$/;

    if (gmail.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        form.gmail.style.borderColor = "#27ae60";
       
    }
    else
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
        form.gmail.style.borderColor = "#e74c3c";
    }
}


function validation5()
{
    var form = document.getElementById("form");
    var nomeri = document.getElementById("nomeri").value;
    var pattern =  /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/ ;

    if (nomeri.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        form.nomeri.style.borderColor = "#27ae60";
       
    }
    else
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
        form.nomeri.style.borderColor = "#e74c3c";
    }
}


