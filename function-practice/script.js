var startMyDay = function () {
  return "Time for coffee and a shower";
};

console.log(startMyDay());

var favoriteCookie = function (cookie) {
  console.log(`My favorite cookie is ${cookie}.`);
};

console.log(favoriteCookie());
console.log(favoriteCookie("peanut butter"));

var introduce = function (name, occupation) {
  return `Hi, my name is ${name}, and I am a ${occupation}.`;
};

console.log(introduce("Gregg", "web developer"));
console.log(introduce("Flo", "Software genius"));

var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you have today?")
  );
  if (numGlasses >= 8) {
    console.log(`Congrats on getting enough water!`);
  } else {
    console.log(`Not bad, not bad. Let's try for a bit more tomorrow.`);
  }
};

hydrationFeedback();
