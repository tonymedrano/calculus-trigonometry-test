/*
 * Filename: /Users/tonymedrano/Desktop/canvas-typescript-physics/src/app.ts
 * Path: /Users/tonymedrano/Desktop/canvas-typescript-physics
 * Created Date: Tuesday, February 27th 2018, 6:30:22 am
 * Author: tonymedrano
 * 
 * Copyright (c) 2019 CALCULUS TYPESCRIPT PHYSICS by TONY MEDRANO
 */

import {
  getRandomColor,
  colors,
  math,
  easing,
  base,
  background,
  monitor
} from './utils'

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

  sinewave.run(ctx, angle * 200)

  const setting: any = math.slope(centerX, centerY, radius, angle, (position: any) => {
    base.line(ctx, position.x0, position.y0, position.x1, position.y1, colors.black)
  })

  const general = {
    centerX,
    centerY,
    angle,
    radius,
    pos,
    pos2,
    setting
  }

  monitor.general(ctx, general)
  monitor.tangent(ctx, general.setting)

  //. Update everything! ---->
  angle += speed

  requestAnimationFrame(_update)

}
_update()