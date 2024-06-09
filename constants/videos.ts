export const videos = ["/videos/bind.mp4", "/videos/digimart.mp4", "/videos/nexatalk.mp4", "/videos/europark.mp4"]

export const videoElement = (url: string) => {    
  const vid = document.createElement("video");  
  vid.src = url;  
  vid.crossOrigin = "Anonymous";   
  vid.loop = true;   
  vid.muted = true; 
  return vid;  
}


