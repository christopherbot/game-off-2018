import BaseScene from './baseScene'

export default class Loading extends BaseScene {
  constructor(props) {
    super('loading')
  }

  drawProgressBar() {
    const progressText = this.add.text(
      this.middleX,
      this.middleY + 50,
      '0%',
      {
        fontSize: '20px',
        fontFamily: 'Avenir', // use a font that doesn't need to be loaded
      },
    ).setOrigin(0.5)

    // draw a progress bar that looks like a growing snake
    const width = 300
    const height = 30
    const outlineWidth = 10
    const tongueHeight = 10
    const tongueTipLength = 40

    const x = this.middleX - width / 2
    const y = this.middleY

    const outlineColor = 0x222222
    const bodyColor = 0x7ed420
    const tongueColor = 0xb71717

    const outline = this.add.graphics({ fillStyle: { color: outlineColor } })
    const body = this.add.graphics({ fillStyle: { color: bodyColor } })
    const tongue = this.add.graphics({ fillStyle: { color: tongueColor } })
    const tongueTip = this.add.graphics({ fillStyle: { color: tongueColor } })

    tongueTip.fillRect(x + width, y - tongueHeight / 2, tongueTipLength, tongueHeight)
    tongueTip.fillRect(x + width + tongueTipLength, y - 1.5 * tongueHeight, tongueHeight, tongueHeight)
    tongueTip.fillRect(x + width + tongueTipLength, y + 0.5 * tongueHeight, tongueHeight, tongueHeight)

    this.load.on('progress', (value) => {
      const percent = Math.round(value * 100)
      progressText.setText(`${percent}%`)

      const newWidth = width * value

      outline.clear()
      body.clear()
      tongue.clear()

      outline.fillRect(
        x - outlineWidth,
        y - (height / 2 + outlineWidth),
        newWidth + 2 * outlineWidth,
        height + 2 * outlineWidth,
      )

      body.fillRect(x, y - height / 2, newWidth, height)

      tongue.fillRect(x + newWidth, y - tongueHeight / 2, width - newWidth, tongueHeight)
    })

    this.load.on('complete', () => {
      progressText.destroy()
      outline.destroy()
      body.destroy()
      tongue.destroy()
      tongueTip.destroy()
    })
  }

  preload() {
    this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js')

    this.load.audio('simpleTheme', 'assets/audio/simpleTheme.ogg')
    this.load.audio('complexTheme', 'assets/audio/complexTheme.ogg')

    this.load.spritesheet('snake', 'assets/snakeSprite.png', { frameWidth: 56, frameHeight: 14 })

    this.load.image('WASD', 'assets/WASD.png')
    this.load.image('arrowKeys', 'assets/arrowKeys.png')
    this.load.image('body', 'assets/body.png')

    this.drawProgressBar()

    this.loading = true
  }

  create() {
    const simpleTheme = this.sound.add('simpleTheme', { loop: true })
    simpleTheme.play()

    WebFont.load({
      google: {
        families: ['Cabin', 'Press Start 2P']
      },
      active: () => {
        // Finish "loading" here instead of load.on('complete')
        // because this takes a little bit longer.
        this.loading = false
      },
    })
  }

  update() {
    if (this.loading) {
      return
    }

    this.scene.start('title')
  }
}