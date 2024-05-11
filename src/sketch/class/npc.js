// import SETTINGS from "../data/settings"
// import Controls from "./controls"

// class NPC {

//     constructor(p, neuralNetwork) {

//         this.p = p
//         //this.neuralNetwork = neuralNetwork
//         this.diametre = Math.floor(SETTINGS.CANVAS_GRID / 2)
//         this.x = Math.floor(SETTINGS.CANVAS_WIDTH / 2)
//         this.y = Math.floor(SETTINGS.CANVAS_HEIGHT / 2)
//         this.sensoDiametre = this.diametre * 20
//         this.angle = 0
//         this.speed = 0
//         this.maxSpeed = 4
//         this.rotationSpeed = 0
//         this.maxRotationSpeed = 2
//         this.acceleration = 0.2
//         this.friction = 0.08
//         this.controls = new Controls()
//         this.color = SETTINGS.CANVAS_SECOND_COLOR

//     }

//     update() {

//         this.#draw()
//         this.#move()

//     }

//     #draw() {

//         this.p.push()

//         // base circle
//         this.p.translate(Math.floor(SETTINGS.CANVAS_WIDTH / 2), Math.floor(SETTINGS.CANVAS_HEIGHT / 2))
//         this.p.rotate(-this.angle)
//         this.p.noStroke()
//         this.p.fill(this.color)
//         this.p.circle(0, 0, this.diametre)

//         // sensor area
//         this.p.fill([...this.color, 20])
//         this.p.circle(0, 0, this.sensoDiametre)

//         // Temp
//         this.p.stroke(SETTINGS.CANVAS_COLOR)
//         this.p.strokeWeight(2)
//         this.p.line(0, 0, 0, -this.diametre / 2)

//         this.p.pop()

//     }

//     #move() {

//         if (this.controls.left) this.rotationSpeed += this.acceleration
//         if (this.controls.right) this.rotationSpeed -= this.acceleration

//         if (this.rotationSpeed > 0) this.rotationSpeed -= this.friction
//         if (this.rotationSpeed < 0) this.rotationSpeed += this.friction
//         if (Math.abs(this.rotationSpeed) <= this.friction) this.rotationSpeed = 0

//         if (this.rotationSpeed > this.maxRotationSpeed) this.rotationSpeed = this.maxRotationSpeed
//         if (this.rotationSpeed < -this.maxRotationSpeed) this.rotationSpeed = -this.maxRotationSpeed

//         this.angle += this.speed ? this.rotationSpeed : 0

//         // forward and backword
//         if (this.controls.forward) this.speed += this.acceleration
//         if (this.controls.backward) this.speed -= this.acceleration

//         // slow down
//         if (this.speed > 0) this.speed -= this.friction
//         if (this.speed < 0) this.speed += this.friction
//         if (Math.abs(this.speed) <= this.friction) this.speed = 0

//         // max speed
//         if (this.speed > this.maxSpeed) this.speed = this.maxSpeed
//         if (this.speed < -this.maxSpeed) this.speed = -this.maxSpeed

//         //this.x += this.speed
//         //let temp = [this.x, this.y]
//         this.x -= Math.sin((this.angle * Math.PI) / 180) * this.speed
//         this.y -= Math.cos((this.angle * Math.PI) / 180) * this.speed

//         // if (this.#checkCollision()) {
//         //     [this.x, this.y] = temp
//         // }
//     }

//     #shoot() {

//     }

// }

// export default NPC