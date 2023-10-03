var isOpen = false;
document.getElementById("box-menu").addEventListener("click", toggleMenu);
//Função que permite abrir o menu
function toggleMenu() {
    const body = document.body;
    const backdrop = document.getElementById("backdrop");
    const openMenuButton = document.getElementById("openmenu");
    const littleBars = document.querySelectorAll(".little-bar");

    isOpen = !isOpen;

    openMenuButton.style.right = isOpen ? 0 : "";
    body.style.overflow = isOpen ? "hidden" : "";
    backdrop.style.display = isOpen ? "block" : "";

    for (let i = 0; i < littleBars.length; i++) {
        const bar = littleBars[i];
        if (isOpen) {
            bar.style.position = "absolute";
            bar.style.bottom = "0";
            bar.style.transform = i === 0 ? "rotate(45deg)" : i === 2 ? "rotate(-45deg)" : "";
            if (i === 1) {
                bar.style.display = "none";
            }
        } else {
            bar.style.position = "";
            bar.style.bottom = "";
            bar.style.transform = "";
            if (i === 1) {
                bar.style.display = "";
            }
        }
    }
}
