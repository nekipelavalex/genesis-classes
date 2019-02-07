var helloWold = function (name) { //example1
    return "Hello, " + name;
}

var calculateDifference = function (arg1, arg2, arg3) { //example2
    return arg1 - arg2 - arg3;
}

var dayOrNight = function (arg1) { //example3
    if (arg1 == 1) {
        console.log("day");
    }
    if (arg1 == 2) {
        console.log("night");
    }
}

var isResultValid = function (arg1, arg2, arg3) { //example4
    return arg1 + arg2 == arg3;
}

var five = function () { //example5
    for (var i = 0; i < 5; i++) {
        console.log("Hello world!");
    }
}

function clickmeone() {
    var cardnumber = prompt("Введите номер");
    alert(cardnumber);
}

var redClick = 0;
function clickMeRed() {
    var element = document.getElementById("redClick");
    element.style.color = (redClick % 2 == 0) ? "red" : "black";
    redClick++;
}

$('#redClick').click(function () {
    $('.modal').show(200);
});

$('#redClick').click(function () {
    $('.mask').show(200);
});

$('.closeModal').click(function () {
    $('.modal').hide(200);
});

$('.closeModal').click(function () {
    $('.mask').hide(200);
});

$('.mask').click(function () {
    $('.modal').hide(200);
});

$('.mask').click(function () {
    $('.mask').hide();
});

$('.ajax_button').click(function () {
    var family = $('#Last_name').val();
    var name = $('#First_name').val();
    $.ajax({
        crossDomain: true,
        dataType: 'jsonp',
        type: "GET",
        url: "http://temp-eti.tmweb.ru/taxi/mail.php",
        data: "family = " + family + "&name = " + name +
            "&project_name=Site_Name&admin_email=bonia1991@gmail.com&form_subject=Form_Subject"
    }).done(function () {
        alert("Success.");
    })
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        rtl:true,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        mouseDrag:true,
        lazyLoad:true,
        center:true
    });
});