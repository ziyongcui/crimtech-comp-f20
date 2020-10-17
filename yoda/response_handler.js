// Declaring variables that you may want to use.
let names = ['cute', 'regular'];
let moods = ['dark', 'force', 'std'];

let dark_quotes = ["Once you start down the dark path, forever will it dominate your destiny, consume you it will.",
"In a dark place we find ourselves, and a little more knowledge lights our way.",
"Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
"Always two there are, no more, no less. A master and an apprentice.",
"In the end, cowards are those who follow the dark side."];
let force_quotes = ["Luminous beings are we, not this crude matter.",
"A Jedi uses the Force for knowledge and defense, never for attack.",
"Clear your mind must be, if you are to find the villains behind this plot.",
"The force. Life creates it, makes it grow. Its energy surrounds us and binds us.",
"My ally is the Force, and a powerful ally it is."];
let std_quotes = ["Patience you must have, my young padawan.",
"When nine hundred years old you reach, look as good you will not.",
"No! Try not! Do or do not, there is no try.",
"Judge me by my size, do you?",
"Difficult to see. Always in motion is the future."
];

function respond() {
    // Your Code Here
    var oldtext = document.getElementById("textbox").value;
    var ranNumIm = Math.floor(Math.random() * 3);
    var ranNumQ = Math.floor(Math.random() * 5);
    var ranNumM = Math.floor(Math.random() * 100);
    var babyYodaM = "Yes, h";
    document.getElementById("textbox").value= "";

    if (oldtext.includes("cute") || oldtext.includes("baby")){
      if (oldtext.includes("dark") && oldtext.includes("force")){
        document.getElementById("yodaimage").setAttribute("src", "img/cute-dark.jpg");
        for (i = 0; i < ranNumM; i++){
          babyYodaM = babyYodaM + "m"
        }
        document.getElementById("description").setAttribute("data-content", babyYodaM);
        console.log(newtext);
      }
      else if (oldtext.includes("force")){
        document.getElementById("yodaimage").setAttribute("src", "img/cute-force.jpg");
        for (i = 0; i < ranNumM; i++){
          babyYodaM = babyYodaM + "m"
        }
        document.getElementById("description").setAttribute("data-content", babyYodaM);
        console.log(newtext);
      }
      else {
        document.getElementById("yodaimage").setAttribute("src", "img/cute-std.jpg");
        for (i = 0; i < ranNumM; i++){
          babyYodaM = babyYodaM + "m"
        }
        document.getElementById("description").setAttribute("data-content", babyYodaM);
        console.log(newtext);
      }
    }
    else {
      var newImName = moods[ranNumIm];
      var newIm = "img/regular-" + newImName + ".jpg"
      document.getElementById("yodaimage").setAttribute("src", newIm)
      if (ranNumIm == 0){
        document.getElementById("description").setAttribute("data-content", dark_quotes[ranNumQ]);
        console.log(newtext);
      }
      else if (ranNumIm == 1){
        document.getElementById("description").setAttribute("data-content", force_quotes[ranNumQ]);
        console.log(newtext);
      }
      else {
        document.getElementById("description").setAttribute("data-content", std_quotes[ranNumQ]);
        console.log(newtext);
      }
    }


}
