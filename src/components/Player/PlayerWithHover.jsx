import ReactHlsPlayer from "react-hls-player";
import { useEffect, useRef, useState } from "react";

export const VideoPlayerWithHover = ({ muted, src }) => {
  const playerRef = useRef();

  useEffect(() => {
    function playVideo() {
      playerRef.current.play();
    }

    function pauseVideo() {
      playerRef.current.pause();
    }

    function changeSpeed(event) {
      if (event.key === "=") {
        playerRef.current.playbackRate += 0.25;
        if (playerRef.current.playbackRate > 3) return;
      }

      if (event.key === "-") {
        playerRef.current.playbackRate -= 0.25;
      }

      if (event.key === "0") {
        playerRef.current.playbackRate = 1;
      }
    }

    playerRef.current.addEventListener("mouseover", playVideo);

    playerRef.current.addEventListener("mouseout", pauseVideo);
    window.addEventListener("keydown", changeSpeed);
  }, []);

  return (
    <>
      <ReactHlsPlayer
        playerRef={playerRef}
        src={src}
        muted={muted}
        controls={true}
        width="100%"
        height="auto"
      />
    </>
  );
};
