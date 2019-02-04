var displayBox = document.getElementById("artDisplay")

// Getting Correct Description and Creating String Variable

function getDesc() {
    if (window.localStorage.getItem("imgNum") == 1) {
        return "<div class='col-md-4 col-sm-6 open-sans'><div class='bold-subtitle bot-buffer-tiny'>Self-Portrait</div><div>Charlotte Salomon (1917–1943)</div><div></div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 2) {
        return "<div class='col-md-4 col-sm-6 open-sans'><div class='bold-subtitle bot-buffer-tiny'>Self-portrait</div><div>Josef Kowner (1895–1967)</div><div></div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 3) {
        return "<div class='col-md-4 col-sm-6 open-sans'><div class='bold-subtitle bot-buffer-tiny'>Portrait of a Young Woman</div><div>Esther Lurie (1913–1998)</div><div></div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 4) {
        return "<div class='col-md-4 col-sm-6 open-sans'><div class='bold-subtitle bot-buffer-tiny'>The Refugee</div><div>Felix Nussbaum (1904-1944)</div><div></div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 5) {
        return "<div class='col-md-4 col-sm-6 open-sans'><div class='bold-subtitle bot-buffer-tiny'>Girls in the Field</div><div>Nelly Toll (b. 1935)</div><div></div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 6) {
        return "<div class='col-md-4 col-sm-6 open-sans'><div class='bold-subtitle bot-buffer-tiny'>Beaten (My Brother Gedalyahu)</div><div>Jacob Lipschitz (1903–1945)</div><div></div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 7) {
        return "<div class='col-md-4 col-sm-6 open-sans'><div class='bold-subtitle bot-buffer-tiny'>The Song is Over</div><div>Pavel Fantl (1903–1945)</div><div></div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 8) {
        return "<div class='col-md-4 col-sm-6 open-sans'><div class='bold-subtitle bot-buffer-tiny'>Path between the Barracks</div><div>Leo Breuer (1893–1975)</div><div></div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 9) {
        return "<div class='col-md-4 col-sm-6 open-sans'><div class='bold-subtitle bot-buffer-tiny'>Transport Arrival</div><div>Leo (Lev) Haas (1901-1983)</div><div></div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 10) {
        return "<div class='col-md-4 col-sm-6 open-sans'><div class='bold-subtitle bot-buffer-tiny'>One Spring</div><div>Karl Robert Bodek (1905–1942) and Kurt Conrad Löw (1914–1980)</div><div></div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 11) {
        return "<div class='col-md-4 col-sm-6 open-sans'><div class='bold-subtitle bot-buffer-tiny'>Threesome</div><div>Felix Nussbaum (1904-1944)</div><div></div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 12) {
        return "<div class='col-md-4 col-sm-6 open-sans'><div class='bold-subtitle bot-buffer-tiny'>Laufen</div><div>Josef Nassy (1904-1976)</div><div></div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 13) {
        return "<div class='col-md-4 col-sm-6 open-sans'><div class='bold-subtitle bot-buffer-tiny'>Im Lager (Gefangenenlager)</div><div>Felix Nussbaum (1904-1944)</div><div></div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 14) {
        return "<div class='col-md-4 col-sm-6 open-sans'><div class='bold-subtitle bot-buffer-tiny'>Lama Sabachthani [Why have you forsaken me?]</div><div>Morris Kestelman (1905-1998)</div><div></div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 15) {
        return "<div class='col-md-4 col-sm-6 open-sans'><div class='bold-subtitle bot-buffer-tiny'>Women with Boulders</div><div>George Mayer-Marton (1897-1960)</div><div></div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 16) {
        return "<div class='col-md-4 col-sm-6 open-sans'><div class='bold-subtitle bot-buffer-tiny'>Death March (Czechowice-Bielsko, January 1945)</div><div>Jan Hartman (1926-2009)</div><div></div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 17) {
        return "<div class='col-md-4 col-sm-6 open-sans'><div class='bold-subtitle bot-buffer-tiny'>Belsen 1945</div><div>Edgar Ainsworth (1905-1975)</div><div></div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 18) {
        return "<div class='col-md-4 col-sm-6 open-sans'><div class='bold-subtitle bot-buffer-tiny'>One of the Death Pits, Belsen</div><div>Leslie Cole (1910-1977)</div><div></div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 19) {
        return "<div class='col-md-4 col-sm-6 open-sans'><div class='bold-subtitle bot-buffer-tiny'>Human Laundry</div><div>Doris Zinkeisen (1898-1991)</div><div></div></div>"
    }
    else if (window.localStorage.getItem("imgNum") == 20) {
        return "<div class='col-md-4 col-sm-6 open-sans'><div class='bold-subtitle bot-buffer-tiny'>The Death Cart – Lodz Ghetto</div><div>Edith Birkin (1927-2018)</div><div></div></div>"
    }
}

// Displaying Unique Image Layout and Description

function imgDisplay(imgDesc) {
    if (window.localStorage.getItem("imgNum") == 2 ||
        window.localStorage.getItem("imgNum") == 3 ||
        window.localStorage.getItem("imgNum") == 4 ||
        window.localStorage.getItem("imgNum") == 5 ||
        window.localStorage.getItem("imgNum") == 1 ||
        window.localStorage.getItem("imgNum") == 13 ||
        window.localStorage.getItem("imgNum") == 15 ||
        window.localStorage.getItem("imgNum") == 17 ||
        window.localStorage.getItem("imgNum") == 19 ||
        window.localStorage.getItem("imgNum") == 9) {

        displayBox.innerHTML = "<div class='col-md-8 col-sm-6 bot-buffer-small'><img class='img-fluid' src='" + window.localStorage.getItem("imgDat") + "'></div>" + imgDesc

    }
    else {

        displayBox.innerHTML = imgDesc + "<div class='col-md-8 col-sm-6 bot-buffer-small'><img class='img-fluid' src='" + window.localStorage.getItem("imgDat") + "'></div>"

    }
}

// Page Loads and Executes Function

window.onload = function() {
    imgDisplay(getDesc())
}
