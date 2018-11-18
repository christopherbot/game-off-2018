import Snake from '../snake'

export default class Game extends Phaser.Scene {
  constructor() {
    super('game')
  }

  get gameWidth() {
    return this.sys.game.config.width
  }

  get gameHeight() {
    return this.sys.game.config.height
  }

  get middleX() {
    return this.gameWidth / 2
  }

  get middleY() {
    return this.gameHeight / 2
  }

  preload() {
    this.load.image('body', 'assets/body.png')
  }

  create() {
    this.add.text(this.middleX, 20, 'Game').setOrigin(0.5, 0)
    this.snake = new Snake(this, 10, 20)

    let movements = ['goRight', 'goDown', 'goLeft', 'goUp']

    const loopSnake = () => {
      movements.push(movements.splice(0, 1)[0])
      this.snake[movements[0]]()
    }

    this.time.addEvent({ delay: 500, callback: loopSnake, loop: true })
  }

  update(time) {
    this.snake.update(time)
  }
}