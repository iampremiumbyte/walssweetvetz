
const styleBoxes = () => {

    Array(3).fill(0).forEach((_, i) => {
        const box = document.getElementById(`box${i + 1}`);

        const area = document.getElementById(`area${i + 1}`);

        const coords = area.coords.split(",");

        box.style.width = (Math.abs(coords[0] - coords[2])) + "px"
        box.style.height = (Math.abs(coords[1] - coords[3])) + "px"
        box.style.left = Number(coords[0]) + "px"
        box.style.top = Number(coords[1]) + "px"
    });

}

setInterval(() => {
    styleBoxes();
}, 2000)

