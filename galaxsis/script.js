
function checkPassword() {
    let password = document.querySelector('#password').value;
    if (password === "1234") {
      window.location.href = 'hello.html';
    } else {
      alert('Incorrect password. Please try again.');
    }
}


document.getElementById("downloadButton").addEventListener("click", function() {
  const link = document.createElement("a");
  link.href = "file.txt";
  link.download = "file.txt";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});



