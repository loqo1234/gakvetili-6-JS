function calc(btn) {
    //1. shevamowmo if pirobit tu 0 weria mashin wavshalo da gamovitano ricxvi
    //2. tu ukve ricxvi chawerilia mashin am ricxvs manamde mivawero sxva ricxvi gverdit sanam ar ar davwavebi operators


    let answer = document.getElementById("answer").innerHTML;

    let button = btn.innerHTML;

    if (answer == '0') {
        document.getElementById("answer").innerHTML = button;
    }
    else {
        console.log(button);
        answer = document.getElementById("answer").innerHTML;
        answer += button;
        console.log(answer);
        document.getElementById("answer").innerHTML = answer;

        if (answer.length > 15) {
            let answertext = document.getElementById("answer").innerHTML;
            console.log('succes' + answertext);

            let buttons = document.querySelectorAll('.ricxvi')
            buttons.forEach(p => {
                console.log(p);
                p.removeAttribute('onclick');
            });
        }
    }
}


