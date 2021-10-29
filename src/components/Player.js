import { useState, useRef, useEffect } from 'react';
import React from 'react';
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';

function Player(props) {

const [isPlayingSong,setIsPlayingSong]=useState(false);



const audioPlayer=useRef(null);




useEffect(()=>{
    if(isPlayingSong)
    {
        audioPlayer.current.play();
    }
    else{
        audioPlayer.current.pause();
    }
});



const SkipSong =(forwards=true)=>{
    if (forwards) {
        props.setCurrentSongIndex(() => {
            let temp = props.currentSongIndex;
            temp++;

            if (temp > props.songs.length - 1) {
                temp = 0;
            }

            return temp;
        });
    }
    else{
        props.setCurrentSongIndex(()=> {
            let temp=props.currentSongIndex;
            temp--;

            if(temp<0)
            {
                temp=props.songs.length -1;
            }
            return temp;
        });
    }

}





    return (
        <div className="music-player">
        <audio src={props.songs[props.currentSongIndex].src} ref={audioPlayer} ></audio>
        <h4>Playing Now</h4>
        <PlayerDetails song={props.songs[props.currentSongIndex]} />
        <input type="range" className="progressbar" />
        <div className="duration">5:33</div>
        <div className="current-time">0</div>
        <PlayerControls 
        isPlayingSong={isPlayingSong} 
        setIsPlayingSong={setIsPlayingSong} 
        SkipSong={SkipSong} />       
        
        <p>Next Song: <span> {props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist} </span></p>
            
        </div>
    )
}

export default Player;