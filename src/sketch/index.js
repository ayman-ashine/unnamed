"use client"

import p5 from "p5"
import SETTINGS from "@/sketch/data/settings"
import GROUND from "@/sketch/class/ground"

const sketch = (p) => {

    var _GROUND = new GROUND(p)
    // var _NPC = new NPC(p)

    p.setup = () => {
        p.createCanvas(
            SETTINGS.CANVAS_WIDTH,
            SETTINGS.CANVAS_HEIGHT
        )
        p.angleMode(p.DEGREES)
    }

    p.draw = () => {
        p.background([0, 0, 0])
        _GROUND.update()
        // _NPC.update()
    }

}

export default new p5(sketch)