import { useState, useRef } from "react";
import "./DrumPad.css";

interface Props {
  label: string;
  audioClipURL: string;
}

const DrumPad = ({ label, audioClipURL }: Props) => {
  const audioReference = useRef<HTMLAudioElement | null>(null);

  const handleDrumPadButtonClick = () => {
    if (audioReference.current) {
      audioReference.current.play();
    }
  };

  return (
    <>
      <button id="drum-pad-button" onClick={handleDrumPadButtonClick}>
        {label}
      </button>
      <audio ref={audioReference} src={audioClipURL}></audio>
    </>
  );
};

export default DrumPad;
