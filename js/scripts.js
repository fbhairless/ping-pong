
    function myFunction() {
        var x = document.getElementById("pingpong");
        var num = x.elements[0].value;
        var listItems = "";
        var i;
        for (i = 1; i <= num; i++) {
            listItems += "<li>";
            if (i % 15 === 0) {
                listItems += "<b>PING-PONG</b>";
            }
            else if (i % 3 === 0) {
                listItems += "<b>Ping</b>";
            }
            else if (i % 5 === 0) {
                listItems += "<b>Pong</b>";
            }
            else {
                listItems += i;
            }
            listItems += "</li>";
        }
        document.getElementById("results").innerHTML = listItems;
    }
