/*
 * Filename: /Users/tonymedrano/Desktop/canvas-typescript-physics/src/app.ts
 * Path: /Users/tonymedrano/Desktop/canvas-typescript-physics
 * Created Date: Tuesday, February 27th 2018, 6:30:22 am
 * Author: tonymedrano
 * 
 * Copyright (c) 2019 CALCULUS TYPESCRIPT PHYSICS by TONY MEDRANO
 */

import { getRandomColor, colors, math, easing, base, background } from './utils'

import { sinewave } from "./sine-wave"
import { loop } from "./neon-effect"

//. Create element --->
const canvas: HTMLCanvasElement = document.createElement('canvas')
canvas.id = 'calculus-trigonometry'
canvas.width = window.innerWidth
canvas.height = window.innerHeight
document.body.appendChild(canvas)

//. Create context ---->
const ctx: any = canvas.getContext('2d')
const width: number = canvas.width
const height: number = canvas.height

//. Settings ---->
const centerY: number = height * .5
const centerX: number = width * .5
const radius: number = centerX * .75
let speed: number = 0.01
let angle: number = 0

let xAxis = Math.floor(height/2);
   let yAxis = Math.floor(width/4);
   let unit: number = 60

//. Render ---->
const _update = () => {

  //. Clear canvas ----->
  base.clear(ctx, width, height)
  background(ctx, 15, 45, colors.orchid, colors.black, colors.aquamarine)

  //. Sin/Cos --->
  const pos: any = math.position(centerX, centerY, angle, radius)
  const pos2: any = math.position(pos.x, pos.y, angle * 5, radius * .2)

  //. Basic scheme
  base.basic(ctx, centerX, centerY, radius, pos, colors)

  ctx.save()
  ctx.beginPath()
  ctx.strokeStyle = colors.purple
  ctx.arc(pos2.x, pos2.y, 10, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.restore()

  sinewave.run(ctx, angle * 200)

  const setting: any = math.slope(centerX, centerY, radius, angle, (position: any) => {
    base.line(ctx, position.x0, position.y0, position.x1, position.y1, colors.black)
  })

  let x = yAxis+unit*Math.cos(angle);
  let y = xAxis+unit*Math.sin(angle);

    for (let i = yAxis; i <= width; i += .5) {
      x = angle+(-yAxis+i)/unit;
      y = Math.sin(pos.x);
      base.line(ctx, centerX, centerY, i, unit*y+xAxis, getRandomColor())
  }

  base.dot(ctx, setting.x + setting.m, setting.y + setting.m, 8, colors.black)

  const textLeft = 20
  ctx.save()
  ctx.font = '20px Consolas'
  ctx.fillText('Ceneral Setting: ', textLeft, 40)
  ctx.fillText('-----------------', textLeft, 55)
  ctx.fillText('centerX: ' + centerX, textLeft, 80)
  ctx.fillText('centerY: ' + centerY, textLeft, 100)
  ctx.fillText('angle: ' + angle, textLeft, 120)
  ctx.fillText('radius: ' + radius, textLeft, 140)
  ctx.fillText(`pos1: x = ${pos.x},  y = ${pos.y}`, textLeft, 160)
  ctx.fillText(`pos2: x = ${pos2.x},  y = ${pos2.y}`, textLeft, 180)
  ctx.fillText('ctx: ' + setting.tc, textLeft, 200)
  ctx.restore()

  ctx.save()
  ctx.font = '20px Consolas'
  ctx.fillText('Tangent Line: ', textLeft, 240)
  ctx.fillText('-----------------', textLeft, 255)
  ctx.fillText('x: ' + setting.x, textLeft, 280)
  ctx.fillText('y: ' + setting.y, textLeft, 300)
  ctx.fillText('dx: ' + setting.dx, textLeft, 320)
  ctx.fillText('dy: ' + setting.dy, textLeft, 340)
  ctx.fillText('m: ' + setting.m, textLeft, 360)
  ctx.fillText('perp m: ' + setting.perpM, textLeft, 380)
  ctx.fillText('ctx: ' + setting.tc, textLeft, 400)
  ctx.restore()

  //. Update everything! ---->
  angle += speed

  requestAnimationFrame(_update)

}
_update()