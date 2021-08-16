export function uuid(len, radix) {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  radix = radix || chars.length;
  let uuid = [];
  if (len) {
    uuid = new Array(len).fill(0).map(() => {
      return chars[0 | (Math.random() * radix)];
    });
  } else {
    len = 36;
    uuid = new Array(len).fill(0).map((e, i) => {
      const r = 0 | (Math.random() * 16);
      return chars[i == 19 ? (r & 0x3) | 0x8 : r];
    });
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
    uuid[14] = "4";
  }
  return uuid.join("");
}
