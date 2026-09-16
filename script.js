function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

document.querySelectorAll("#navLinks a").forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("navLinks").classList.remove("show");
    });
});
