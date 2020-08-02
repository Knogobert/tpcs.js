import {
  roundNumber,
  clamp$1,
  hexToRGB,
  RGBToHSL,
  hslToRGB,
} from './utils';

// Mix colors
// Copyright (c) 2006-2009 Hampton Catlin, Natalie Weizenbaum, and Chris Eppstein
// http://sass-lang.com
//
export function mix(color1, color2, weight) {
  // TODO: Alpha/transparency support
  if (!weight) weight = 50;
  const p = weight / 100.0;
  const w = p * 2 - 1;
  const aDiff = 0; // TODO: RGBtoHSL(...color1).a - RGBtoHSL(...color2).a;
  const w1 = (((w * aDiff == -1) ? w : (w + aDiff) / (1 + w * aDiff)) + 1) / 2.0;
  const w2 = 1 - w1;
  const rgb = [
    Math.round(color1[0] * w1 + color2[0] * w2),
    Math.round(color1[1] * w1 + color2[1] * w2),
    Math.round(color1[2] * w1 + color2[2] * w2)
  ];
  return rgb;
  // var rgb = [color1.rgb[0] * w1 + color2.rgb[0] * w2,
  //     color1.rgb[1] * w1 + color2.rgb[1] * w2,
  //     color1.rgb[2] * w1 + color2.rgb[2] * w2];
  // var alpha = color1.alpha * p + color2.alpha * (1 - p);
  // return new Color(rgb, alpha);
}

export function lighten(color, amount) {
  let hsl = RGBToHSL(...color);
  hsl[2] += amount / 100;
  hsl[2] = clamp$1(hsl[2]);
  // return hsla(color, hsl);
  return hslToRGB(...hsl)
}

export function darken(color, amount) {
  let hsl = RGBToHSL(...color);
  hsl[2] -= amount / 100;
  hsl[2] = clamp$1(hsl[2]);
  // return hsla(color, hsl);
  return hslToRGB(...hsl)
}

export function saturate(color, amount) {
  let hsl = RGBToHSL(...color);
  hsl[1] += amount / 100;
  hsl[1] = clamp$1(hsl[1]);
  // return hsla(color, hsl);
  return hslToRGB(...hsl)
}

export function desaturate(color, amount) {
  let hsl = RGBToHSL(...color);
  hsl[1] -= amount / 100;
  hsl[1] = clamp$1(hsl[1]);
  // return hsla(color, hsl);
  return hslToRGB(...hsl)
}

// Convert rgb into relative luminance (0-100) in percentage
// Just like http://lesscss.org/functions/#color-channel-luma
// Following the standardized formula from https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
export function luma(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  r = (r <= 0.03928) ? r / 12.92 : Math.pow(((r + 0.055) / 1.055), 2.4);
  g = (g <= 0.03928) ? g / 12.92 : Math.pow(((g + 0.055) / 1.055), 2.4);
  b = (b <= 0.03928) ? b / 12.92 : Math.pow(((b + 0.055) / 1.055), 2.4);

  return 0.2126 * r + 0.7152  * g + 0.0722  * b;
}

export function getLumafix(color, compare, strength = 100) {
  // gets lumafix of a version of color with luma similar to compare

  const iterations = 24;
  let tone = 'black';

  // tone keeps lumafix from flipping back and forth
  // between shading and tinting
  if (luma(...color) > luma(...compare)) tone = 'black';
  if (luma(...compare) >= luma(...color)) tone = 'white';

  const lumafix = (colorToFix, compare, index) => {
    if (index <= iterations && luma(...colorToFix) < luma(...compare) && tone === 'white') {
      const newColor = lighten(colorToFix, 0.5 * index);
      return lumafix(newColor, compare, index + 1);
    }
    if (index <= iterations && luma(...colorToFix) > luma(...compare) && tone === 'black') {
      const newColor = darken(colorToFix, 0.5 * index);
      return lumafix(newColor, compare, index + 1);
    }
    // ? lumafix(colorToFix, compare, index)

    return mix(color, colorToFix, (100 - strength));
  }

  return lumafix(color, compare, 1);
}

export function getDistance(color1, color2) {
  // sets variable distance to distance between two colors
  // distance is RGB space units

  // RGB space model isn't perfectly cubic, but instead
  // adjusted for human perception
  const rValuesAB = 2 * (color2[0] - color1[0]) * (color2[0] - color1[0]);
  const gValuesAB = 4 * (color2[1] - color1[1]) * (color2[1] - color1[1]);
  const bValuesAB = 3 * (color2[2] - color1[2]) * (color2[2] - color1[2]);

  return roundNumber(Math.sqrt(rValuesAB + gValuesAB + bValuesAB), 2);
}

export function getCloserFartherHue(compare, c1, c2) {
  // compares c1 and c2 to a given color, assigns a farther and closer
  // comparison is hue
  const compareHSL = RGBToHSL(...compare);
  const diffMC1 = Math.abs(compareHSL[0] - RGBToHSL(...c1)[0]);
  const diffMC2 = Math.abs(compareHSL[0] - RGBToHSL(...c2)[0]);

  if (diffMC2 > diffMC1) {
    return {
      closer: c1,
      farther: c2,
    };
  }
  return {
    closer: c2,
    farther: c1,
  };
}

export default {
  mix,
  lighten,
  darken,
  saturate,
  desaturate,
  luma,
  getLumafix,
  getDistance,
  getCloserFartherHue,
};
