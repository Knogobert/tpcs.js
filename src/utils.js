// * Utility mixins
// many of these are "borrowed" from Strapless (http://strapless.io)
// some are from https://css-tricks.com/converting-color-spaces-in-javascript/
// And some are straight outta https://github.com/less/less.js/blob/master/dist/less.js
// I kinda wished I thought of using less.js straight up earlier

export const roundNumber = (number, decimals = 0) => Number(
  // @ts-ignore
  (`${Math.round(`${number}e${decimals}`)}e-${decimals}`),
);

export function clamp$1(val) {
  return Math.min(1, Math.max(0, val));
}

export function hexToRGB(h) {
  let r = 0;
  let g = 0;
  let b = 0;

  if (h.length === 4) {
    // 3 digits
    r = Number(`0x${h[1]}${h[1]}`);
    g = Number(`0x${h[2]}${h[2]}`);
    b = Number(`0x${h[3]}${h[3]}`);
  } else if (h.length === 7) {
    // 6 digits
    r = Number(`0x${h[1]}${h[2]}`);
    g = Number(`0x${h[3]}${h[4]}`);
    b = Number(`0x${h[5]}${h[6]}`);
  }

  return [r, g, b];
}

export function RGBToHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  // const a = alpha;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h;
  let s;
  let l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      }
    h /= 6;
  }
  // return { h: h * 360, s: s, l: l, a: a };
  return [h * 360, s, l];
}

/**
 * hslToRGB
 *
 * Adapted from: http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
 * By https://github.com/micro-js/hsl-to-rgb/blob/master/lib/index.js
 */
export function hslToRGB (h, s, l) {
  // Achromatic
  if (s === 0) return [l, l, l]
  h /= 360

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s
  const p = 2 * l - q

  return [
    Math.round(hueToRGB(p, q, h + 1/3) * 255),
    Math.round(hueToRGB(p, q, h) * 255),
    Math.round(hueToRGB(p, q, h - 1/3) * 255)
  ]
}

export function hueToRGB (p, q, t) {
  if (t < 0) t += 1
  if (t > 1) t -= 1
  if (t < 1/6) return p + (q - p) * 6 * t
  if (t < 1/2) return q
  if (t < 2/3) return p + (q - p) * (2/3 - t) * 6
  return p
}

export default {
  roundNumber,
  clamp$1,
  hexToRGB,
  RGBToHSL,
  hslToRGB,
  hueToRGB,
};
