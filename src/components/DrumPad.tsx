import { useRef } from "react";
import "./DrumPad.css";

interface Props {
  label: string;
  audioClipURL: string;
  onClick: (fileName: string) => void;
}

const DrumPad = ({ label, audioClipURL, onClick }: Props) => {
  const audioReference = useRef<HTMLAudioElement | null>(null);

  const handleDrumPadButtonClick = () => {
    // Play audio
    if (audioReference.current) {
      audioReference.current.play();
    }

    // Get audio file name
    const audioFile = audioClipURL;
    const fileName = audioFile.replace(/^.*[\\/]/, "").replace(/\.[^.]+$/, "");
    console.log(fileName);

    // Bubble up the file name
    onClick(fileName);
  };

  return (
    <>
      <button id="drum-pad-button" onClick={handleDrumPadButtonClick}>
        {label}
      </button>
      <audio
        className="audio-clip"
        ref={audioReference}
        src={audioClipURL}
      ></audio>
    </>
  );
};

export default DrumPad;
