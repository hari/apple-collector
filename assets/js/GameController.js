var score = 0,
    highScore = 0,
    time = 30,
    timer;
var IsPlaying = false;
var timeBoard = document.getElementById('time'),
    scoreBoard = document.getElementById('score'),
    btnStart = document.getElementById('btn');

function fallDown(apple) {
    if (!IsPlaying) {
        return;
    }
    apple.setAttribute('data-top', apple.style.top);
    apple.style.top = "380px";
    score = score + 5;
    renderScore();
    hideFallenApple(apple);
}

function hideFallenApple(apple) {
    setTimeout(function () {
        apple.style.display = 'none';
        restoreFallenApple(apple);
    }, 501);
}

function restoreFallenApple(apple) {
    setTimeout(function () {
        apple.style.top = apple.getAttribute('data-top');
        apple.style.display = 'inline-block';
    }, 501);
}

function renderScore() {
    scoreBoard.innerText = score;
    if (score > highScore) {
        highScore = score;
        document.getElementById('high').innerText = highScore;
    }
}

function startGame() {
    btnStart.disabled = "disabled";
    IsPlaying = true;
    renderScore();
    timer = setInterval(countDown, 1000);
}

function countDown() {
    time = time - 1;
    timeBoard.innerText = time;
    if (time == 0) {
        clearInterval(timer);
        endGame();
    }
}

function endGame() {
    IsPlaying = false;
    alert("Your score is " + score);
    score = 0;
    time = 30;
    btnStart.removeAttribute('disabled');
}
