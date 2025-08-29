const imageUpload = document.getElementById("imageUpload");
const preview = document.getElementById("preview");
const detectBtn = document.getElementById("detectBtn");
const result = document.getElementById("result");

let uploadedImage = null;

// Preview uploaded image
imageUpload.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = "block";
      uploadedImage = file;
    };
    reader.readAsDataURL(file);
  }
});

// Simulated disease detection
detectBtn.addEventListener("click", function () {
  if (!uploadedImage) {
    alert("Please upload an image first!");
    return;
  }

  // Fake prediction logic
  const diseases = [
    "Healthy Leaf 🌿",
    "Powdery Mildew ❄️",
    "Leaf Spot 🍂",
    "Rust Disease 🍁",
    "Blight ⚠️"
  ];
  const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];

  result.textContent = `Prediction: ${randomDisease}`;
  result.style.color = randomDisease.includes("Healthy") ? "green" : "red";
});
