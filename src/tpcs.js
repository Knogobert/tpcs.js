// * TURBO-POWERED COLOR SCHEMES
// original by [Rex Riepe in LESS](https://github.com/rexriepe/tpcs)
// translated to JS by [Knogobert](https://github.com/knogobert)

// TODO: Alpha channel/transparency support

import turbo from './turbo';
import { hexToRGB } from './utils';
import {
  colorBlend,
  colorBlendModeFns,
} from './colorBlending';
import {
  mix,
  lighten,
  saturate,
  luma,
  getLumafix,
  getDistance,
  getCloserFartherHue,
} from './colorFns';

// run TPCS and set all 9 semantic color variables:
// action, reaction, alternate, accent
// info, success, warning, failure, highlight

// * TPCS mixins
/**
 * gerColorScheme
 * @param {String|Array} color, hexadecimal color code with hashtag OR array with RGB values 0-255
 * @example '#DC143C'
 * @example [65,128,221]
 *
 * @returns {Object} colorScheme
 * */
export default function getColorScheme(color = '#DC143C') {
  // the main mixin
  // sets all color variables
  // const baseColorHex = '#4180DD';
  const baseColor = typeof color === 'string' ? hexToRGB(color) : color;

  const { repColor, repColorNumber } = getRepColor(baseColor, turbo);
  const actionBase = repColor;
  const { reactionBase, altBase, accentBase } = getColorBases(repColorNumber, turbo);

  const { action } = getAction(baseColor, actionBase);
  const { reaction } = getReaction(baseColor, reactionBase);
  const { alternate } = getAlternate(baseColor, altBase);
  const { accent } = getAccent(baseColor, accentBase);

  const { info } = getInfo(baseColor, actionBase, reactionBase);
  const { success } = getSuccess(baseColor, actionBase, reactionBase);
  const { warning } = getWarning(baseColor, actionBase, reactionBase);
  const { failure } = getFailure(baseColor, actionBase, reactionBase);
  const { highlight } = getHighlight(baseColor);

  return {
    baseColor,
    // actionBase,
    // reactionBase,
    // altBase,
    // accentBase,
    action,
    reaction,
    alternate,
    accent,
    info,
    success,
    warning,
    failure,
    highlight,
  };
}

function getRepColor(color, list = []) {
  // this sets a representative color -- repColor -- out of a list
  // repColor is the color in the list closest to the given color
  // right now this measures by hue

  const iterations = list.length - 1;
  const firstChamp = list[1];
  const firstContender = list[2];
  let firstWin = null;

  const tournament = (champ, contender, index) => {
    if (index < iterations) {
      const { closer, farther } = getCloserFartherHue(color, champ, contender);
      const winner = champ === closer ? champ : contender;
      const nextContender = list[index + 2];

      if ((champ === closer && index === 1) || contender === closer) {
        firstWin = index;
      }

      // iterate the tournament
      return tournament(winner, nextContender, index + 1);
    }

    return {
      repColor: champ,
      repColorNumber: firstWin,
    };
  };

  return tournament(firstChamp, firstContender, 1);
}

function getColorBases(colorNum, list = [], offset = 32) {
  // does some faux-color-wheel-spinning through
  // the turbo palette to find new colors
  // offset changes altBase and accentBase

  // this returns these variables:
  // reactionBase
  // altBase
  // accentBase

  if (colorNum >= 192) {
    return {
      reactionBase: list[colorNum - 128],
      altBase: list[colorNum - offset * 2],
      accentBase: list[colorNum - offset],
    };
  }

  if (colorNum > 128 && colorNum < 192) {
    return {
      reactionBase: list[colorNum - 128],
      altBase: list[colorNum - offset * 2],
      accentBase: list[colorNum - offset],
    };
  }

  if (colorNum > 64 && colorNum <= 128) {
    return {
      reactionBase: list[colorNum + 128],
      altBase: list[colorNum + offset * 2],
      accentBase: list[colorNum + offset],
    };
  }

  // if (colorNum <= 64) {
  return {
    reactionBase: list[colorNum + 128],
    altBase: list[colorNum + offset * 2],
    accentBase: list[colorNum + offset],
  };
  // }
}

// * Semantic colors
function getAction(baseColor, actionBase) {
  // action means "do something," it's great for submit buttons
  // it's usually pretty close to the base color
	return { action: getLumafix(actionBase, baseColor, 38) };
}

function getReaction(baseColor, reactionBase) {
  // reaction is for responding, usually after an action
	// a good second step or confirmation color
	// reaction is typically close to being a complement of action
  return { reaction: getLumafix(reactionBase, baseColor, 38) };
}

function getAlternate(baseColor, altBase) {
  // alternate is meant to be an alternate color to action and reaction
	// it can sometimes make a good stand-in for other colors in the scheme
	return { alternate: getLumafix(altBase, baseColor, 38) };
}

