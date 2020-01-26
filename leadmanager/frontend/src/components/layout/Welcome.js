import React, { Component, useCallback, useRef } from 'react'
import KeyImage from '../../../images/django-react.svg'
import SVG from 'react-inlinesvg';
import { useSpring, animated, interpolate } from 'react-spring'



function WelcomeAnimation() {
    const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))
    const interpBg = xy.interpolate((x, y) => `perspective(800px) rotateY(${x / 60}deg) rotateX(${-y / 60}deg)`)
    const interpLogo = xy.interpolate((x, y) => `perspective(200px) rotateY(${x / 30}deg) rotateX(${-y / 30}deg)`)
    const interpTitle = xy.interpolate((x, y) => `perspective(800px) rotateY(${x / 60}deg) rotateX(${-y / 60}deg) translateY(200px)`)
    const onMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }), [])
    return (
        <div className="h-100" onMouseMove={onMove}>
            <div className="d-flex position-relative justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <animated.div className="position-absolute bg-welcome" style={{ zIndex: '-1', transform: interpBg }}></animated.div>
                <animated.div className="position-absolute" style={{ height: '250px', width: '250px', transform: interpLogo }}>
                    <div className="rounded-circle bg-light"><SVG src={KeyImage} width="100%" height="100%" /></div>
                </animated.div>
                <animated.div className="position-absolute" style={{ transform: interpTitle }}>
                    <h1 className="text-center text-light font-bebas"><strong>Django + React</strong></h1>
                </animated.div>
            </div>
            <div className="h-100 d-flex position-relative content-height" style={{ background: '#222' }}>
                <div className="position-absolute row w-100 h-100">

                </div>
            </div>
        </div>
    )
}

export class Welcome extends Component {
    render() {
        return (
            <WelcomeAnimation />
        )
    }
}

export default Welcome
