import "./DrumPad.css";

interface Props {
  label: string;
  audioClipURL: string;
}

const DrumPad = ({ label, audioClipURL }: Props) => {
  return (
    <>
      <button id="drum-pad-button">{label}</button>
      <audio src={audioClipURL}></audio>
    </>
  );
};

export default DrumPad;
