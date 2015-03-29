
function search() {
var keyword = document.getElementById("keyword").value;
//alert(keyword);
var xmlhttp = new XMLHttpRequest();
var url = "https://graph.facebook.com/search?q="+keyword+"&type=event&access_token=CAAW20njI8lwBAAKZA32aLKuCkVZCN1UCjZCKEZCZA3HC7RjoNLT3mtUHMAQuId9WTT3wLD4bu3I6TdDffYMisHpD1OT01ZBDd1ImpphkZBXFDmWFtZA2J0yzQ9oi0Sem0HrRf6krQGBvsrLBrdI9cQzBVSbKsjWsUGQ2FkbK4IZAERSLCkwIkjfdZCfMkymPa5t4vHqVEjdENB9ZCwqZCx86nigDbWK0WzhlRFsZD";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        getresults(myArr);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();
}

function getresults(arr) {
    //var json = JSON.parse(arr);
    var out = "";
    var i;
    for(i = 0; i < arr.data.length; i++) {
       
        out += '<div><span>'+ parseInt(i+1) +'. </span>';
       
        out += '<span>Event Name:<a href=https://www.facebook.com/events/' + arr.data[i].id + '>' + 
        (arr.data[i].name) + '</a></span><br>';

        out += '<span>Start Date: ' + 
        arr.data[i].start_time + '</span></br>';
        out += '<span>Location: ' + 
        arr.data[i].location + '</span></br></div>';
        out += '<br/>';
    }
    document.getElementById("output").innerHTML = out;
    var count = (arr.data.length > 0)?arr.data.length:0;
    document.getElementById("res_cnt").innerHTML = "Total Results :" + parseInt(count);
    document.getElementById("header").innerHTML = "Events in " + document.getElementById("keyword").value;
}
