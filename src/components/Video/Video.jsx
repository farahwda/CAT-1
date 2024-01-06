import React, { useState } from "react";
import "./Video.css";

function Video() {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = React.createRef();

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current.play();
    videoRef.current.muted = false;
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current.pause();
    videoRef.current.muted = true;
  };

  return (
    <div className="video-background" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <video ref={videoRef} autoPlay loop muted={!isHovered}>
        <source src="sweet1.MOV" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
