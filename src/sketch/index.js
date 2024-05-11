import SETTINGS from "./data/settings"
import NPC from "./class/npc"
import GROUND from "./class/ground"
import BLOCK from "./class/block"

const sketch = (p) => {

    // var _NPC = new NPC(p)
    var _CONTROLS = {
        left: false,
        right: false,
        top: false,
        bottom: false
    }
    var _GROUND = new GROUND(p)
    //var _BLOCK = new BLOCK(p, [90, 90])

    // function setupPlayers(){
    //     let list = []
    //     for(let i=0; i<10; i++){
    //         list.push(new NPC(p))
    //     }
    //     return list
    // }

    p.setup = () => {
        p.createCanvas(
            SETTINGS.CANVAS_WIDTH,
            SETTINGS.CANVAS_HEIGHT
        )
        p.angleMode(p.DEGREES)
    }

    p.draw = () => {
        p.background(SETTINGS.CANVAS_COLOR)
        _GROUND.update()
        // _NPC.update()
        //_BLOCK.update()
    }

    p.keyPressed = () => {
        if (p.key === 'a') _CONTROLS.left = true
        else _CONTROLS.left = false
        if (p.key === 'd') _CONTROLS.right = true
        else _CONTROLS.right = false
        if (p.key === 'w') _CONTROLS.top = true
        else _CONTROLS.top = false
        if (p.key === 's') _CONTROLS.bottom = true
        else _CONTROLS.bottom = false
    }

}

export default sketch