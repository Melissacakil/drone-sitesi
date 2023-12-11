
import React from "react";
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"
import { useRef, useState } from "react";


const Gallery= ()=>{

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const slideShowRef =useRef()
const [isPlaying, setIsPlaying] = useState(false);

function playSlides() {
  if (isPlaying) {
    slideShowRef.current.pause();
  } else {
    slideShowRef.current.play();
  }

  setIsPlaying(!isPlaying);
}

return(
<div className="myGallery">
  <h1>hello CodeSandBox</h1>
  <h2>Start editing to see some magic happen!</h2>
  <ImageGallery 
    ref={slideShowRef}
    items={images}
    showPlayButton={true}
    showFullscreenButton={true}
    slideInterval={3000}
    slideOnThumbnailOver={true}
    showIndex={true}
    />
    <button
        className="btn btn-success buttonMyGallery"
        onClick={playSlides}
      >
        {isPlaying ? "Durdur" : "Oynat"}
      </button>
    </div>
)
}

export default Gallery