 var score = 0,
     time = 30,
     timer;
 var IsPlaying = false;
 var timeboard = document.getElementById('time'),
     scoreboard = document.getElementById('score');

 function fallDown(apple) {
     if (!IsPlaying) {
         return;
     }
     apple.setAttribute('data-top', apple.style.top);
     apple.style.top = "380px";
     score = score + 5;
     renderScore();
     setTimeout(function () {
         apple.style.display = 'none';
         restore(apple);
     }, 501);
 }

 function restore(apple) {
     setTimeout(function () {
         apple.style.top = apple.getAttribute('data-top');
         apple.style.display = 'inline-block';
     }, 501);
 }

 function renderScore() {
     scoreboard.innerText = score;
 }

 function startGame() {
     IsPlaying = true;
     timer = setInterval(countDown, 1000);
 }

 function countDown() {
     time = time - 1;
     timeboard.innerText = time;
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
 }
