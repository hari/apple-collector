var btn, output, input;

btn = document.getElementById("generate");
output = document.getElementById("output");
input = document.getElementById("username");

var jokes = [
    "Chuck Norris' beautiful singing voice can make tanks break down.",
    "The movie 'Caligula' was inspired by the average Chuck Norris house party.",
    "Chuck Norris kicked Maggie and the Ferocious Beast so hard they woke up in Nowhere Land"
];

var index = 0;

btn.onclick = function() {
    var joke = jokes[index];
    output.innerHTML = joke.replace("Chuck Norris", input.value);
    index++;
    index = index % jokes.length;
}

