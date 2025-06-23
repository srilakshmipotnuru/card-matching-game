import React from "react";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline';

interface headerProps{
    enableSound: boolean
    onClickSoundButton: ()=> void
}
const Header = (props: headerProps) => {
    const {enableSound,onClickSoundButton} =props
    return (
        <div className="flex">
            <h1 className="text-my-text-color text-4xl p-4 bg text-center flex-3/4">
            CARD MATCHING GAME
            </h1>
            <button onClick={onClickSoundButton}>{enableSound? <SpeakerWaveIcon className="h-6 w-6 text-my-secondary-color"/> : <SpeakerXMarkIcon className="h-6 w-6 text-my-secondary-color"/>}</button>
        </div>
        
    )
}

export default Header