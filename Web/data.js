function getline(){
    var k = document.getElementById('k').value;
    var b = document.getElementById('b').value;
    var symbol1 = document.getElementsByName('symbol1');
    for (var i=0;i<symbol1.length; i++) {
        if (symbol1[i].checked) {
            eel.linegraph(k, b, symbol1[i].value);
        }
  }
}

function getquadric(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b1').value;
    var c = document.getElementById('c').value;
    var x_degree = document.getElementById('degree').value;
    var symbol2 = document.getElementsByName('symbol2');
    for (var i=0;i<symbol2.length; i++) {
        if (symbol2[i].checked) {
            symbol2 = symbol2[i].value;
            break;
        }
    }

    var symbol3 = document.getElementsByName('symbol3');
    for (var i=0;i<symbol3.length; i++) {
        if (symbol3[i].checked) {
            eel.quadricgraph(a, b, c, x_degree, symbol2, symbol3[i].value);
            break;
        }
    }
}

function getpie(){
    var labels = document.getElementById('labels1').value;
    var sizes = document.getElementById('sizes').value;
    var explodes = document.getElementById('explodes').value;
    eel.piechart(explodes, labels, sizes);
}

function getbar(){
    var labels = document.getElementById('labels2').value;
    var groups = document.getElementById('groups').value;
    var values = document.getElementById('values').value;
    eel.barchart(labels, values, groups);
}

function getsimplechart(deal){
    var coordx = document.getElementById('coordx').value;
    var coordy = document.getElementById('coordy').value;
    document.getElementById('coordx').value = '';
    document.getElementById('coordy').value = '';
    eel.simplechart(coordx, coordy, deal);
}

function Clear(){
    eel.clearing()
}

$(document).ready(function(){
    HideWarning();
});
// Warning
function Warning(){
    $("#warning").show();
}
// Функция скрытия PopUp
function HideWarning(){
    $("#warning").hide();
}


$(document).ready(function(){
    PopUpHide();
});
// Line PopUp
function PopUpShow(){
    $("#first1").show();
}
// Функция скрытия PopUp
function PopUpHide(){
    $("#first1").hide();
}


$(document).ready(function(){
    PopUpHide1();
});
// Charts PopUp
function PopUpShow1(){
    $("#first2").show();
}
// Функция скрытия PopUp
function PopUpHide1(){
    $("#first2").hide();
}


$(document).ready(function(){
    PopUpHide2();
});
// Quadric PopUp
function PopUpShow2(){
    $("#first3").show();
}
// Функция скрытия PopUp
function PopUpHide2(){
    $("#first3").hide();
}


$(document).ready(function(){
    PopUpHide3();
});
// Pie chart PopUp
function PopUpShow3(){
    $("#first4").show();
}
// Функция скрытия PopUp
function PopUpHide3(){
    $("#first4").hide();
}


$(document).ready(function(){
    PopUpHide4();
});
// Bar chart PopUp
function PopUpShow4(){
    $("#first5").show();
}
// Функция скрытия PopUp
function PopUpHide4(){
    $("#first5").hide();
}


$(document).ready(function(){
    PopUpHide5();
});
// Simple chart PopUp
function PopUpShow5(){
    $("#first6").show();
}
// Функция скрытия PopUp
function PopUpHide5(){
    $("#first6").hide();
}