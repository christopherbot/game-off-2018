!function(t){function e(e){for(var o,n,a=e[0],h=e[1],l=e[2],c=0,d=[];c<a.length;c++)n=a[c],s[n]&&d.push(s[n][0]),s[n]=0;for(o in h)Object.prototype.hasOwnProperty.call(h,o)&&(t[o]=h[o]);for(u&&u(e);d.length;)d.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],o=!0,a=1;a<i.length;a++){var h=i[a];0!==s[h]&&(o=!1)}o&&(r.splice(e--,1),t=n(n.s=i[0]))}return t}var o={},s={0:0},r=[];function n(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=o,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var a=window.webpackJsonp=window.webpackJsonp||[],h=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=h;r.push([466,1]),i()}({1149:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),n=i(220),a=(o=n)&&o.__esModule?o:{default:o};var h=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,"title"))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.default),r(e,[{key:"drawProgressBar",value:function(){var t=this.add.text(this.middleX,this.middleY+50,"0%",{fontSize:"20px",fontFamily:"Avenir"}).setOrigin(.5),e=this.middleX-150,i=this.middleY,o=this.add.graphics({fillStyle:{color:2236962}}),s=this.add.graphics({fillStyle:{color:8311840}}),r=this.add.graphics({fillStyle:{color:11998999}}),n=this.add.graphics({fillStyle:{color:11998999}});n.fillRect(e+300,i-5,40,10),n.fillRect(e+300+40,i-15,10,10),n.fillRect(e+300+40,i+5,10,10),this.load.on("progress",function(n){t.setText(100*n+"%");var a=300*n;o.clear(),s.clear(),r.clear(),o.fillRect(e-10,i-25,a+20,50),s.fillRect(e,i-15,a,30),r.fillRect(e+a,i-5,300-a,10)}),this.load.on("complete",function(){t.destroy(),o.destroy(),s.destroy(),r.destroy(),n.destroy()})}},{key:"addGameTitle",value:function(){this.add.text(this.middleX,this.middleY-50,this.gameTitle.toUpperCase(),s({},this.textStyles,{fontSize:"175px",padding:10})).setOrigin(.5,.5).setShadow(2,2,"#FFF",20,!0,!0)}},{key:"addMenuPrompt",value:function(){this.menuPrompt=this.add.text(this.middleX,this.middleY+75,this.menuPromptText,s({},this.textStyles2,{fontSize:"20px",padding:10})).setOrigin(.5,0).setShadow(1,1,"#FFF",1,!0,!0),this.graphics=this.add.graphics({lineStyle:{color:9934743,width:2}}),this.graphics.strokeRoundedRect(this.menuPrompt.x-1.25*this.menuPrompt.width/2,this.menuPrompt.y,1.25*this.menuPrompt.width,this.menuPrompt.height,5)}},{key:"addSnakeAnimation",value:function(){this.snakeAnimation=this.add.sprite(this.middleX,this.snakeSpriteHeight,"snake").setScale(1.5),this.isSnakeMovingUp=!0,this.anims.create({key:"snakeDance",frames:this.anims.generateFrameNames("snake",{start:1,end:4}),frameRate:5,repeat:-1}),this.snakeAnimation.anims.play("snakeDance")}},{key:"moveSnake",value:function(t){this.snakeAnimation.x=Phaser.Math.Wrap(this.snakeAnimation.x-t/8,-45,this.gameWidth+45),this.isSnakeMovingUp?(this.snakeAnimation.y-=t/16,this.snakeAnimation.y<this.snakeSpriteHeight-30&&(this.isSnakeMovingUp=!1)):(this.snakeAnimation.y+=t/16,this.snakeAnimation.y>this.snakeSpriteHeight+30&&(this.isSnakeMovingUp=!0))}},{key:"handleKeyPress",value:function(){this.keyJustDown(this.keyM)&&this.toggleAudioMute(),this.keyJustDown(this.enterKey)&&this.scene.start("menu")}},{key:"preload",value:function(){this.load.spritesheet("snake","assets/snakeSprite.png",{frameWidth:56,frameHeight:14}),this.load.script("webfont","https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"),this.load.audio("simpleTheme","assets/audio/simpleTheme.ogg"),this.load.audio("complexTheme","assets/audio/complexTheme.ogg"),this.drawProgressBar()}},{key:"addText",value:function(){this.addGameTitle(),this.addMenuPrompt()}},{key:"create",value:function(){var t=this;this.loading=!0,this.sound.add("simpleTheme",{loop:!0}).play(),WebFont.load({google:{families:["Cabin","Press Start 2P"]},active:function(){t.loading=!1,t.addText(),t.addSnakeAnimation()}}),this.enterKey=this.addKey("ENTER"),this.keyM=this.addKey("M")}},{key:"update",value:function(t,e){this.loading||(this.moveSnake(e),this.handleKeyPress())}},{key:"menuPromptText",get:function(){return"hit [enter]"}},{key:"snakeSpriteHeight",get:function(){return this.gameHeight-70}}]),e}();e.default=h},1150:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},r=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),n=i(220),a=(o=n)&&o.__esModule?o:{default:o};function h(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}var l=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,"menu"))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.default),r(e,[{key:"createColorBoxes",value:function(t){var e=this;return this.colors.map(this.hexStringToColor).reduce(function(i,o,s){var r=e.add.rectangle(30*s+(e.colorBoxSpacing+t),29,e.colorBoxSize,e.colorBoxSize,o).setOrigin(0,0);return i.push(r),i},[])}},{key:"addPlayerSections",value:function(){this.player1Header=this.add.text(0,0,this.text.player1,this.textStyles2),this.player2Header=this.add.text(0,0,this.text.player2,this.textStyles2),this.chooseColor1Text=this.add.text(0,30,this.text.chooseColor,this.menuTextStyles),this.chooseColor2Text=this.add.text(0,30,this.text.chooseColor,this.menuTextStyles);var t=[this.player1Header,this.chooseColor1Text].concat(h(this.createColorBoxes(this.chooseColor1Text.width)),[this.add.image(0,70,"WASD").setOrigin(0,0),this.add.text(22,160,this.text.controls,this.menuTextStyles)]),e=[this.player2Header,this.chooseColor2Text].concat(h(this.createColorBoxes(this.chooseColor2Text.width)),[this.add.image(0,70,"arrowKeys").setOrigin(0,0),this.add.text(22,160,this.text.controls,this.menuTextStyles)]),i=function(t,e){return e.x+e.width>t&&(t=e.x+e.width),t},o=t.reduce(i,0),s=e.reduce(i,0),r=2*(this.middleX-o)/3,n=this.middleX+(this.middleX-s)/3;this.player1Container=this.add.container(r,100,t),this.player2Container=this.add.container(n,100,e),this.cursor1=new Phaser.Geom.Triangle.BuildEquilateral(this.player1Container.x+this.chooseColor1Text.width+this.colorBoxSpacing+this.colorBoxSize/2,this.player1Container.y+55,15),this.cursor2=new Phaser.Geom.Triangle.BuildEquilateral(this.player2Container.x+this.chooseColor2Text.width+this.colorBoxSpacing+this.colorBoxSize/2+30,this.player2Container.y+55,15),this.cursorGraphics=this.add.graphics({fillStyle:{color:16777215}}),this.cursorGraphics.fillTriangleShape(this.cursor1),this.cursorGraphics.fillTriangleShape(this.cursor2)}},{key:"addGameInstructions",value:function(){var t=this;this.add.text(this.middleX,350,this.text.gameInstructionsHeader,this.menuTextStyles).setOrigin(.5,0),this.text.instructions.forEach(function(e,i){return t.add.text(t.middleX,20*i+390,e,t.menuTextStyles).setOrigin(.5,0)})}},{key:"addGamePrompt",value:function(){this.gamePrompt=this.add.text(this.middleX,470,this.text.gamePrompt,s({},this.menuTextStyles,{padding:10})).setOrigin(.5,0),this.gamePromptGraphics=this.add.graphics({lineStyle:{color:9934743,width:2}}),this.gamePromptGraphics.strokeRoundedRect(this.gamePrompt.x-1.25*this.gamePrompt.width/2,this.gamePrompt.y,1.25*this.gamePrompt.width,this.gamePrompt.height,5)}},{key:"addAudioText",value:function(){return this.add.text(this.middleX,60,this.sound.mute?this.audioOffText:this.audioOnText,this.menuTextStyles).setOrigin(.5,0)}},{key:"handleKeyPress",value:function(){this.keyJustDown(this.enterKey)&&this.scene.start("game",{color1:this.colors[this.player1ColorIndex],color2:this.colors[this.player2ColorIndex]}),this.keyJustDown(this.keyM)&&this.toggleAudioMute(this.audioText),this.keyJustDown(this.keyD)&&(this.player1ColorIndex===this.colors.length-1?(this.player1ColorIndex=0,this.cursor1.left-=30*(this.colors.length-1)):(this.player1ColorIndex+=1,this.cursor1.left+=30)),this.keyJustDown(this.keyA)&&(0===this.player1ColorIndex?(this.player1ColorIndex=this.colors.length-1,this.cursor1.left+=30*(this.colors.length-1)):(this.player1ColorIndex-=1,this.cursor1.left-=30)),this.keyJustDown(this.cursors.right)&&(this.player2ColorIndex===this.colors.length-1?(this.player2ColorIndex=0,this.cursor2.left-=30*(this.colors.length-1)):(this.player2ColorIndex+=1,this.cursor2.left+=30)),this.keyJustDown(this.cursors.left)&&(0===this.player2ColorIndex?(this.player2ColorIndex=this.colors.length-1,this.cursor2.left+=30*(this.colors.length-1)):(this.player2ColorIndex-=1,this.cursor2.left-=30))}},{key:"changePlayerHeaderFills",value:function(){this.player1Header.setFill(""+this.colors[this.player1ColorIndex]),this.player2Header.setFill(""+this.colors[this.player2ColorIndex]),this.cursorGraphics.clear(),this.cursorGraphics.fillTriangleShape(this.cursor1),this.cursorGraphics.fillTriangleShape(this.cursor2)}},{key:"preload",value:function(){this.load.image("WASD","assets/WASD.png"),this.load.image("arrowKeys","assets/arrowKeys.png")}},{key:"create",value:function(){this.addSmallGameTitle(),this.addPlayerSections(),this.addGameInstructions(),this.addGamePrompt(),this.audioText=this.addAudioText(),this.cursors=this.createCursorKeys(),this.keyW=this.addKey("W"),this.keyA=this.addKey("A"),this.keyS=this.addKey("S"),this.keyD=this.addKey("D"),this.keyM=this.addKey("M"),this.enterKey=this.addKey("ENTER"),this.player1ColorIndex=0,this.player2ColorIndex=1}},{key:"update",value:function(){this.handleKeyPress(),this.changePlayerHeaderFills()}},{key:"colors",get:function(){return["#DF1A2D","#0798BB","#F8E71C","#7ED321"]}},{key:"text",get:function(){return{player1:"Player 1",player2:"Player 2",chooseColor:"Choose Colour:",controls:"Controls",gameInstructionsHeader:"Game Instructions",instructions:["- Player score +1 when opponent fails to return ball"],gamePrompt:"hit [enter]"}}},{key:"colorBoxSize",get:function(){return 20}},{key:"colorBoxSpacing",get:function(){return 8}},{key:"menuTextStyles",get:function(){return s({},this.textStyles2,{fontSize:"12px"})}}]),e}();e.default=l},1151:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},s=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),r=h(i(220)),n=h(i(1152)),a=h(i(1153));function h(t){return t&&t.__esModule?t:{default:t}}var l=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,"game"))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.default),s(e,[{key:"drawCourtBoundaries",value:function(){var t=new Phaser.Geom.Line(0,this.courtTop,this.gameWidth,this.courtTop),e=new Phaser.Geom.Line(0,this.gameHeight-1,this.gameWidth,this.gameHeight-1),i=new Phaser.Geom.Line(this.middleX,this.courtTop+1,this.middleX,this.gameHeight-2),o=this.add.graphics({lineStyle:{color:16777215}});o.strokeLineShape(t),o.strokeLineShape(e),o.strokeLineShape(i)}},{key:"createScoreDisplay",value:function(t,e){return this.add.text(this.middleX+t,this.middleY+this.courtTop/2,e,o({},this.textStyles2,{fontSize:"40px"})).setOrigin(.5,.5)}},{key:"createFoodScoreDisplay",value:function(t,e,i){return this.add.text(this.middleX+t,this.courtTop/2,e,{fontFamily:"'Press Start 2P'",fontSize:"20px"}).setOrigin(.5,.5).setTint(i)}},{key:"initScores",value:function(){this.score1Display=this.createScoreDisplay(-35,this.score1),this.score2Display=this.createScoreDisplay(40,this.score2),this.foodScore2Display=this.createFoodScoreDisplay(.85*this.middleX,this.food2.total,this.color2),this.foodScore1Display=this.createFoodScoreDisplay(-.85*this.middleX,this.food1.total,this.color1)}},{key:"updateScore1",value:function(){this.score1+=1,!this.isScore1DoubleDigits&&this.score1.toString().length>1&&(this.isScore1DoubleDigits=!0,this.score1Display.x-=15),!this.isScore1TripleDigits&&this.score1.toString().length>2&&(this.isScore1TripleDigits=!0,this.score1Display.x-=20),this.score1Display.setText(this.score1)}},{key:"updateScore2",value:function(){this.score2+=1,!this.isScore2DoubleDigits&&this.score2.toString().length>1&&(this.isScore2DoubleDigits=!0,this.score2Display.x+=15),!this.isScore2TripleDigits&&this.score2.toString().length>2&&(this.isScore2TripleDigits=!0,this.score2Display.x+=20),this.score2Display.setText(this.score2)}},{key:"updateFoodScore1",value:function(){this.foodScore1Display.setText(this.food1.total)}},{key:"updateFoodScore2",value:function(){this.foodScore2Display.setText(this.food2.total)}},{key:"resetBall",value:function(t){var e=this;this.ball.setVelocity(0),this.ball.x=this.middleX,this.ball.y=this.middleY+this.courtTop/2,setTimeout(function(){return e.ball.setVelocity(t*e.ballStartingVelocity,e.ballStartingVelocity)},1e3)}},{key:"handleKeyPress",value:function(){this.keyJustDown(this.keyM)&&this.toggleAudioMute(this.audioText),this.keyJustDown(this.keyD)?this.snake1.goRight():this.keyJustDown(this.keyA)?this.snake1.goLeft():this.keyJustDown(this.keyW)?this.snake1.goUp():this.keyJustDown(this.keyS)&&this.snake1.goDown(),this.keyJustDown(this.cursors.right)?this.snake2.goRight():this.keyJustDown(this.cursors.left)?this.snake2.goLeft():this.keyJustDown(this.cursors.up)?this.snake2.goUp():this.keyJustDown(this.cursors.down)&&this.snake2.goDown()}},{key:"addAudioText",value:function(){return this.add.text(1.5*this.middleX,this.courtTop/2,this.sound.mute?this.audioOffText:this.audioOnText,o({},this.textStyles2,{fontSize:"12px"})).setOrigin(.5,.5)}},{key:"changeMusicTheme",value:function(){var t=this.sound.add("complexTheme",{loop:!0}),e=this.sound.sounds.find(function(t){return"simpleTheme"===t.key}),i=e.seek;this.tweens.add({targets:e,volume:{getStart:function(){return 1},getEnd:function(){return 0}},duration:1e3,ease:"Linear",onComplete:function(){return e.stop()}}),this.tweens.add({targets:t,onStart:function(){return t.play({seek:i})},volume:{getStart:function(){return 0},getEnd:function(){return 1}},duration:1e3,ease:"Linear"})}},{key:"preload",value:function(){this.load.image("body","assets/body.png"),this.score1=0,this.score2=0,this.isScore1DoubleDigits=!1,this.isScore2DoubleDigits=!1,this.isScore1TripleDigits=!1,this.isScore2TripleDigits=!1,this.ballStartingVelocity=150,this.ballVelocityMultiplier=1.1}},{key:"hitBall",value:function(t,e,i){var o=this,s=e.body.velocity,r=s.x,n=s.y;if(0!==r||0!==n){var a=function(t){return t*o.ballVelocityMultiplier};e.setVelocity(Phaser.Math.Between(r,a(r)),Phaser.Math.Between(n,a(n))),i.setTint(16777215),setTimeout(function(){return i.setTint(t.color)},100)}}},{key:"create",value:function(t){this.changeMusicTheme(),this.physics.world.setBounds(0,this.courtTop,this.gameWidth,this.gameHeight-this.courtTop),this.physics.world.setBoundsCollision(!1,!1,!0,!0),this.color1=this.hexStringToColor(t.color1),this.color2=this.hexStringToColor(t.color2),this.addSmallGameTitle(),this.drawCourtBoundaries(),this.audioText=this.addAudioText(),this.cursors=this.createCursorKeys(),this.keyW=this.addKey("W"),this.keyA=this.addKey("A"),this.keyS=this.addKey("S"),this.keyD=this.addKey("D"),this.keyM=this.addKey("M"),this.snake1=new n.default(this,10,10,{color:this.color1,bounds:this.player1Bounds}),this.snake2=new n.default(this,30,10,{color:this.color2,bounds:this.player2Bounds}),this.food1=new a.default(this,10,20,{color:this.color1,bounds:this.player1Bounds}),this.food2=new a.default(this,30,20,{color:this.color2,bounds:this.player2Bounds}),this.initScores(),this.ball=this.physics.add.image(400,200,"body").setCollideWorldBounds(!0).setScale(1.6).setBounce(1).setVelocity(this.ballStartingVelocity),this.physics.add.collider(this.ball,this.snake1.body,this.hitBall.bind(this,this.snake1),null,this),this.physics.add.collider(this.ball,this.snake2.body,this.hitBall.bind(this,this.snake2),null,this)}},{key:"update",value:function(t){this.handleKeyPress(),this.snake1.update(t)&&(this.snake1.handleOverlapSelf(),this.snake1.handleOverlapFood(this.food1)&&(this.food1.eat(),this.updateFoodScore1())),this.snake2.update(t)&&(this.snake2.handleOverlapSelf(),this.snake2.handleOverlapFood(this.food2)&&(this.food2.eat(),this.updateFoodScore2())),this.ball.x<0&&(this.updateScore2(),this.resetBall(1)),this.ball.x>this.gameWidth&&(this.updateScore1(),this.resetBall(-1))}},{key:"courtTop",get:function(){return 64}},{key:"player1Bounds",get:function(){return{top:this.courtTop,right:this.middleX,bottom:this.gameHeight,left:0}}},{key:"player2Bounds",get:function(){return{top:this.courtTop,right:this.gameWidth,bottom:this.gameHeight,left:this.middleX}}}]),e}();e.default=l},1152:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},s=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}();var r="DOWN",n=function(){function t(e,i,s){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.scene=e;var a=this.scene.textures.get("body").getSourceImage().width;n=o({},{bounds:{},color:9878822,size:16,movesPerSecond:12},n),this.bounds=n.bounds,this.color=n.color,this.size=n.size,this.movesPerSecond=n.movesPerSecond,this.scale=this.size/a,this.headPosition=new Phaser.Geom.Point(i,s),this.tail=new Phaser.Geom.Point(i,s),this.body=this.scene.physics.add.group({immovable:!0}),this.head=this.body.create(i*this.size,s*this.size,"body").setScale(this.scale).setOrigin(0).setTint(this.color),this.nextUpdateTime=0,this.direction=r,this.nextDirection=r}return s(t,[{key:"goLeft",value:function(){"UP"!==this.direction&&this.direction!==r||(this.nextDirection="LEFT")}},{key:"goRight",value:function(){"UP"!==this.direction&&this.direction!==r||(this.nextDirection="RIGHT")}},{key:"goUp",value:function(){"LEFT"!==this.direction&&"RIGHT"!==this.direction||(this.nextDirection="UP")}},{key:"goDown",value:function(){"LEFT"!==this.direction&&"RIGHT"!==this.direction||(this.nextDirection=r)}},{key:"wrapVerticalPosition",value:function(t){return Phaser.Math.Wrap(t,this.bounds.top/this.size,this.bounds.bottom/this.size)}},{key:"wrapHorizontalPosition",value:function(t){return Phaser.Math.Wrap(t,this.bounds.left/this.size,this.bounds.right/this.size)}},{key:"move",value:function(t){switch(this.nextDirection){case"UP":this.headPosition.y=this.wrapVerticalPosition(this.headPosition.y-1);break;case r:this.headPosition.y=this.wrapVerticalPosition(this.headPosition.y+1);break;case"LEFT":this.headPosition.x=this.wrapHorizontalPosition(this.headPosition.x-1);break;case"RIGHT":this.headPosition.x=this.wrapHorizontalPosition(this.headPosition.x+1)}return this.direction=this.nextDirection,Phaser.Actions.ShiftPosition(this.body.getChildren(),this.headPosition.x*this.size,this.headPosition.y*this.size,1,this.tail),this.nextUpdateTime=t+1e3/this.movesPerSecond,!0}},{key:"overlapsWith",value:function(t){return!!t&&(this.head.x===t.x&&this.head.y===t.y)}},{key:"handleOverlapSelf",value:function(){var t=this,e=[],i=!1;return this.body.children.each(function(o,s){0!==s&&(i?(t.body.remove(o),e.push(o)):t.overlapsWith(o)&&(i=!0,t.body.remove(o),e.push(o)))}),e.forEach(function(e,i){var o=20*i;t.scene.tweens.add({targets:e,alpha:0,ease:"Sine.easeInOut",duration:300,delay:o}),t.scene.time.addEvent({delay:300+o,callback:e.destroy,loop:!1})}),e.length}},{key:"handleOverlapFood",value:function(t){if(this.overlapsWith(t))return this.grow()}},{key:"grow",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return[].concat(function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}(Array(e))).forEach(function(){t.body.create(t.tail.x,t.tail.y,"body").setScale(t.scale).setOrigin(0).setTint(t.color)}),!0}},{key:"update",value:function(t){if(t>=this.nextUpdateTime)return this.move(t)}}]),t}();e.default=n},1153:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},s=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}();var r=function(t){function e(t,i,s){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,s));n.scene=t,Phaser.GameObjects.Image.call(n,n.scene);r=o({},{bounds:{},color:16777215,size:16},r);var a=n.scene.textures.get("body").getSourceImage().width;return n.color=r.color,n.bounds=r.bounds,n.size=r.size,n.scale=n.size/a,n.setTexture("body"),n.setPosition(i*n.size,s*n.size),n.setScale(n.scale),n.setOrigin(0),n.setTint(n.color),n.setAlpha(.9),n.total=0,n.scene.children.add(n),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,Phaser.GameObjects.Image),s(e,[{key:"reposition",value:function(t,e){t=t||Phaser.Math.Between(this.bounds.left/this.size,this.bounds.right/this.size-1),e=e||Phaser.Math.Between(this.bounds.top/this.size,this.bounds.bottom/this.size-1),this.setPosition(t*this.size,e*this.size)}},{key:"eat",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.total+=t,this.reposition()}}]),e}();e.default=r},1154:function(t,e,i){var o=i(1155);"string"==typeof o&&(o=[[t.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};i(1157)(o,s);o.locals&&(t.exports=o.locals)},1155:function(t,e,i){(t.exports=i(1156)(!1)).push([t.i,"body {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  padding: 50px;\n  background-color: #352c35;\n}\n\ncanvas {\n  border: 10px solid black;\n}\n",""])},220:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},s=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}();var r=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,Phaser.Scene),s(e,[{key:"toggleAudioMute",value:function(t){var e=!this.sound.mute;this.sound.setMute(e),t&&t.setText(e?this.audioOffText:this.audioOnText)}},{key:"addSmallGameTitle",value:function(t,e){this.add.text(t||this.middleX,e||0,this.gameTitle.toUpperCase(),o({},this.textStyles,{fontSize:"40px",padding:10})).setOrigin(.5,0).setShadow(1,1,"#FFF",10,!0,!0)}},{key:"createCursorKeys",value:function(){return this.input.keyboard.createCursorKeys()}},{key:"addKey",value:function(t){return this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes[t])}},{key:"keyJustDown",value:function(t){return Phaser.Input.Keyboard.JustDown(t)}},{key:"hexStringToColor",value:function(t){return t.startsWith("#")?Phaser.Display.Color.HexStringToColor(t).color:(console.warn("[hexStringToColor]: "+t+" is not a valid hex string."),t)}},{key:"gameTitle",get:function(){return"Ouro"}},{key:"gameWidth",get:function(){return this.sys.game.config.width}},{key:"gameHeight",get:function(){return this.sys.game.config.height}},{key:"middleX",get:function(){return this.gameWidth/2}},{key:"middleY",get:function(){return this.gameHeight/2}},{key:"audioOnText",get:function(){return"audio: on [m]"}},{key:"audioOffText",get:function(){return"audio: off [m]"}},{key:"textStyles",get:function(){return{fontFamily:"Cabin",color:"#F6FEFF"}}},{key:"textStyles2",get:function(){return{fontFamily:"'Press Start 2P'",color:"#32EEF8"}}}]),e}();e.default=r},466:function(t,e,i){"use strict";i(467);var o=n(i(1149)),s=n(i(1150)),r=n(i(1151));function n(t){return t&&t.__esModule?t:{default:t}}i(1154);var a={width:800,height:560,backgroundColor:"#072C40",physics:{default:"arcade"},scene:[o.default,s.default,r.default]};new Phaser.Game(a)}});