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
  ctx.arc(angle * 20, easing.linear(pos2.y / .5), 10, 0, 2 * Math.PI)
  ctx.stroke()
  ctx.restore()
  
  const tan = math.slope(pos.x, pos.y, radius, angle)

  base.line(ctx, tan.x, tan.y, tan.x2, tan.y2)

  const textLeft = 40
  ctx.save()
  ctx.font = '20px Consolas'
  ctx.fillText('Tangent Line: ', textLeft, 50)
  ctx.fillText('-----------------', textLeft, 65)
  ctx.fillText('x: ' + tan.x, textLeft, 100)
  ctx.fillText('y: ' + tan.y, textLeft, 120)
  ctx.fillText('dx: ' + tan.dx, textLeft, 140)
  ctx.fillText('dy: ' + tan.dy, textLeft, 160)
  ctx.fillText('m: ' + tan.m, textLeft, 180)
  ctx.fillText('perp m: ' + tan.perpM, textLeft, 200)
  ctx.fillText('ctx: ' + tan.tc, textLeft, 220)
  ctx.restore()

  sinewave.run(ctx, angle*200)
  //loop(ctx, width)

  /*   ctx.font = "20px Arial"
    ctx.fillText(`Line length: ${tangent.toFixed()}`, 10, 50) */

  //. Update everything! ---->
  angle += speed
  if (angle > Math.PI * 2) angle = 0

  requestAnimationFrame(_update)

}
_update()