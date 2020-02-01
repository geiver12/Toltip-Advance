const icon = document.querySelector('#icon');
const tooltip = document.querySelector('#tooltip');

const CalculePositionTooltip = () => {
    const x = icon.offsetLeft;
    const y = icon.offsetTop;

    const WidthTooltip = tooltip.clientWidth;
    const HeightTooltip = tooltip.clientHeight;

    const left = x - (WidthTooltip / 2) + 15;
    const top = y - HeightTooltip - 20;

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
};

window.addEventListener('load', () => {
    CalculePositionTooltip();
});

window.addEventListener('resize', () => {
    CalculePositionTooltip();
});

icon.addEventListener('mouseenter', () => {
    tooltip.classList.add('active');
    CalculePositionTooltip();
});

let timer;
icon.addEventListener('mouseleave', () => {
    timer = setTimeout(() => {
        tooltip.classList.remove('active');
    }, 500);
});

tooltip.addEventListener('mouseenter', () => clearTimeout(timer));

tooltip.addEventListener('mouseleave', () => {
    tooltip.classList.remove('active');

});

const log = document.getElementById('log');

document.addEventListener('keypress', logKey);

function logKey(e) {
    console.log(e.code);
    const x = icon.offsetLeft;
    const y = icon.offsetTop;
    var number = 0;
    if (e.code === 'KeyD') {
        icon.style.color = "#000";
        number = x + 10;
        icon.style.left = String(number) + "px";
    }
    if (e.code === 'KeyA') {
        icon.style.color = "yellow";
        number = x - 10;
        icon.style.left = String(number) + "px";
    }
    if (e.code === 'KeyW') {
        icon.style.color = "pink";
        number = y - 10;
        icon.style.top = String(number) + "px";
    }
    if (e.code === 'KeyS') {
        icon.style.color = "blue";
        number = y + 10;
        icon.style.top = String(number) + "px";
    }
}