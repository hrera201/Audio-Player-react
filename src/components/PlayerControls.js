import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay,faPause,faForward,faBackward} from '@fortawesome/free-solid-svg-icons';


function PlayerControls(props) {
        
   
    return (
        
        <div className="music-player-controls"> 
    
       
        
    <button className="skip-buttonb" onClick={()=> props.SkipSong(false)}>
            <FontAwesomeIcon icon={faBackward} />
        </button>
        
        <button className="play-button" onClick={()=>props.setIsPlayingSong(!props.isPlayingSong)} >
            <FontAwesomeIcon icon={props.isPlayingSong ? faPause:faPlay} />
        </button>
        <button className="skip-button" onClick={()=>props.SkipSong()} >
            <FontAwesomeIcon icon={faForward} />
        </button>
        

        
            

        </div>

    )
}


export default PlayerControls;
