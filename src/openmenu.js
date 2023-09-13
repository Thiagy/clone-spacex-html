var isOpen = false;
document.getElementById("box-menu").addEventListener("click", toggleMenu);

function toggleMenu(){

    const body = document.body;
    const backdrop = document.getElementById("backdrop");
    const openMenuButton = document.getElementById("openmenu");
    const littleBars = document.getElementsByClassName("little-bar");

    isOpen = !isOpen;

    if (isOpen) {
        openMenuButton.style.right = 0;
        body.style.overflow = "hidden";
        backdrop.style.display = "block";

        littleBars[0].style.position = "absolute";
        littleBars[0].style.bottom = "0";
        littleBars[0].style.transform = "rotate(45deg)";

        littleBars[1].style.display = "none";

        littleBars[2].style.position = "absolute";
        littleBars[2].style.transform = "rotate(-45deg)";
        littleBars[2].style.bottom = "0";
    } else {
        openMenuButton.style.right = "";
        body.style.overflow = "";
        backdrop.style.display = "";

        littleBars[0].style.position = "";
        littleBars[0].style.bottom = "";
        littleBars[0].style.transform = "";

        littleBars[1].style.display = "";

        littleBars[2].style.position = "";
        littleBars[2].style.transform = "";
        littleBars[2].style.bottom = "";
    }
}

