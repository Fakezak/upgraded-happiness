window.onload = function () {
  const uid = localStorage.getItem("uid");
  if (uid) {
    document.getElementById("userUid").textContent = uid;
  } else {
    window.location.href = "index.html";
  }
};

function applyMods() {
  alert("Mods applied visually! (Simulation only)");
}
