import React, { useRef, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;

  const nextVideoRef = useRef(null);

  //   LOADED VIDEO
  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  // VIDEO PLAY LOOP
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  // MINI VIDEO PLAYER
  const handleMiniVdClick = () => {
    setHasClicked(true);

    // setCurrentIndex((prevIndex) => prevIndex + 1);
    setCurrentIndex(upcomingVideoIndex);
  };

  const getVideoSrc = (index) => `/public/videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              {/* MINI VIDEO PLAYER */}
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />

              {/* BACKGROUND VIDEO PLAYER */}
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
