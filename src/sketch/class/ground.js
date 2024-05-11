import SETTINGS from "../data/settings"
import BLOCK from "./block";
import CONTROLS from "./controls";

class GROUND {

    constructor(p) {
        this.p = p
        this.position = [0, 0]
        this.stock_position = [0, 0]
        this.blocks = []
        this.size = SETTINGS.CANVAS_GRID
        this.speed = 10
        this.render_range = {
            rows: [
                -1,
                Math.floor(SETTINGS.CANVAS_WIDTH / SETTINGS.CANVAS_GRID) + 1
            ],
            cols: [
                -1,
                Math.floor(SETTINGS.CANVAS_HEIGHT / SETTINGS.CANVAS_GRID) + 1
            ]
        }
        this.controls = new CONTROLS()
        this.#generate_blocks()
    }

    update() {
        this.#generate_ground()
        this.#draw()
        this.#move()
    }

    #draw() {
        this.p.push()
        this.p.translate(this.position[0], this.position[1])
        this.blocks.map(b => b.update())
        this.p.pop()
    }

    #move() {
        if (this.controls.left) this.position[0] += this.speed
        if (this.controls.right) this.position[0] -= this.speed
        if (this.controls.top) this.position[1] += this.speed
        if (this.controls.bottom) this.position[1] -= this.speed
    }

    #generate_ground() {

        let x_difference = this.position[0] - this.stock_position[0]
        let y_difference = this.position[1] - this.stock_position[1]

        if (Math.abs(x_difference) >= this.size) {
            if (x_difference < 0) {
                this.render_range.rows[0]++
                this.render_range.rows[1]++
            } else if (x_difference > 0) {
                this.render_range.rows[0]--
                this.render_range.rows[1]--
            }
            this.stock_position[0] = this.position[0]
        }

        if (Math.abs(y_difference) >= this.size) {
            if (y_difference < 0) {
                this.render_range.cols[0]++
                this.render_range.cols[1]++
            } else if (y_difference > 0) {
                this.render_range.cols[0]--
                this.render_range.cols[1]--
            }
            this.stock_position[1] = this.position[1]
        }

        if (
            Math.abs(x_difference) >= this.size ||
            Math.abs(y_difference) >= this.size
        ) this.#generate_blocks()

    }

    #generate_blocks () {
        this.blocks = []
        for (let row = this.render_range.rows[0]; row < this.render_range.rows[1]; row++) {
            for (let col = this.render_range.cols[0]; col < this.render_range.cols[1]; col++) {
                let position = [
                    row * this.size,
                    col * this.size
                ]
                this.blocks.push(new BLOCK(this.p, position))
            }
        }
    }
    

}

export default GROUND