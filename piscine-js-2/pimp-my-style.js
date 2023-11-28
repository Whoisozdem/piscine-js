import { styles } from "./pimp-my-style.data.js";

let index = 0;
let unpump = false;

export function pimp() {
    const button = document.querySelector("button.button");

    if (!unpump) {
        if (index < styles.length) {
            button.classList.add(styles[index]);
            index++;
        } else {
            unpump = true;
            index--;
            const classfin = styles[index];
            button.classList.remove(classfin);
        }
    } else {
        if (index >= 0) {
            const classfin = styles[index];
            button.classList.remove(classfin);
            index--;
        } else {
            unpump = false;
        }
    }
    button.classList.toggle("unpimp", unpump);
}
