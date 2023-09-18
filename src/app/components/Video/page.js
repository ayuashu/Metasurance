const src =
  "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";

const Video = () => {
  return (
    <video controls width="100%" muted autoPlay>
      <source src={src} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
};

export default Video;




// //to upload video from local file
// import { useState } from "react";

// const Video = () => {
//   const [src, setSrc] = useState("");

//   const handleChange = (event) => {
//     try {
//       // Get the uploaded file
//       const file = event.target.files[0];

//       // Transform file into blob URL
//       setSrc(URL.createObjectURL(file));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <video src={src} controls width="100%">
//         Sorry, your browser doesn't support embedded videos.
//       </video>
//       <input type="file" onChange={handleChange} />
//     </>
//   );
// };

// export default Video;