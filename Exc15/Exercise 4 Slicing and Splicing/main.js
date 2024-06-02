const colors = ["red", "blue", "green", "yellow", "purple"];

const sliceColors = colors.slice(0, 3);
console.log(sliceColors);

const spliceColors = colors.splice(-2, 2, "pink", "orange");
console.log(colors);