import DrumPad from "./DrumPad";
import "./DrumMachine.css";
import { useState } from "react";

const DrumMachine = () => {
  const [audioFileName, setAudioFileName] = useState("TEST");

  const AUDIO_CLIP_URL_HEATER_1 =
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3";
  const AUDIO_CLIP_URL_HEATER_2 =
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3";
  const AUDIO_CLIP_URL_HEATER_3 =
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3";
  const AUDIO_CLIP_URL_HEATER_4 =
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3";
  const AUDIO_CLIP_URL_CLAP =
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3";
  const AUDIO_CLIP_URL_OPEN_HIGH_HAT =
    "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3";
  const AUDIO_CLIP_URL_KICK_AND_HAT =
    "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3";
  const AUDIO_CLIP_URL_KICK =
    "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3";
  const AUDIO_CLIP_URL_CLOSED_HIGH_HAT =
    "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3";

  return (
    <>
      <div id="drum-machine">
        <div id="button-container">
          <div id="button-top-row">
            <DrumPad label="Q" audioClipURL={AUDIO_CLIP_URL_HEATER_1}></DrumPad>
            <DrumPad label="W" audioClipURL={AUDIO_CLIP_URL_HEATER_2}></DrumPad>
            <DrumPad label="E" audioClipURL={AUDIO_CLIP_URL_HEATER_3}></DrumPad>
          </div>
          <div id="button-middle-row">
            <DrumPad label="A" audioClipURL={AUDIO_CLIP_URL_HEATER_4}></DrumPad>
            <DrumPad label="S" audioClipURL={AUDIO_CLIP_URL_CLAP}></DrumPad>
            <DrumPad
              label="D"
              audioClipURL={AUDIO_CLIP_URL_OPEN_HIGH_HAT}
            ></DrumPad>
          </div>
          <div id="button-bottom-row">
            <DrumPad
              label="Z"
              audioClipURL={AUDIO_CLIP_URL_KICK_AND_HAT}
            ></DrumPad>
            <DrumPad label="X" audioClipURL={AUDIO_CLIP_URL_KICK}></DrumPad>
            <DrumPad
              label="C"
              audioClipURL={AUDIO_CLIP_URL_CLOSED_HIGH_HAT}
            ></DrumPad>
          </div>
        </div>
        <div id="display">
          <label id="audio-file-label">{audioFileName}</label>
        </div>
      </div>
    </>
  );
};

export default DrumMachine;
