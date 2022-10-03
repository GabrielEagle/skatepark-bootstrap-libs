function animate() {
    var animateList = document.querySelectorAll(".animate__animated");

    for (var i = 0; i < animateList.length; i++) {
        var windowsHeight = window.innerHeight;
        var elementTop = animateList[i].getBoundingClientRect().top
        var elementVisible = 10;

        if (elementTop < windowsHeight - elementVisible) {
            animateList[i].classList.add("animate__fadeInLeft");
        } else {
            animateList[i].classList.remove("animate__fadeInLeft");
        }
    }
}

animate();

window.addEventListener("scroll", animate);