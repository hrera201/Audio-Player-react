import { useState,useEffect } from "react";
import Player from "./components/Player";

function App() {

const[songs]=useState([
  {
    title:"Song 1",
    artist:"Hrera",
    img_src:"./images/jutt.jpg",
    src:"./music/music1.mp3"
  },
  {
    title:"Chan Chan",
    artist:"Hrera jutt",
    img_src:"./images/music.jpg",
    src:"./music/m2.mp3"
  },
  {
    title:"Ambersariya",
    artist:"Player",
    img_src:"./images/3.jpg",
    src:"./music/m3.mp3"
  },
  {
    title:"Bajna chahye Gaana",
    artist:"Audio",
    img_src:"./images/4.jpeg",
    src:"./music/m4.mp3"
  },
  {
    title:"Smack That",
    artist:"English Singer",
    img_src:"./images/5.jpeg",
    src:"./music/m5.mp3"
  },

  {
    title:"Surili Akhion Waly",
    artist:"Salman Khan",
    img_src:"./images/6.png",
    src:"./music/m3.mp3"
  }





]);


const [currentSongIndex,setCurrentSongIndex]=useState(0);
const[nextSongIndex,setNextSongIndex]=useState(currentSongIndex+1);

useEffect(()=>{

  
  setNextSongIndex(()=>{
    if(currentSongIndex +1 > songs.length -1)
    {
      return 0;
    }
    else{
      return currentSongIndex +1;
    }
  });
},[currentSongIndex, songs.length]);


  return(
    <div className="App">
      
      <Player
       currentSongIndex={currentSongIndex}
       setCurrentSongIndex={setCurrentSongIndex}
       nextSongIndex={nextSongIndex}
       songs={songs}
      />

    </div>
  )
}


export default App;