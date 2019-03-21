
window.onload = () => {
    const progressBar = document.getElementById("progress")
    const secondTypeOfProgressBars = document.getElementsByClassName("second-type-of-progress-bars")

    toggle = (isSecondTypeOfProgressBar) => {
        if (isSecondTypeOfProgressBar) {
            for (i = 0; i <= 2; i++) {
                secondTypeOfProgressBars[i].style.width = random(30) + "%";
            }
        } else {
            progressBar.style.width = random(100) + "%";
        }
    }

    random = (constraint) => {
        return Math.floor(Math.random() * constraint);
    }
}
