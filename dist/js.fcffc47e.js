// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../js/toggleSettings.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleSettings = void 0;

var toggleSettings = function toggleSettings() {
  var qs = document.querySelector.bind(document);
  var lineV = qs('.line-v');
  var wholeSettings = qs('.landing-settings');
  var settingsTop = qs('.landing-settings-top');
  var settingsBottom = qs('.landing-settings .landing-settings-bottom');

  var displayCorrectSize = function displayCorrectSize() {
    if (wholeSettings.classList.contains('active')) {
      lineV.classList.toggle('remove-v');
      settingsBottom.classList.toggle('active');
      setTimeout(function () {
        wholeSettings.classList.toggle('active');
        settingsTop.classList.toggle('active');
        settingsBottom.style.display = 'none';
      }, 200);
    } else {
      lineV.classList.toggle('remove-v');
      settingsTop.classList.toggle('active');
      wholeSettings.classList.toggle('active');
      setTimeout(function () {
        settingsBottom.style.display = 'block';
      }, 200);
      setTimeout(function () {
        settingsBottom.classList.toggle('active');
      }, 200);
    }
  };

  if (window.matchMedia('(max-width: 920px)').matches) {
    settingsTop.addEventListener('click', function () {
      displayCorrectSize();
    });
  } else return;
};

exports.toggleSettings = toggleSettings;
},{}],"../js/textareaExpand.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textareaExpand = void 0;

var textareaExpand = function textareaExpand() {
  var qs = document.querySelector.bind(document);
  var textarea = qs('.landing-input-textarea');
  var textareaDiv = qs('.landing-input-textarea-div'); //Didn't use keypress event, as keypress event doesn't detect backspace and delete keys.

  textarea.addEventListener('input', function () {
    var content = textarea.value;
    textareaDiv.innerHTML = content;
    textarea.style.height = textareaDiv.scrollHeight + 60 + 'px';
  }, false);
};

exports.textareaExpand = textareaExpand;
},{}],"../js/displaySliderValues.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayDeepness = displayDeepness;
exports.displayUniqueness = exports.displayLength = void 0;
var qs = document.querySelector.bind(document);

var displayLength = function displayLength() {
  var lengthSlider = qs('.landing-settings-length-slider');
  var lengthNr = qs('.landing-settings-length-number');
  lengthNr.innerHTML = lengthSlider.value;
  lengthSlider.addEventListener('input', function () {
    lengthNr.innerHTML = lengthSlider.value; //Fills slider progress on input. Based on https://stackoverflow.com/a/57153340/12100458

    lengthSlider.style.background = 'linear-gradient(to right, #2980B9 0%, #2980B9 ' + lengthSlider.value / 10.24 + '%, #e4e4e4 ' + lengthSlider.value / 10.24 + '%, #e4e4e4 100%)';
  });
};

exports.displayLength = displayLength;

