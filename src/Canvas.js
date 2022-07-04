
import React from 'react'
import useCanvas from './hooks/useCanvas'
const blockinpixels = 300;

function resizeCanvas(canvas) {
    const { width, height } = canvas.getBoundingClientRect()

    if (canvas.width !== width || canvas.height !== height) {
        const { devicePixelRatio: ratio = 1 } = window
        const context = canvas.getContext('2d')
        canvas.width = width * ratio
        canvas.height = height * ratio
        return true
    }

    return false
}
function resizeCanvasToDisplaySize(canvas) {

    const { width, height } = canvas.getBoundingClientRect()
    console.log('resize', width + ' ' + height)
    console.log('resize canvas', canvas.width + ' ' + canvas.height)
    return true
    if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
        return true // here you can return some usefull information like delta width and delta height instead of just true
        // this information can be used in the next redraw...
    }

    return false
}

const Canvas = props => {
    const _postdraw = (context, index) => {
        index++
        context.restore()
    }

    const _predraw = (context, canvas) => {
        context.save()
        /*resizeCanvasToDisplaySize(canvas)*/
        const { width, height } = context.canvas
        context.clearRect(0, 0, width, height)
    }
    const _init = (canvas) => {
        resizeCanvas(canvas)
    }

    const { draw, init = _init, predraw = _predraw, postdraw = _postdraw, context = '2d', ...rest } = props
    const canvasRef = useCanvas(draw, { init, predraw, postdraw, context })

    return (
        <canvas ref={canvasRef} {...rest} />
    )
}

export default Canvas