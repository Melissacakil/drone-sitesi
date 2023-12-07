
import React from "react";
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"
import { useRef } from "react";


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

const slideshowref =useRef()

function playSlides(){
  slideshowref.current.play()

}

return(
<div className="myGallery">
  <h1>hello CodeSandBox</h1>
  <h2>Start editing to see some magic happen!</h2>
  <ImageGallery 
  ref={slideshowref}
    items={images}
    showPlayButton={true}
    showFullscreenButton={true}
    slideInterval={1000}
    slideOnThumbnailOver={true}
    showIndex={true}
    onPlay={() => {
      alert("slideshow is now playing!");
    }}/>
    <button className=" btn btn-success buttonMyGalley"  onClick={playSlides}>Play</button>
</div>
)
}

export default Gallery