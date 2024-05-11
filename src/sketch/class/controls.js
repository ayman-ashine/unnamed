class CONTROLS {
    constructor() {

        this.left = false;
        this.right = false;
        this.top = false;
        this.bottom = false;

        this.#addKeyboardListeners();
    }

    #addKeyboardListeners() {
        document.onkeydown = (event) => {
            switch (event.code) {
                case "KeyA":
                    this.left = true;
                    break;
                case "KeyD":
                    this.right = true;
                    break;
                case "KeyW":
                    this.top = true;
                    break;
                case "KeyS":
                    this.bottom = true;
                    break;
            }
        }
        document.onkeyup = (event) => {
            switch (event.code) {
                case "KeyA":
                    this.left = false;
                    break;
                case "KeyD":
                    this.right = false;
                    break;
                case "KeyW":
                    this.top = false;
                    break;
                case "KeyS":
                    this.bottom = false;
            }
        }
    }
}

export default CONTROLS