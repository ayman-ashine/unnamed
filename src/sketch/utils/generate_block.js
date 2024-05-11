import { MD5 } from "crypto-js"
import SETTINGS from "@/sketch/data/settings"

const UI_OBJECTS = {

    // empty
    "0": [

        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],

        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],

        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],

        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],

        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],

    ],

    "1": [

        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],

        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],

        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],

        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],

        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],

    ],

    "2": [

        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],

        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],

        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],

        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],

        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],

    ],

    // flower
    "11": [

        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],

        [0, 50, 0],
        [0, 50, 0],
        [0, 100, 0],
        [0, 50, 0],
        [0, 50, 0],

        [0, 50, 0],
        [0, 100, 0],
        [0, 200, 0],
        [0, 100, 0],
        [0, 50, 0],

        [0, 50, 0],
        [0, 50, 0],
        [0, 100, 0],
        [0, 50, 0],
        [0, 50, 0],

        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],

    ],

    // building block
    "111": [

        [0, 200, 0],
        [0, 200, 0],
        [0, 200, 0],
        [0, 200, 0],
        [0, 200, 0],

        [0, 200, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 200, 0],

        [0, 200, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 200, 0],

        [0, 200, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 200, 0],

        [0, 200, 0],
        [0, 200, 0],
        [0, 200, 0],
        [0, 200, 0],
        [0, 200, 0],

    ],

    // building
    "222": [

        [0, 50, 0],
        [50, 200, 0],
        [50, 200, 0],
        [50, 200, 0],
        [0, 50, 0],

        [50, 200, 0],
        [50, 200, 0],
        [50, 200, 0],
        [50, 200, 0],
        [50, 200, 0],

        [50, 200, 0],
        [50, 200, 0],
        [50, 200, 0],
        [50, 200, 0],
        [50, 200, 0],

        [50, 200, 0],
        [50, 200, 0],
        [0, 50, 0],
        [50, 200, 0],
        [50, 200, 0],

        [50, 200, 0],
        [50, 200, 0],
        [0, 50, 0],
        [50, 200, 0],
        [50, 200, 0],

    ],

    "2222": [

        [200, 150, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [200, 150, 0],

        [0, 50, 0],
        [200, 150, 0],
        [0, 50, 0],
        [200, 150, 0],
        [0, 50, 0],

        [0, 50, 0],
        [0, 50, 0],
        [200, 150, 0],
        [0, 50, 0],
        [0, 50, 0],

        [0, 50, 0],
        [200, 150, 0],
        [0, 50, 0],
        [200, 150, 0],
        [0, 50, 0],

        [200, 150, 0],
        [0, 50, 0],
        [0, 50, 0],
        [0, 50, 0],
        [200, 150, 0],

    ],

}

const COLORS = {
    '0': [0, 50, 0],
    '1': [0, 50, 0],
    '2': [0, 50, 0],
    '3': [0, 50, 0],
    '4': [0, 50, 0],
    '5': [0, 50, 0],
    '6': [0, 50, 0],
    '7': [0, 50, 0],
    '8': [0, 80, 0],
    '9': [0, 80, 0],
    'a': [0, 80, 0],
    'b': [0, 80, 0],
    'c': [0, 80, 0],
    'd': [0, 80, 0],
    'e': [0, 80, 0],
    'f': [0, 100, 0],
}

function generate_block(position) {

    let block = []

    const hash = String(MD5(`${position[0]}${position[1]}`))

    if (UI_OBJECTS[hash.slice(0, 4)]) block = UI_OBJECTS[hash.slice(0, 4)]
    else if (UI_OBJECTS[hash.slice(0, 3)]) block = UI_OBJECTS[hash.slice(0, 3)]
    else if (UI_OBJECTS[hash.slice(0, 2)]) block = UI_OBJECTS[hash.slice(0, 2)]
    else if (UI_OBJECTS[hash.slice(0, 1)]) block = UI_OBJECTS[hash.slice(0, 1)]
    else {
        const hash_slice = hash.slice(0, SETTINGS.CANVAS_BLOCK_GRID ** 2)
        for (let i = 0; i < hash_slice.length; i++) {
            block.push(COLORS[hash_slice[i]])
        }
    }

    return block
}

export default generate_block