var displayUniqueness = function displayUniqueness() {
  var uniquenessSlider = qs('.landing-settings-uniqueness-slider');
  var uniquenessNr = qs('.landing-settings-uniqueness-number');
  uniquenessNr.innerHTML = uniquenessSlider.value;
  uniquenessSlider.addEventListener('input', function () {
    uniquenessNr.innerHTML = uniquenessSlider.value; //Fills slider progress on input. Based on https://stackoverflow.com/a/57153340/12100458

    if (uniquenessSlider.value == 0.1) {
      uniquenessSlider.style.background = 'linear-gradient(to right, #2980B9 0%, #2980B9 0%, #e4e4e4 0%, #e4e4e4 100%)';
    } else if (uniquenessSlider.value == 0.2) {
      uniquenessSlider.style.background = 'linear-gradient(to right, #2980B9 0%, #2980B9 11%, #e4e4e4 11%, #e4e4e4 100%)';
    } else if (uniquenessSlider.value == 0.3) {
      uniquenessSlider.style.background = 'linear-gradient(to right, #2980B9 0%, #2980B9 22%, #e4e4e4 22%, #e4e4e4 100%)';
    } else if (uniquenessSlider.value == 0.4) {
      uniquenessSlider.style.background = 'linear-gradient(to right, #2980B9 0%, #2980B9 33%, #e4e4e4 33%, #e4e4e4 100%)';
    } else if (uniquenessSlider.value == 0.5) {
      uniquenessSlider.style.background = 'linear-gradient(to right, #2980B9 0%, #2980B9 44%, #e4e4e4 44%, #e4e4e4 100%)';
    } else if (uniquenessSlider.value == 0.6) {
      uniquenessSlider.style.background = 'linear-gradient(to right, #2980B9 0%, #2980B9 55%, #e4e4e4 55%, #e4e4e4 100%)';
    } else if (uniquenessSlider.value == 0.7) {
      uniquenessSlider.style.background = 'linear-gradient(to right, #2980B9 0%, #2980B9 66%, #e4e4e4 66%, #e4e4e4 100%)';
    } else if (uniquenessSlider.value == 0.8) {
      uniquenessSlider.style.background = 'linear-gradient(to right, #2980B9 0%, #2980B9 77%, #e4e4e4 77%, #e4e4e4 100%)';
    } else if (uniquenessSlider.value == 0.9) {
      uniquenessSlider.style.background = 'linear-gradient(to right, #2980B9 0%, #2980B9 88%, #e4e4e4 88%, #e4e4e4 100%)';
    } else if (uniquenessSlider.value == 1) {
      uniquenessSlider.style.background = 'linear-gradient(to right, #2980B9 100%, #2980B9 0%, #e4e4e4 0%, #e4e4e4 0%)';
    }
  });
};

exports.displayUniqueness = displayUniqueness;

function displayDeepness() {
  var deepnessSlider = qs('.landing-settings-deepness-slider');
  var deepnessNr = qs('.landing-settings-deepness-number');
  deepnessNr.innerHTML = deepnessSlider.value;
  deepnessSlider.addEventListener('input', function () {
    deepnessNr.innerHTML = deepnessSlider.value; //Fills slider progress on input. Based on https://stackoverflow.com/a/57153340/12100458

    deepnessSlider.style.background = 'linear-gradient(to right, #2980B9 0%, #2980B9 ' + deepnessSlider.value + '%, #e4e4e4 ' + deepnessSlider.value + '%, #e4e4e4 100%)';
  });
}
},{}],"../js/countInput.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countInput = void 0;

var countInput = function countInput() {
  var qs = document.querySelector.bind(document);
  var textareaCont = qs('.landing-input-textarea-container');
  var textarea = qs('.landing-input-textarea');
  var inputLengthLog = qs('.landing-input-count');
  var button = qs('.landing-input-generate-text-button');
  var textareaCross = qs('.textarea-cross');
  button.classList.add('disabled');
  textarea.addEventListener('input', function () {
    if (textarea.value.length > 1000) {
      inputLengthLog.classList.add('too-long');
      inputLengthLog.innerHTML = 'Too many characters: ' + textarea.value.length + '/1000';
      button.classList.add('disabled');
      textarea.classList.add('red-border');
      textareaCont.classList.add('on-input');
    } else if (textarea.value.length > 0 && /[a-z]/i.test(textarea.value) == false) {
      button.classList.add('disabled');
      inputLengthLog.innerHTML = '0/1000';
    } else if (textarea.value.length > 0 && textarea.value.length <= 1000 && inputLengthLog.classList.contains('too-long')) {
      inputLengthLog.classList.remove('too-long');
      inputLengthLog.innerHTML = textarea.value.length + '/1000';
      button.classList.remove('disabled');
      textarea.classList.remove('red-border');
      textareaCont.classList.add('on-input');
    } else if (textarea.value.length > 0 && textarea.value.length <= 1000 && /[a-z]/i.test(textarea.value)) {
      button.classList.remove('disabled');
      inputLengthLog.innerHTML = textarea.value.length + '/1000';
      textareaCont.classList.add('on-input');
    } else if (textarea.value.length == 0) {
      button.classList.add('disabled');
      inputLengthLog.innerHTML = textarea.value.length + '/1000';
      textareaCont.classList.remove('on-input');
    }
  });
  textareaCross.addEventListener('click', function () {
    textarea.value = '';
    textareaCont.classList.remove('on-input');
    inputLengthLog.innerHTML = '0/1000';
  });
};

