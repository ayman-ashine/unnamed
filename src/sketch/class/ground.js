import SETTINGS from "@/sketch/data/settings"
import generate_block from "@/sketch/utils/generate_block"
import CONTROLS from "@/sketch/class/controls";

class BLOCK {

    constructor(p, position) {
        this.p = p
        this.position = position
        this.size = Math.floor(SETTINGS.CANVAS_BLOCK_SIZE / SETTINGS.CANVAS_BLOCK_GRID)
        this.blocks = generate_block(this.position)
    }

    update() {
        this.#draw()
    }

    #draw() {
        let index = 0
        this.p.noStroke()

        for (let row = 0; row < SETTINGS.CANVAS_BLOCK_GRID; row++) {
            for (let col = 0; col < SETTINGS.CANVAS_BLOCK_GRID; col++) {
                this.p.fill(this.blocks[index++])
                this.p.rect(
                    this.position[0] + this.size * col,
                    this.position[1] + this.size * row,
                    this.size
                )
            }
        }
    }

}

class GROUND {

    constructor(p) {
        this.p = p
        this.position = {
            current: [0, 0],
            previous: [0, 0]
        }
        this.size = SETTINGS.CANVAS_BLOCK_SIZE
        this.speed = SETTINGS.CANVAS_BLOCK_SIZE / SETTINGS.CANVAS_BLOCK_GRID
        this.blocks = []
        this.render_range = {
            rows: [
                -1,
                Math.floor(SETTINGS.CANVAS_WIDTH / SETTINGS.CANVAS_BLOCK_SIZE) + 1
            ],
            cols: [
                -1,
                Math.floor(SETTINGS.CANVAS_HEIGHT / SETTINGS.CANVAS_BLOCK_SIZE) + 1
            ]
        }
        this.controls = new CONTROLS()
        this.#generate_blocks()
    }

    update() {
        this.#draw()
        this.#generate_ground()
        this.#move()
    }

    #draw() {
        this.p.push()
        this.p.translate(this.position.current[0], this.position.current[1])
        this.blocks.map(b => b.update())
        this.p.pop()
    }

    #move() {
        if (this.controls.left) this.position.current[0] += this.speed
        if (this.controls.right) this.position.current[0] -= this.speed
        if (this.controls.top) this.position.current[1] += this.speed
        if (this.controls.bottom) this.position.current[1] -= this.speed
    }

    #generate_ground() {

        let x_difference = this.position.current[0] - this.position.previous[0]
        let y_difference = this.position.current[1] - this.position.previous[1]

        if (Math.abs(x_difference) >= this.size) {
            if (x_difference < 0) {
                this.render_range.rows[0]++
                this.render_range.rows[1]++
            } else if (x_difference > 0) {
                this.render_range.rows[0]--
                this.render_range.rows[1]--
            }
            this.position.previous[0] = this.position.current[0]
        }

        if (Math.abs(y_difference) >= this.size) {
            if (y_difference < 0) {
                this.render_range.cols[0]++
                this.render_range.cols[1]++
            } else if (y_difference > 0) {
                this.render_range.cols[0]--
                this.render_range.cols[1]--
            }
            this.position.previous[1] = this.position.current[1]
        }

        if (
            Math.abs(x_difference) >= this.size ||
            Math.abs(y_difference) >= this.size
        ) this.#generate_blocks()

    }

    #generate_blocks() {
        this.blocks = []
        for (let row = this.render_range.rows[0]; row < this.render_range.rows[1]; row++) {
            for (let col = this.render_range.cols[0]; col < this.render_range.cols[1]; col++) {
                this.blocks.push(new BLOCK(this.p, [row * this.size, col * this.size]))
            }
        }
    }

}

export default GROUND