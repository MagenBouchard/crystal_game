$(document).ready(function () {



    let win = 0;
    let loss = 0;
    counter = 0;


    // console.log("purple " + purple);
    // console.log("green" + green);
    // console.log("red" + red);
    // console.log("yelloq" + yellow);


    function clear() {
        purple = Math.floor((Math.random() * 12) + 3);
        green = Math.floor((Math.random() * 9) + 3);
        red = Math.floor((Math.random() * 4) + 3);
        yellow = Math.floor((Math.random() * 3) + 1);
        counter = 0;
        goalSum = Math.floor((Math.random() * 53) + 60);

        $(".totalscore").text(counter);
        $(".goalscore").html("<h2> Goal Score" + ": " + goalSum + "</h2>");
    }
    var purple = Math.floor((Math.random() * 12) + 3);
    var green = Math.floor((Math.random() * 9) + 3);
    var red = Math.floor((Math.random() * 4) + 3);
    var yellow = Math.floor((Math.random() * 3) + 1);
    var goalSum = Math.floor((Math.random() * 53) + 60);
    counter = 0;


    $(".totalscore").html("<h2>" + "Total score:" + " " + counter + "</h2>");




    $(".goalscore").html("<h2> Goal Score" + ": " + goalSum + "</h2>");

    function winner() {
        win++;
        $("#wins").text(win);
        clear();


    }


    function over() {
        loss++;
        $("#loss").text(loss);
        clear();

    }


    // console.log(counter);



    // Gems

    $("#red").on("click", function () {
        counter = red + counter;
        console.log("red");
        $(".totalscore").text(counter);
        if (counter === goalSum) {
            winner()
        } else if (counter > goalSum) {
            over()
        }
    })

    $("#purple").on("click", function () {
        counter = counter + purple;
        $(".totalscore").text(counter);
        if (counter === goalSum) {
            winner()
        } else if (counter > goalSum) {
            over()
        }
    })

    $("#yellow").on("click", function () {
        counter = counter + yellow;
        $(".totalscore").text(counter);
        if (counter === goalSum) {
            winnner()
        } else if (counter > goalSum) {
            over()
        }
    })

    $("#green").on("click", function () {
        counter = counter + green;
        $(".totalscore").text(counter);
        if (counter === goalSum) {
            winner()
        } else if (counter > goalSum) {
            over()
        }
    })



});
