
document.getElementById("joinButton").addEventListener("click", function() {
  window.open("https://ab-webl.vercel.app", "_blank");
  

  setTimeout(function() {
    window.location.href = "unban.html";
  }, 1000); 
});

document.getElementById("cancelButton").addEventListener("click", function() {

  showSadNotification();


  setTimeout(function() {
    window.location.href = "unban.html";
  }, 3000); 
});


function showSadNotification() {
  const sadNotification = document.getElementById("sadNotification");
  sadNotification.style.display = "block";


  setTimeout(function() {
    sadNotification.style.display = "none";
  }, 3000);
}
