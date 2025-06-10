window.addEventListener("DOMContentLoaded", () => {
    fetch("components/header.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("home-header").innerHTML = data;
    });

    fetch("components/footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("home-footer").innerHTML = data;
    });
});