exports.countInput = countInput;
},{}],"../js/counterAndSpinner.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeSpinner = exports.runSpinner = exports.removeCounterScreen = exports.displayCounterScreen = exports.countTimeTwo = exports.countTimeOne = exports.totalCounterInterval = void 0;
var totalCounterInterval = 20000;
exports.totalCounterInterval = totalCounterInterval;
var countTimeOne = 5000;
exports.countTimeOne = countTimeOne;
var countTimeTwo = 15000;
exports.countTimeTwo = countTimeTwo;
var qs = document.querySelector.bind(document);
var qsAll = document.querySelectorAll.bind(document);

var displayCounterScreen = function displayCounterScreen() {
  var removeables = qsAll('.removeable');
  var landing = qs('.landing');
  var spinnerText = qs('.landing-spinner-text');

  for (var i = 0; i < removeables.length; i++) {
    var element = removeables[i];
    element.classList.add('removed');
  }

  landing.classList.add('full-screen');
  spinnerText.classList.add('active');
};

exports.displayCounterScreen = displayCounterScreen;

var removeCounterScreen = function removeCounterScreen() {
  var removeables = qsAll('.removeable');
  var landing = qs('.landing');
  var spinnerCont = qs('.landing-spinner-container');
  var spinnerText = qs('.landing-spinner-text');

  for (var i = 0; i < removeables.length; i++) {
    var element = removeables[i];
    element.classList.remove('removed');
  }

  landing.classList.remove('full-screen');
  spinnerCont.classList.remove('active');
  spinnerText.classList.remove('active');
};

exports.removeCounterScreen = removeCounterScreen;

var runSpinner = function runSpinner() {
  var spinnerCont = qs('.landing-spinner-container');
  var spinner = qs('.spinner');
  spinnerCont.classList.add('active');

  if (spinner.classList.contains('fading')) {
    spinner.classList.remove('fading');
  }
};

exports.runSpinner = runSpinner;

var removeSpinner = function removeSpinner() {
  var spinner = qs('.spinner');
  spinner.classList.add('fading');
};

exports.removeSpinner = removeSpinner;
},{}],"../js/backdrop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideBackdropFromGenerate = exports.hideBackdropfromClose = exports.showBackdrop = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var showBackdrop = function showBackdrop() {
  var fixedButton = qs('.fixed-header-button');
  var fixedHeader = qs('.fixed-header');
  var settingsInputCont = qs('.landing-settings-input');
  var outputSection = qs('.output');
  var landingCont = qs('.landing-container');
  var landingSettings = qs('.landing-settings-input');
  var textarea = qs('.landing-input-textarea');
  var backdropCross = qs('.backdrop-cross-container');
  var nodes = landingCont.children;
  var logo = qs('.landing-logo-link');
  fixedButton.addEventListener('click', function () {
    // Showing cross, backdrop and overflow-hidden removing fixedHeader, removing pointer events from outputSection
    backdropCross.style.display = 'flex';
    settingsInputCont.classList.add('in-backdrop');
    document.body.classList.add('overflow-hidden');
    fixedHeader.classList.remove('active');
    outputSection.style.pointerEvents = 'none'; // Removing all children from landingCont and showing only landingSettings; removing padding

    for (var i = 0; i < nodes.length; i++) {
      nodes[i].style.display = 'none';
    } // landingCont.style.padding = '0';


    landingSettings.style.display = 'block';
    logo.style.display = 'block'; // Allowing scroll on textarea (so it's more clear for mobile user they can't scroll parent element by scrolling textarea)

    textarea.addEventListener('input', function () {
      textarea.style.height = 'auto';
      textarea.style.overflow = 'scroll';
    }, false);
  });
};

