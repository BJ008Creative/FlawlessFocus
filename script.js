let time = document.getElementById("time");
time.innerHTML = "25:00";

let select1 = document.getElementById("1");
select1.addEventListener("click", function () {
    time.innerHTML = "25:00";
});

let select2 = document.getElementById("2");
select2.addEventListener("click", function () {
    time.innerHTML = "30:00";
});

let select3 = document.getElementById("3");
select3.addEventListener("click", function () {
    time.innerHTML = "40:00";
});

let select4 = document.getElementById("4");
select4.addEventListener("click", function () {
    time.innerHTML = "50:00";
});

let select5 = document.getElementById("5");
select5.addEventListener("click", function () {
    time.innerHTML = "60:00";
});

let replica = time.innerHTML;

let playbutton = document.getElementById("play");

let playing = false;

let interval;

let a;

playbutton.addEventListener("click", function () {

    // PLAY
    if (playing == false) {

        let parts = time.innerHTML.split(":");

        let minutes = parseInt(parts[0]);
        let seconds = parseInt(parts[1]);

        let totaltime = minutes * 60 + seconds;

        a = totaltime;

        playing = true;

        playbutton.style.backgroundImage =
            'url("stop-button_5628258.png")';

        interval = setInterval(function () {

            a--;

            let mins = parseInt(a / 60);
            let secs = a % 60;

            if (secs < 10) {
                time.innerHTML = mins + ":" + "0" + secs;
            }

            else {
                time.innerHTML = mins + ":" + secs;
            }

            if (a <= 0) {

                time.style.fontSize = "20px";

                time.innerHTML =
                    "Yayy we finished " + replica + " minutes";

                clearInterval(interval);

                playing = false;

                playbutton.style.backgroundImage =
                    'url("play-button_6241826.png")';
            }

        }, 1000);

    }

    // PAUSE
    else {

        playing = false;

        clearInterval(interval);

        playbutton.style.backgroundImage =
            'url("play-button_6241826.png")';
    }

});