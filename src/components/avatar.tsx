import React from "react";

function itoh(i: number): string {
  const hexString = "0123456789ABCDEF";
  return `${hexString[Math.floor(i / 16)]}${hexString[i % 16]}`;
}
function rgbToHex([r, g, b]: [number, number, number]): string {
  return `#${itoh(r)}${itoh(g)}${itoh(b)}`;
}

function hslToRgb([h, s, l]: [number, number, number]): [
  number,
  number,
  number
] {
  const C = (1 - Math.abs(2 * (l / 100) - 1)) * (s / 100);
  const X = C * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l / 100 - C / 2;
  const rgbMap = [
    [C, X, 0],
    [X, C, 0],
    [0, C, X],
    [0, X, C],
    [X, 0, C],
    [C, 0, X],
  ];
  const [r, g, b] = rgbMap[Math.floor(h / 60)];
  const a: [number, number, number] = [
    Math.floor((r + m) * 255),
    Math.floor((g + m) * 255),
    Math.floor((b + m) * 255),
  ];
  return a;
}

function mapToRange(
  input: number,
  [i1, i2]: [number, number],
  [o1, o2]: [number, number]
): number {
  return ((input - i1) / (i2 - i1)) * (o2 - o1) + o1;
}

function pseudoRandom(name: string) {
  let acc = 0;
  for (let i = 0; i < name.length; ++i) {
    acc += (i + 16) * (name.toUpperCase().charCodeAt(i) - 64);
    acc = Math.abs(acc);
    acc %= 1000;
  }
  return acc;
}

function colorFromString(name: string) {
  const hRange: [number, number] = [0, 360];
  const sRange: [number, number] = [50, 85];
  const lRange: [number, number] = [50, 75];

  const r = pseudoRandom(name);
  const h = mapToRange(r, [0, 1000], hRange);
  const s = mapToRange(r, [0, 1000], sRange);
  const l = mapToRange(r, [0, 1000], lRange);

  const a = rgbToHex(hslToRgb([h, s, l]));
  console.log(a);
  return a;
}

function abbrevName(name: string) {
  return (
    name
      .split(" ")
      .reduce((acc, next) => acc + (next.length ? next[0] : ""), "")
      .toUpperCase() || "?"
  );
}
export function Avatar({
  uri,
  name,
  size,
}: {
  uri?: string | null;
  name?: string | null;
  size?: number;
}) {
  if (!uri) {
    const fullName = name || "?";
    return (
      <div
        className="avatar"
        style={{
          backgroundColor: colorFromString(fullName),
          width: size,
          height: size,
          fontSize: size ? `${0.4 * size}pt` : undefined,
        }}
      >
        {abbrevName(fullName)}
      </div>
    );
  }
  return (
    <img
      className="avatar"
      alt="Profile Avatar"
      style={{
        width: size,
        height: size,
        fontSize: size ? `${0.4 * size}pt` : undefined,
      }}
      src={uri}
    ></img>
  );
}