exports.showBackdrop = showBackdrop;

var hideBackdropfromClose = function hideBackdropfromClose() {
  var settingsInputCont = qs('.landing-settings-input');
  var outputSection = qs('.output');
  var landingCont = qs('.landing-container');
  var backdropCross = qs('.backdrop-cross-container');
  var nodes = landingCont.children; // Showing all children of landingCont again and resetting padding

  for (var i = 0; i < nodes.length; i++) {
    nodes[i].style.display = 'block';
  } // landingCont.style.padding = '';
  // Hiding cross, removing overflow hidden from body, removing modal and showing fixedHeader


  backdropCross.style.display = 'none';
  document.body.classList.remove('overflow-hidden');
  settingsInputCont.classList.remove('in-backdrop'); // Allowing pointer events on outputSection again

  if (_typeof(outputSection) != undefined && outputSection != null) {
    outputSection.style.pointerEvents = 'unset';
  } else return;
};

exports.hideBackdropfromClose = hideBackdropfromClose;

var hideBackdropFromGenerate = function hideBackdropFromGenerate() {
  var settingsInputCont = qs('.landing-settings-input');
  var fixedHeader = qs('.fixed-header');
  var outputSection = qs('.output');
  var landingCont = qs('.landing-container');
  var backdropCross = qs('.backdrop-cross-container');
  var nodes = landingCont.children; // Showing all children of landingCont again and resetting padding

  for (var i = 0; i < nodes.length; i++) {
    nodes[i].style.display = 'block';
  } // landingCont.style.padding = '';
  // Hiding cross, removing overflow hidden from body, removing modal and showing fixedHeader


  backdropCross.style.display = 'none';
  document.body.classList.remove('overflow-hidden');
  settingsInputCont.classList.remove('in-backdrop');
  fixedHeader.classList.add('active'); // Allowing pointer events on outputSection again

  if (_typeof(outputSection) != undefined && outputSection != null) {
    outputSection.style.pointerEvents = 'unset';
  } else return;
};

exports.hideBackdropFromGenerate = hideBackdropFromGenerate;
},{}],"../js/copyTextOutput.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyTextOutput = void 0;

var copyTextOutput = function copyTextOutput() {
  var qsAll = document.querySelectorAll.bind(document);
  var copyButtons = qsAll('.output-copy-link');
  var copyMessages = qsAll('.output-copy-message');
  var outputs = qsAll('.output-outputed-text');

  var _loop = function _loop(i) {
    var element = copyButtons[i];
    element.addEventListener('click', function () {
      if (window.getSelection) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(outputs[i]);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('Copy');
        selection.removeAllRanges();
      }

      copyMessages[i].classList.add('active');
      setTimeout(function () {
        copyMessages[i].classList.add('visible');
      }, 10);
      setTimeout(function () {
        copyMessages[i].classList.remove('visible');
      }, 1000);
      setTimeout(function () {
        copyMessages[i].classList.remove('active');
      }, 1300);
    });
  };

  for (var i = 0; i < copyButtons.length; i++) {
    _loop(i);
  }
};

exports.copyTextOutput = copyTextOutput;
},{}],"../js/displayOutputsAndSpinner.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayOutputsAndSpinner = displayOutputsAndSpinner;

var counterAndSpinner = _interopRequireWildcard(require("./counterAndSpinner"));

var settingsInBackdrop = _interopRequireWildcard(require("./backdrop.js"));

