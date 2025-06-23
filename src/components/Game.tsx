import React, { use, useEffect, useState } from "react";
import Card from "./Card"
import bird from "../assets/bird.svg"
import butterfly from "../assets/butterfly.svg"
import fish from "../assets/fish.svg"
import moon from "../assets/moon.svg"
import pancake from "../assets/pancake.svg"
import pumpkin from "../assets/pumpkin.svg"
import star from "../assets/star.svg"
import robot from "../assets/robot.svg"
import winSound from '../assets/tadaa.mp3';
import cardflip from '../assets/cardflip.mp3';

import { shuffle } from "../utils";
import PopUp from "./PopUp";

const images = [bird,butterfly,fish,moon,pancake,pumpkin,star,robot]
interface gameProps {
    enableSound: boolean
}
const Game = (props: gameProps) => {
    const [shuffledImages,setShuffledImages] = useState<string[]>(() =>
  shuffle([...images, ...images]))
    const [flipped, setFlipped] = useState<boolean[]>(Array(16).fill(false))
    const [refresh,setRefresh] =useState(false)
    const [previousImage ,setPreviousImage] = useState(-1)
    const [showPopUp,setShowPopUp]= useState(false)

    useEffect(()=>{
        if (refresh){
            const shuffled = shuffle([...images,...images])
            setShuffledImages(shuffled)
            setFlipped(Array(16).fill(false))
            setPreviousImage(-1)
            setRefresh(false)
        }
    },[refresh])

    useEffect(()=>{
        let count =0
        flipped.map(item=>{
            if(item){
                count++
            }
        })
        if (count===16){
            const audio = new Audio(winSound); 
            audio.volume = props.enableSound? 0.6: 0.0;
            audio.play();
            setTimeout(()=>setShowPopUp(true),500)
        }
    },[flipped])

    const handleClick = (index : number) => {
        if (flipped[index]) return;

        // Count how many cards are currently face up (but not matched)
        const currentlyFlippedCount = flipped.filter(Boolean).length +  1;
        // Block flipping if 2 cards are already face up (waiting to reset)
        if (previousImage !== -1 && currentlyFlippedCount % 2 !== 0) return;
        const audio = new Audio(cardflip); 
        audio.volume = props.enableSound? 0.6: 0.0;
        audio.play();
        let flippedDupe = [...flipped]
        flippedDupe[index] = true
        setFlipped(flippedDupe)
        if (previousImage !== -1){ // it is an index
            if (shuffledImages[previousImage] === shuffledImages[index]){
                setPreviousImage(-1)
            } else {
                 setTimeout(() => {
                    const resetFlipped = [...flippedDupe];
                    resetFlipped[previousImage] = false;
                    resetFlipped[index] = false;
                    setFlipped(resetFlipped);
                    setPreviousImage(-1);
                    }, 500);
            }
        } else {
            setPreviousImage(index)
        }
    }

    return (
        <div className="grid grid-cols-4 gap-y-6 gap-x-2 p-6 max-w-[60%] mx-auto items-center justify-center">
            {shuffledImages.map((img,index)=>(
                <Card key={index} image={img} isFlipped={flipped[index]} onClick={()=> handleClick(index)}/>
            ))}
            <PopUp showPopUp={showPopUp} onClick={()=>{
                setRefresh(true)
                setShowPopUp(false)
                }}/>
        </div>
        
    )
}

export default Game