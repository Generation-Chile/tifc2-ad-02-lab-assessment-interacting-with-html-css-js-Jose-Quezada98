
document.querySelectorAll("h1").forEach(element => {
  element.textContent = "Adiós"; 
});
document. querySelectorAll("h2").style.color="orange"; 
document.getElementById("clickable-header").onclick = function() {
  this.style.color = "brown";
};
document.querySelectorAll("h2").forEach(element => {
  element.style.color = "orange"; 
});
document.getElementById("ultimo encabezado").onclick = function() {
  this.style.color = "brown";
};