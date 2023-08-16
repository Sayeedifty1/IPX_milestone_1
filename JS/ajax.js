// AJAX = Asynchronous JavaScript And XML. AJAX is not a programming language. 
// Asynchronous JavaScript and XML (Ajax) refer to a group of technologies that are used to develop web applications. By combining these technologies, web pages appear more responsive since small packets of data are exchanged with the server and web pages are not reloaded each time that a user makes an input change.
// example of AJAX
function showHint(str) {
    if (str.length == 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "gethint.php?q=" + str, true);
        xmlhttp.send();
    }
}