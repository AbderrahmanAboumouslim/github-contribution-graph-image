const columns = Array.from(
  document.querySelectorAll(".js-calendar-graph > svg > g > g")
).map((group) => Array.from(group.querySelectorAll("rect")));

const img = new Image();
// image pixel's width should be equals to the x squares of github graph (53 square)
img.src = "../bitcoin.jfif";
img.onload = () => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.drawImage(img, 0, 0);

  let offSet = 0;
  setInterval(() => {
    columns.forEach((c, x) =>
      c.forEach((rect, y) => {
        const pixel = context.getImageData(x, y + offSet, 1, 1);
        rect.style.fill = `rgba(${pixel.data})`;
      })
    );

    offSet += 1;
    if (offSet + 7 > img.height) offSet = 0;
  }, 100);
};
