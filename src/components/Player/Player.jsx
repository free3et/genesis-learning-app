import ReactHlsPlayer from "react-hls-player";
import { useRef } from "react";

export const Player = () => {
  const playerRef = useRef();

  function playVideo() {
    playerRef.current.play();
  }

  function pauseVideo() {
    playerRef.current.pause();
  }

  function toggleControls() {
    playerRef.current.controls = !playerRef.current.controls;
  }

  return (
    <ReactHlsPlayer
      playerRef={playerRef}
      src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
    />
  );
};
