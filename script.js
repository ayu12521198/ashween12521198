 window.addEventListener("load", () => {
      setTimeout(() => {
        const audio = document.getElementById("my-audio");
        audio.play().catch((e) => {
          console.log("Autoplay was blocked. Tap to start the music.");
        });
      }, 1000);
    });
    let box = document.getElementById("box");
    let song= document.getElementById("audio");
    
    box.addEventListener("click",()=>{
        if(song.paused){
            song.play();
        }
        else{
            song.pause();
        }
    });
    