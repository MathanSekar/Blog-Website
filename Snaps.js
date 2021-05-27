
function date() {
	
	var today = new Date();
    var hours = today.getHours();
 	var minutes = today.getMinutes();
 	var seconds = today.getSeconds();
 	hours = includeZero(hours);
    minutes = includeZero(minutes);
    seconds = includeZero(seconds);

    var hoursInTwelve = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
  
    document.getElementById('time').innerHTML = hours + ":" + minutes + ":" + seconds + ' ' + hoursInTwelve;
    setTimeout("date()",1000);
    var dates = ' ' + today.getDate() + '-' + (today.getMonth()+1) + '-'+ today.getFullYear();

    document.getElementById('date').innerHTML = dates;

}

function includeZero(i) {
    if (i <=9) {
    	i = "0" + i;
    }  // add zero in front of numbers < 10
    return i;
	
}