function getAccent(baseColor, accentBase) {
	// accent is meant to be used sparingly with @action, @reaction and @alternate
	// its extra saturation and lightness is good for drawing attention or balancing designs
	return { accent: lighten(saturate(mix(getLumafix(accentBase, baseColor), accentBase, 20), 10), 5) };
}

function getInfo(baseColor, actionBase, reactionBase) {
	// info is a light blue or teal
	// it indicates innocuous, low-urgency information
	const blue = turbo[64];
  const teal = turbo[74];
  let infoBase = blue;
	if ( getDistance(blue, actionBase) < 70 || getDistance(blue, reactionBase) < 70) infoBase = teal;

	return { info: getLumafix(infoBase, baseColor, 50) };
}


function getWarning(baseColor, actionBase, reactionBase) {
	// warning is a high urgency version of its pairing, info
	// its orange/yellow is a complement to info's teal/blue
	// remember: warning comes before the failure, failure after
	const orange = turbo[172];
  const yellow = turbo[152];
  const white = [255, 255, 255];
  let warningBase = orange;
	if ( getDistance(orange, actionBase) < 70 || getDistance(orange, reactionBase) < 70) warningBase = yellow;

	if (luma(...baseColor) > 0.56) {
		return { warning: colorBlend(colorBlendModeFns.softlight, mix(getLumafix(warningBase, baseColor), warningBase, 70), warningBase) };
	} else if (luma(...baseColor) > 0.32) {
		return { warning: colorBlend(colorBlendModeFns.overlay, mix(getLumafix(warningBase, baseColor), warningBase, 70), warningBase) };
	} else if (luma(...baseColor) > 0.16) {
		return { warning: colorBlend(colorBlendModeFns.overlay, mix(getLumafix(warningBase, baseColor), warningBase, 60), warningBase) };
	} else {
    return { warning: colorBlend(colorBlendModeFns.overlay, mix(getLumafix(warningBase, baseColor), warningBase, 50), white) };
  }
}

function getSuccess(baseColor, actionBase, reactionBase) {
	// success indicates that an action worked or a positive response came through
  // its green tells users they're good to go
  const green = turbo[105];
  const lightgreen = turbo[130];
  let successBase = green;
	if ( getDistance(green, actionBase) < 150 || getDistance(green, reactionBase) < 150) successBase = lightgreen;

	return { success: mix(getLumafix(successBase, baseColor, 50), successBase, 20) };
}

function getFailure(baseColor, actionBase, reactionBase) {
	// success's opposite and complement, failure's red tells the user something is wrong
	// good for negative server responses, missing info, or drawing attention to faults
  const red = turbo[225];
  const darkred = turbo[240];
  let failureBase = red;
	if ( getDistance(red, actionBase) < 100 || getDistance(red, reactionBase) < 100) failureBase = darkred;

	if (luma(...baseColor) > 0.5) {
    return { failure: getLumafix(failureBase, baseColor, 75) };
	}
  return { failure: getLumafix(failureBase, baseColor, 25) };
}

function getHighlight(baseColor) {
  // highlight is a bright color meant to evoke a highlighter and print text
	// depending on the base color, it can be cyan, magenta or yellow
  const magentaToMix = [255, 0, 255]
  const magenta = mix(turbo[222], magentaToMix, 60)
  const yellow = turbo[152];
  const cyan = turbo[73];
  const white = [255, 255, 255];
  let highlightBase = magenta;
	if (baseColor[0] > 85) highlightBase = yellow;
	else if (baseColor[0] > 170) highlightBase = cyan;

	if (luma(...baseColor) > 0.5) {
    return { highlight: colorBlend(colorBlendModeFns.overlay, getLumafix(highlightBase, baseColor, 33), white) };
	} else if (luma(...baseColor) > 0.9) {
    return { highlight: colorBlend(colorBlendModeFns.overlay, getLumafix(highlightBase, baseColor, 25), white) };
	}
  return { highlight: colorBlend(colorBlendModeFns.overlay, getLumafix(highlightBase, baseColor, 50), white) };
}

// * Temp
// .colorFromTPCSdotLess {
//   color: #4180DD; // baseColor
//   color: #3585fd; // action
//   color: #d99623; // reaction
//   color: #3dd448; // alternate
//   color: #0ceadb; // accent
//   color: #1c9ecd; // info
//   color: #3ee06b; // success
//   color: #e5e80e; // warning
//   color: #d93104; // failure
//   color: #ff61e9; // highlight
// }

// const scheme = getColorScheme('#4180DD');

// const htmlColorStrings = Object.keys(scheme).map((color) => {
//   // return `<span style="background-color: rgba(${scheme[color]}, 1)">${color}</span>`;
//   return `rgb(${scheme[color]}): ${color}`;
// });

