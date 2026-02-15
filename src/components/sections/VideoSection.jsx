import React from 'react';

const VideoSection = () => (
    <section id="video" className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">See Traced In Action</h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                    Watch our comprehensive demo showing how Traced AI security system works in real-world scenarios.
                </p>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
                <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
                    <video
                        className="w-full h-auto"
                        controls
                        preload="metadata"
                        poster="/sotat1.png"
                    >
                        <source src="/Traced by Triye Demo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {/* Action Detection Videos */}
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Real-Time Action Detection</h3>
                    <p className="text-base text-gray-600">
                        Watch Traced identify different human activities with skeletal tracking technology
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                        { src: '/video1.mp4' },
                        { src: '/video2.mp4' },
                        { src: '/video3.mp4' },
                        { src: '/video4.mp4' }
                    ].map((video, index) => (
                        <div key={index}>
                            <video
                                className="w-full h-auto rounded-xl shadow-lg"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src={video.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default VideoSection;
