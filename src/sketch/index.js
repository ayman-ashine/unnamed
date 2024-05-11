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

const setup_sketch = () => {
    const p5 = require("p5")
    return new p5(sketch)
}

export default setup_sketch