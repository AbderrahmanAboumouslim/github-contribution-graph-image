const columns = Array.from(
  document.querySelectorAll(".js-calendar-graph > svg > g > g")
).map((group) => Array.from(group.querySelectorAll("rect")));

const img = new Image();
img.src = "../bitcoin.jfif";
img.onload = () => {
  console.log(img.width);
};

columns.forEach((c, x) =>
  c.forEach((rect, y) => (rect.style.fill = Color(interpolator(0.5)).hex()))
);
