// will handle color flipping logic
const btn = document.getElementById("flipBtn");
const colorText = document.getElementById("color-value");

const colors = [
  "#f44336",
  "#2196f3",
  "#4caf50",
  "#ff9800",
  "#9c27b0"
];

btn.addEventListener("click", () => {
  const index = Math.floor(Math.random() * colors.length);
  const selectedColor = colors[index];
  
  document.body.style.backgroundColor = selectedColor;
  colorText.textContent = selectedColor;
});
