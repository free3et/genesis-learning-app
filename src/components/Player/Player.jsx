import ReactHlsPlayer from "react-hls-player";
import { useEffect, useRef } from "react";

export const VideoPlayer = ({ src, lessonId }) => {
  const playerRef = useRef();

  useEffect(() => {
    function getVideoViewingProgressFromStorage() {
      let currentTimeVideo = localStorage.getItem(`video-${lessonId}`);

      if (
        currentTimeVideo &&
        playerRef.current.classList.contains(`video-${lessonId}`)
      ) {
        playerRef.current.currentTime = currentTimeVideo;
      }

      if (+currentTimeVideo === playerRef?.current?.duration) {
        playerRef.current.currentTime = 0;
      }

      return currentTimeVideo;
    }

    playerRef.current.addEventListener(
      "play",
      getVideoViewingProgressFromStorage
    );
  }, []);

  useEffect(() => {
    function setVideoViewingProgressInStorage() {
      localStorage.setItem(
        `video-${lessonId}`,
        playerRef?.current?.currentTime
      );
    }

    playerRef.current.classList.add("video-" + lessonId);

    playerRef.current.addEventListener(
      "pause",
      setVideoViewingProgressInStorage
    );
  }, [playerRef?.current?.currentTime]);

  useEffect(() => {
    function changePlayerSpeed(event) {
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

    window.addEventListener("keydown", changePlayerSpeed);
  }, []);

  return (
    <>
      <ReactHlsPlayer
        playerRef={playerRef}
        src={src}
        muted={false}
        controls={true}
        width="100%"
        height="auto"
      />
    </>
  );
};
