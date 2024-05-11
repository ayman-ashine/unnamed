import { MD5 } from "crypto-js"
import SETTINGS from "../data/settings"

class BLOCK {

    constructor(p, position = [0, 0]) {
        this.p = p
        this.position = position
        this.grid = 3
        this.size = SETTINGS.CANVAS_BLOCK_GRID
        this.block = []
        this.colors = {
            '0': [0, 0, 0],
            '1': [0, 0, 0],
            '2': [0, 0, 0],
            '3': [0, 0, 0],
            '4': [0, 0, 0],
            '5': [0, 0, 0],
            '6': [0, 0, 0],
            '7': [0, 0, 0],
            '8': [0, 50, 0],
            '9': [0, 50, 0],
            'a': [0, 50, 0],
            'b': [0, 50, 0],
            'c': [0, 50, 0],
            'd': [0, 50, 0],
            'e': [0, 50, 0],
            'f': [0, 50, 0],
        }
        this.special_colors = {
            'fff': [

                [0, 200, 0, 100],
                [0, 200, 0],
                [0, 200, 0, 100],

                [0, 200, 0],
                [0, 200, 0],
                [0, 200, 0],

                [0, 200, 0, 100],
                [0, 200, 0],
                [0, 200, 0, 100],

            ],
            'eee': [
                [255, 255, 0, 100],
                [255, 255, 0],
                [255, 255, 0, 100],

                [255, 255, 0],
                [255, 255, 0],
                [255, 255, 0],

                [255, 255, 0, 100],
                [255, 255, 0],
                [255, 255, 0, 100],
            ],
            // 'dddd': [
            //     [0, 0, 255],
            //     [0, 0, 255],
            //     [0, 0, 255],
            //     [0, 0, 255],
            // ],
            // 'cccc': [
            //     [255, 255, 0],
            //     [255, 255, 0],
            //     [255, 255, 0],
            //     [255, 255, 0],
            // ],
            // 'bbbb': [
            //     [0, 255, 255],
            //     [0, 255, 255],
            //     [0, 255, 255],
            //     [0, 255, 255],
            // ],
            // 'aaaa': [
            //     [255, 0, 255],
            //     [255, 0, 255],
            //     [255, 0, 255],
            //     [255, 0, 255],
            // ],
        }
        this.#generate_block()
    }

    update() {
        this.#draw()
    }

    #draw() {
        let index = 0
        for (let row = 0; row < this.grid; row++) {
            for (let col = 0; col < this.grid; col++) {
                this.p.noStroke()
                this.p.fill(this.block[index])
                this.p.rect(
                    this.position[0] + this.size * col,
                    this.position[1] + this.size * row,
                    this.size
                )
                index++
            }
        }
    }

    #generate_block() {
        this.block = []
        const hash = String(MD5(`${this.position[0]}${this.position[1]}`))
        const hash_slice = hash.slice(0, this.grid ** 2)

        const print = hash.slice(0, 3)

        if (this.special_colors[print]) {
            this.block = this.special_colors[print]
        } else for (let i = 0; i < hash_slice.length; i++) {
            this.block.push(this.colors[hash_slice[i]])
        }
    }

}

export default BLOCK