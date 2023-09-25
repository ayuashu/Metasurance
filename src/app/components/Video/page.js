import React, { useRef } from 'react';
import ReactPlayer from 'react-player';

const Video = () => {
  const videoSrc = '/Videos/myvideo.mp4';
  const playerRef = useRef(null);

  const handleVideoProgress = ({ playedSeconds, loadedSeconds }) => {
    // Check if the video has reached the end and manually restart it
    if (playedSeconds >= loadedSeconds) {
      playerRef.current.seekTo(0); // Restart the video
    }
  };

  return (
    <div className="video-container">
      <ReactPlayer
        ref={playerRef}
        url={videoSrc}
        playing={true}
        muted={true}
        controls={true}
        width={400}
        height={200}
        onProgress={handleVideoProgress} // Call the event handler on video progress
      />
    </div>
  );
};

export default Video;