var copyTextOutput = _interopRequireWildcard(require("./copyTextOutput.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function displayOutputsAndSpinner() {
  // For displays.
  var qs = document.querySelector.bind(document);
  var outputSection = qs(".output");
  var outputNr = 1;
  var texts = ["You're going to do his laundry? It doesn't look so shiny to me. Oh, how I wish I could believe or understand that! There's only one reasonable course of action now: kill Flexo! For example, if you killed your grandfather, you'd cease to exist!", "Oh, all right, I am. But if anything happens to me, tell them I died robbing some old man. Kif, I have mated with a woman. Inform the men. I had more, but you go ahead. I just want to talk. It has nothing to do with mating. Fry, that doesn't make sense.", "Goodbye, friends. I never thought I'd die like this. But I always really hoped. Kif might! Now what? Is today's hectic lifestyle making you tense and impatient? No! The cat shelter's on to me.", "If rubbin' frozen dirt in your crotch is wrong, hey I don't wanna be right. Too much work. Let's burn it and say we dumped it in the sewer. It's a T. It goes 'tuh'. Ok, we'll go deliver this crate like professionals, and then we'll go ride the bumper cars.", "Maybe I love you so much I love you no matter who you are pretending to be. Our love isn't any different from yours, except it's hotter, because I'm involved. Why yes! Thanks for noticing. I just want to talk. It has nothing to do with mating. Fry, that doesn't make sense.", "Yes! In your face, Gandhi! I was having the most wonderful dream. Except you were there, and you were there, and you were there! Well, let's just dump it in the sewer and say we delivered it. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew."]; ////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

  var counter = qs(".counter");
  var countTimeOne = 5000;
  var countTimeTwo = 3000;
  var countTimeTotal = countTimeOne + countTimeTwo + 500;
  var periodOneMaxCount = 80;
  var countOneInterval = countTimeOne / periodOneMaxCount;
  var PeriodTwoMaxCount = 100;
  var countTwoInterval = countTimeTwo / (PeriodTwoMaxCount - periodOneMaxCount);
  var count = 1; //Varied speed counter:
  //Resetting in case there was a previous count:

  counter.innerHTML = ""; // Counts 0-80 in 5sec (minimum API response time):

  var counterOneId = setInterval(function () {
    if (count < periodOneMaxCount) {
      counter.innerHTML = count;
      count++;
    } else clearInterval(counterOneId);
  }, countOneInterval); // Then counts 80-100 in another 3sec (8sec total now == maximum API response time)

  setTimeout(function () {
    var counterTwoId = setInterval(function () {
      if (count <= PeriodTwoMaxCount) {
        counter.innerHTML = count;
        count++;
      } else clearInterval(counterTwoId);
    }, countTwoInterval);
  }, countTimeOne); // Fetching from API:
  //   const nrOfTexts = "10";
  //   let params = {
  //     prompt: promptDOM,
  //     top_k: deepnessTopKDOM,
  //     length: lengthDOM,
  //     temperature: uniquenessDOM,
  //     num_of_texts: nrOfTexts
  //   };

  outputSection.style.display = "block"; // fetch('http://35.206.147.169:5080/api/texts', {
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

  setTimeout(function () {
    counterAndSpinner.removeCounterScreen();
    settingsInBackdrop.hideBackdropFromGenerate(); // Removing all previously generated texts, if any:

    document.querySelector(".output-container").innerHTML = "";
    texts.forEach(function (element) {
      var outputPart = document.createElement("div");
      outputPart.className = "output-part";
      document.querySelector(".output-container").appendChild(outputPart);
      outputPart.innerHTML = "\n\t\t<div class=\"output-part-top\">\n\t\t<h3 class=\"output-title h-3\">Result ".concat(outputNr, "</h3><div class=\"output-copy-container\"><div class=\"output-copy-message tagline\">Copied</div><div class=\"output-copy-link\"><img src=\"copy-icon.d8395262.svg\" alt=\"Copy icon\" class=\"output-copy-icon\"></div></div></div><p class=\"output-outputed-text body\">").concat(element, "</p>");
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
},{"./counterAndSpinner":"../js/counterAndSpinner.js","./backdrop.js":"../js/backdrop.js","./copyTextOutput.js":"../js/copyTextOutput.js"}],"../js/fixedHeaderVisibilty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fixedHeaderVisibilty = void 0;

var fixedHeaderVisibilty = function fixedHeaderVisibilty() {
  var qs = document.querySelector.bind(document);
  var outputSection = qs('.output');
  var fixedHeader = qs('.fixed-header');
  window.addEventListener('scroll', function () {
    if (document.body.classList.contains('overflow-hidden')) {
      return;
    } else {
      if (window.scrollY < outputSection.offsetTop) {
        fixedHeader.classList.remove('active');
      } else if (window.scrollY >= outputSection.offsetTop) {
        fixedHeader.classList.add('active');
      }
    }
  });
};

exports.fixedHeaderVisibilty = fixedHeaderVisibilty;
},{}],"../js/index.js":[function(require,module,exports) {
"use strict";

var toggleSettings = _interopRequireWildcard(require("./toggleSettings.js"));

var textareaExpand = _interopRequireWildcard(require("./textareaExpand.js"));

var displaySliderValues = _interopRequireWildcard(require("./displaySliderValues"));

var countInput = _interopRequireWildcard(require("./countInput"));

var displayOutputsAndSpinner = _interopRequireWildcard(require("./displayOutputsAndSpinner.js"));

var counterAndSpinner = _interopRequireWildcard(require("./counterAndSpinner.js"));

var settingsInBackdrop = _interopRequireWildcard(require("./backdrop.js"));

var fixedHeaderVisibilty = _interopRequireWildcard(require("./fixedHeaderVisibilty.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

window.qs = document.querySelector.bind(document);
window.qsAll = document.querySelectorAll.bind(document);
window.addEventListener('load', function () {
  var qs = document.querySelector.bind(document);
  var backdropCross = qs('.backdrop-cross-container');
  toggleSettings.toggleSettings();
  textareaExpand.textareaExpand();
  displaySliderValues.displayLength();
  displaySliderValues.displayUniqueness();
  displaySliderValues.displayDeepness();
  countInput.countInput();

  var generateOutputs = function () {
    var generateButtons = qsAll('.generation-button');
    var waitingCont = qs('.landing-waiting-error-container');
    generateButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        counterAndSpinner.displayCounterScreen();
        counterAndSpinner.runSpinner();
        backdropCross.style.display = 'none';
        waitingCont.classList.remove('active');
        displayOutputsAndSpinner.displayOutputsAndSpinner(); // Again alowing autoexpanding for textarea in case generateButton is clicked from backdrop:

        textareaExpand.textareaExpand();
        fixedHeaderVisibilty.fixedHeaderVisibilty();
      });
    });
  }();

  settingsInBackdrop.showBackdrop();
  backdropCross.addEventListener('click', function () {
    // Again alowing autoexpanding for textarea after closing backdrop
    settingsInBackdrop.hideBackdropfromClose();
    textareaExpand.textareaExpand();
  });
});
},{"./toggleSettings.js":"../js/toggleSettings.js","./textareaExpand.js":"../js/textareaExpand.js","./displaySliderValues":"../js/displaySliderValues.js","./countInput":"../js/countInput.js","./displayOutputsAndSpinner.js":"../js/displayOutputsAndSpinner.js","./counterAndSpinner.js":"../js/counterAndSpinner.js","./backdrop.js":"../js/backdrop.js","./fixedHeaderVisibilty.js":"../js/fixedHeaderVisibilty.js"}],"../../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62046" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel/src/builtins/hmr-runtime.js","../js/index.js"], null)
//# sourceMappingURL=/js.fcffc47e.js.map