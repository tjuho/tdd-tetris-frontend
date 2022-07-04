import { useRef, useEffect } from 'react'

const useCanvas = (draw, options = {}) => {

    const canvasRef = useRef(null)

    useEffect(() => {

        let canvas = canvasRef.current
        canvas.width = 300
        canvas.height = 600
        /*options.init(canvas)*/
        let context = canvas.getContext(options.context || '2d')
        let frameCount = 0
        let animationFrameId
        const render = () => {
            frameCount++
            /*options.predraw(context, canvas)*/
            const { width, height } = context.canvas
            context.clearRect(0, 0, width, height)
            draw(context, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
            /*options.postdraw(context, frameCount)*/
        }
        render()
        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])
    return canvasRef
}
export default useCanvas