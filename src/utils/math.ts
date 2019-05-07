/*
 * Filename: /Users/tonymedrano/Desktop/calculus-trigonmetry/src/utils/math.ts
 * Path: /Users/tonymedrano/Desktop/calculus-trigonmetry
 * Created Date: Tuesday, May 7th 2019, 10:22:13 am
 * Author: tonymedrano
 * 
 * Copyright (c) 2019 CALCULUS TYPESCRIPT PHYSICS by TONY MEDRANO
 */


const position = (centerX: number, centerY: number, angle: number, radius: number) => {
    const x = centerX + Math.cos(angle) * radius
    const y = centerY + Math.sin(angle) * radius

    const length = Math.sqrt(x * x + y * y)

    return {
        x,
        y,
        length
    }
}

const slope = (centerX: number, centerY: number, radius: number, angle: number) => {
    const x = centerX + radius * (Math.cos(angle))
    const y = centerY + radius * (Math.sin(angle))
    const dx = x - centerX
    const dy = y - centerY
    const m = dy / dx
    const perpM = -1 / m
    const tc = y - perpM * x
    for (let i = 0; i < (radius * 4); i++) {
        const lineY1 = perpM * i + tc
        const lineY2 = perpM * i - 1 + tc

        return {
            x: i, 
            y: lineY1, 
            x1: i - 1, 
            y2: lineY2,
            dx,
            dy,
            m,
            perpM,
            tc
        }
    }
}


export const math = {
    position,
    slope
}