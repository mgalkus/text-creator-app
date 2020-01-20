import * as counterAndSpinner from "./counterAndSpinner";
import * as settingsInBackdrop from "./backdrop.js";
import * as copyTextOutput from "./copyTextOutput.js";

export function displayOutputsAndSpinner() {
  // For displays.
  const qs = document.querySelector.bind(document);
  const outputSection = qs(".output");
  let outputNr = 1;
  const texts = [
    "You're going to do his laundry? It doesn't look so shiny to me. Oh, how I wish I could believe or understand that! There's only one reasonable course of action now: kill Flexo! For example, if you killed your grandfather, you'd cease to exist!",
    "Oh, all right, I am. But if anything happens to me, tell them I died robbing some old man. Kif, I have mated with a woman. Inform the men. I had more, but you go ahead. I just want to talk. It has nothing to do with mating. Fry, that doesn't make sense.",
    "Goodbye, friends. I never thought I'd die like this. But I always really hoped. Kif might! Now what? Is today's hectic lifestyle making you tense and impatient? No! The cat shelter's on to me.",
    "If rubbin' frozen dirt in your crotch is wrong, hey I don't wanna be right. Too much work. Let's burn it and say we dumped it in the sewer. It's a T. It goes 'tuh'. Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars.",
    "Maybe I love you so much I love you no matter who you are pretending to be. Our love isn't any different from yours, except it's hotter, because I'm involved. Why yes! Thanks for noticing. I just want to talk. It has nothing to do with mating. Fry, that doesn't make sense.",
    "Yes! In your face, Gandhi! I was having the most wonderful dream. Except you were there, and you were there, and you were there! Well, let's just dump it in the sewer and say we delivered it. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew."
  ];

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////  The API used here before is not currently working, so API-related code is commented out.  /////////
  ///////////////////////////  Dummy texts are used to still show the functionality.  ////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////  
  
  // const promptDOM = qs(".landing-input-textarea-div").textContent;
  // const deepnessTopKDOM = qs(".landing-settings-deepness-slider").value;
  // const lengthDOM = qs(".landing-settings-length-slider").value;
  // const uniquenessDOM = qs(".landing-settings-uniqueness-slider").value;
  // const waitingCont = qs(".landing-waiting-error-container");
  // const spinnerCont = qs(".landing-spinner-container");
  // const spinnerText = qs(".landing-spinner-text");

  // For counter
  const counter = qs(".counter");
  const countTimeOne = 5000;
  const countTimeTwo = 3000;
  const countTimeTotal = countTimeOne + countTimeTwo + 500;
  const periodOneMaxCount = 80;
  const countOneInterval = countTimeOne / periodOneMaxCount;
  const PeriodTwoMaxCount = 100;
  const countTwoInterval =
    countTimeTwo / (PeriodTwoMaxCount - periodOneMaxCount);
  let count = 1;

  //Varied speed counter:
  //Resetting in case there was a previous count:
  counter.innerHTML = "";

  // Counts 0-80 in 5sec (minimum API response time):
  let counterOneId = setInterval(() => {
    if (count < periodOneMaxCount) {
      counter.innerHTML = count;
      count++;
    } else clearInterval(counterOneId);
  }, countOneInterval);

  // Then counts 80-100 in another 3sec (8sec total now == maximum API response time)
  setTimeout(() => {
    let counterTwoId = setInterval(() => {
      if (count <= PeriodTwoMaxCount) {
        counter.innerHTML = count;
        count++;
      } else clearInterval(counterTwoId);
    }, countTwoInterval);
  }, countTimeOne);

  // Fetching from API:
  //   const nrOfTexts = "10";
  //   let params = {
  //     prompt: promptDOM,
  //     top_k: deepnessTopKDOM,
  //     length: lengthDOM,
  //     temperature: uniquenessDOM,
  //     num_of_texts: nrOfTexts
  //   };

  outputSection.style.display = "block";

  // fetch('http://35.206.147.169:5080/api/texts', {
  // 	method: 'POST',
  // 	body: JSON.stringify(params),
  // 	headers: {
  // 		'Content-type': 'application/json'
  // 	}
  // })
  // .then(function(response) {
  // 	if (!response.ok) {
  // 		console.log(response.statusText);
  // 		waitingCont.classList.add('active');
  // 		spinnerCont.classList.remove('active');
  // 		spinnerText.classList.remove('active');
  // 	} else return response;
  // })
  // .then(response => response.json())

  // .then(json => {
  // hideBackdrop necessary here in case generateButton is clicked from backdrop
  // hideBackdrop fires before scrollIntoView so that .output-container's offsetTop is renewed and window is scrolled to its new position (not the one it has in backdrop)
  // count = 100;

  setTimeout(() => {
    counterAndSpinner.removeCounterScreen();
    settingsInBackdrop.hideBackdropFromGenerate();

    // Removing all previously generated texts, if any:
    document.querySelector(".output-container").innerHTML = "";

    texts.forEach(element => {
      const outputPart = document.createElement("div");
      outputPart.className = "output-part";
      document.querySelector(".output-container").appendChild(outputPart);
      outputPart.innerHTML = `
		<div class="output-part-top">
		<h3 class="output-title h-3">Result ${outputNr}</h3><div class="output-copy-container"><div class="output-copy-message tagline">Copied</div><div class="output-copy-link"><img src="copy-icon.d8395262.svg" alt="Copy icon" class="output-copy-icon"></div></div></div><p class="output-outputed-text body">${element}</p>`;
      outputNr++;
    });

    document.querySelector(".output-container").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
    copyTextOutput.copyTextOutput();
  }, countTimeTotal);
}
