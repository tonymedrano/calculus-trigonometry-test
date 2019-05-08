const showAxes = (ctx:any) => {
    let width = ctx.canvas.width
    let height = ctx.canvas.height
    let xMin = 0
    
    ctx.beginPath()
    ctx.strokeStyle = "rgb(128,128,128)"
    
    // X-Axis
    ctx.moveTo(xMin, height/2)
    ctx.lineTo(width, height/2)
    
    // Y-Axis
    ctx.moveTo(width/2, 0)
    ctx.lineTo(width/2, height)

    // Starting line
    ctx.moveTo(0, 0)
    ctx.lineTo(0, height)
    
    ctx.stroke()
}

const drawPoint = (ctx:any, y:any) => {            
    let radius = 3
    ctx.beginPath()

    // Hold x constant at 4 so the point only moves up and down.
    ctx.arc(4, y, radius, 0, 2 * Math.PI, false)

    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.lineWidth = 1
    ctx.stroke()
}

const plotSine = (ctx:any, xOffset:any, yOffset:any) => {
    let width = ctx.canvas.width
    let height = ctx.canvas.height

    ctx.beginPath()
    ctx.lineWidth = 2
    ctx.strokeStyle = "rgb(66,44,255)"

    // console.log("Drawing point...")
    // drawPoint(ctx, yOffset+step)
    
    let x = 4
    let y = 0
    const amplitude = 40
    const frequency = 20
    ctx.moveTo(x, 50)
    while (x < width) {
        y = height/2 + amplitude * Math.sin((x+xOffset)/frequency)
        ctx.lineTo(x, y)
        x++
        // console.log("x="+x+" y="+y)
    }
    ctx.stroke()
    ctx.save()
    console.log("Drawing point at y=" + y)
    drawPoint(ctx, y)
    ctx.stroke()
    ctx.restore()
}

const run = (ctx:any, angle: any) => {
    showAxes(ctx)
    ctx.save()            
    plotSine(ctx, angle, 50)
    ctx.restore()
}

export const sinewave = {
    run
}