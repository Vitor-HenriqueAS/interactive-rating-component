function myRating(num) {
    document.getElementById('note').innerHTML = num;
    document.getElementById('btnSubmit').disabled = false;
    let scoreBtns = document.querySelectorAll('.btn')

    scoreBtns.forEach((btn) => {
        btn.classList.remove("is-selected");

        if (btn.getAttribute("value") === num) {
            btn.classList.add("is-selected");
            return;
        }
    });
    
}

function changeScreen() {
    let card1 = document.querySelectorAll('.card')[0];
    let card2 = document.querySelectorAll('.card')[1];

    card1.classList.remove('visible');
    card2.classList.add('visible');
}