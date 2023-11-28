import { colors } from "./fifty-shades-of-cold.data.js"

export function generateClasses() {
    const styletag = document.createElement('style');

    let backstyles = '';

    colors.forEach(function (color) {
        const backstyle = `.${color} { background: ${color}; }`;
        backstyles += backstyle;
    });

    styletag.innerHTML = backstyles;

    document.head.appendChild(styletag);
}

export function generateColdShades() {
    const body = document.getElementsByTagName("body")[0];

    colors.forEach(function(color) {
        if (color.match(/(aqua|blue|turquoise|green|cyan|navy|purple)/) !== null) {
            const div = document.createElement("div");
            div.classList.add(color);
            div.innerHTML = color;
            body.appendChild(div);
        }
    });
}


export function choseShade(shade) {  
    const divElements = document.querySelectorAll('div');

    divElements.forEach(function (div) {
        div.className = '';
        div.classList.add(shade);
    });
}
