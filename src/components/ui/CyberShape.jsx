
import React from 'react';

const CyberShape = () => {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-40">
            <div className="cube-wrapper">
                <div className="cube">
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face right"></div>
                    <div className="face left"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                </div>
                <div className="cube inner">
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face right"></div>
                    <div className="face left"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                </div>
            </div>

            <style jsx>{`
                .cube-wrapper {
                    width: 300px;
                    height: 300px;
                    perspective: 1000px;
                }
                .cube {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    transform-style: preserve-3d;
                    animation: rotate 20s infinite linear;
                }
                .cube.inner {
                    width: 50%;
                    height: 50%;
                    top: 25%;
                    left: 25%;
                    animation: rotate-reverse 15s infinite linear;
                }
                .face {
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    border: 2px solid rgba(16, 185, 129, 0.3);
                    box-shadow: 0 0 15px rgba(16, 185, 129, 0.1);
                    background: rgba(16, 185, 129, 0.02);
                }
                .inner .face {
                    width: 150px;
                    height: 150px;
                    border: 1px solid rgba(56, 189, 248, 0.4);
                    background: rgba(56, 189, 248, 0.05);
                }

                .front  { transform: rotateY(0deg) translateZ(150px); }
                .back   { transform: rotateY(180deg) translateZ(150px); }
                .right  { transform: rotateY(90deg) translateZ(150px); }
                .left   { transform: rotateY(-90deg) translateZ(150px); }
                .top    { transform: rotateX(90deg) translateZ(150px); }
                .bottom { transform: rotateX(-90deg) translateZ(150px); }

                .inner .front  { transform: rotateY(0deg) translateZ(75px); }
                .inner .back   { transform: rotateY(180deg) translateZ(75px); }
                .inner .right  { transform: rotateY(90deg) translateZ(75px); }
                .inner .left   { transform: rotateY(-90deg) translateZ(75px); }
                .inner .top    { transform: rotateX(90deg) translateZ(75px); }
                .inner .bottom { transform: rotateX(-90deg) translateZ(75px); }

                @keyframes rotate {
                    from { transform: rotateX(0deg) rotateY(0deg); }
                    to { transform: rotateX(360deg) rotateY(360deg); }
                }
                @keyframes rotate-reverse {
                    from { transform: rotateX(360deg) rotateY(360deg); }
                    to { transform: rotateX(0deg) rotateY(0deg); }
                }

                @media (max-width: 640px) {
                    .cube-wrapper { transform: scale(0.6); }
                }
            `}</style>
        </div>
    );
};

export default CyberShape;
