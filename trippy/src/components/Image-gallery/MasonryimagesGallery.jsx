import React from "react";
import GalleryImages from "./GalleryImages";
import Masonry,{ ResponsiveMasonry} from "react-responsive-masonry"; 

const MasonryimagesGallery = () => {

  const images = GalleryImages();
return(
 <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1,  768:  3,   992:  4}}>
<Masonry gutter="1rem"> 
// {
  //  GalleryImages.map((item,index) =>{

  //   console.log("image",item)
  //   return 
  //  (
  //       <img 
  //        className="masonary__img"
  //        src ={item} 
  //         key={index}
  //         alt="" 
  //         style={{ width:"100%",display:"block",borderRadius:"10px" }}/>
  //   )})}
// }
// {
  images.map((item, key) => (
    <img src={item}  className="masonary__img" key={key} alt={`image_${key}`} style={{ width:"100%",display:"block",borderRadius:"10px" }}/>
  ))
}

</Masonry>
</ResponsiveMasonry>
  );
};

export default MasonryimagesGallery;
