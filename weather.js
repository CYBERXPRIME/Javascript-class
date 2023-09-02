const temp = 40;

if (temp > 50) {
  console.log(
    `Congratulations, At ${temp} degC you should be experiencing a heat wave`
  );
  console.log(`I'm shocked you can still use a computer`);
} else if (temp > 36) {
  console.log(`At ${temp} degC, the weather is very hot.`);
  console.log(`Air conditioners and pools won't be a bad idea`);
} else if (temp > 30) {
  console.log(`At ${temp} degC, the weather is hot.`);
  console.log(`Hand fans will be really handy at this point.`);
} else if (temp > 25) {
  console.log(`At ${temp} degC, the weather is warm.`);
  console.log(`I love taking Ice Cream 🍧, you should try it too.`);
} else if (temp > 21) {
  console.log(`At ${temp} degC, the weather is cold.`);
  console.log(`You should wear a jacket and clothes to keep you warm`);
} else if (temp >= 14) {
  console.log(`At ${temp} degC, the weather is chilly.`);
  console.log(`You should wear a coat and stay with your loved ones for warmth`);
} else if (temp > 10) {
  console.log(`At ${temp} degC, the weather is very cold.`);
  console.log(`Now, you should take your coats and jackets more serious`);
} else if (temp < 10) {
  console.log(`At ${temp} degC, the weather is extremely cold ❄.`);
  console.log(`Yikes, its too cold, prepare for frostbites 🥶`);
}
