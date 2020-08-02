
// Color Blending
// ref: http://www.w3.org/TR/compositing-1
export function colorBlend(mode, color1, color2) {
  // TODO: alpha/transparency
  const ab = 1; // color1.alpha; // result
  const as = 1; // color2.alpha;
  let cb; // backdrop
  let cs;// source
  let ar;
  let cr;
  const r = [];

  ar = as + ab * (1 - as);
  for (let i = 0; i < 3; i++) {
      cb = color1[i] / 255;
      cs = color2[i] / 255;
      cr = mode(cb, cs);
      if (ar) {
          cr = (as * cs + ab * (cb -
              as * (cb + cs - cr))) / ar;
      }
      // r[i] = cr * 255;
      r[i] = Math.round(cr * 255);
  }
  // return new Color(r, ar);
  return r;
}

export const colorBlendModeFns = {
  multiply: function (cb, cs) { return cb * cs; },
  screen: function (cb, cs) { return cb + cs - cb * cs; },
  overlay: function (cb, cs) {
    cb *= 2;
    return (cb <= 1)
      ? colorBlendModeFns.multiply(cb, cs)
      : colorBlendModeFns.screen(cb - 1, cs);
  },
  softlight: function (cb, cs) {
    let d = 1;
    let e = cb;
    if (cs > 0.5) {
      e = 1;
      d = (cb > 0.25)
        ? Math.sqrt(cb)
        : ((16 * cb - 12) * cb + 4) * cb;
    }
    return cb - (1 - 2 * cs) * e * (d - cb);
  },
  hardlight: function (cb, cs) { return colorBlendModeFns.overlay(cs, cb); },
  difference: function (cb, cs) { return Math.abs(cb - cs); },
  exclusion: function (cb, cs) { return cb + cs - 2 * cb * cs; },
};

export default {
  colorBlend,
  colorBlendModeFns,
};
