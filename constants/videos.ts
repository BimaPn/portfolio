export const videoElement = (url: string) => {    
  const vid = document.createElement("video");  
  vid.src = url;  
  vid.crossOrigin = "Anonymous";   
  vid.loop = true;   
  vid.muted = true; 
  vid.play();  
  return vid;  
}

export const videos = ["/videos/reaction.mp4", "/videos/drake.mp4", "/videos/rizz.mp4", "/videos/reaction.mp4"]
