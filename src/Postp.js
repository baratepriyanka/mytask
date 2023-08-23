import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import axios from "axios";

const Postp = () => {
//   const [fileToUpload, setFileToUpload] = useState()
//   const inputFileChangeHandler = (event) => {
//     if (event.currentTarget != null && event.currentTarget.files != null) {
//       setFileToUpload(event.currentTarget.files[0]);
//     }
//   };
// console.log(fileToUpload)
//   const postRandomQuote = () => {
//     let caption = "test upload local image from React";
//     const fileReader = new FileReader();
//     fileReader.onloadend = async () => {
//       if (fileReader.result != null) {
//         const photoData = new Blob([fileReader.result], { type: "image/jpg" });
//         const formData = new FormData();
//         formData.append("source", photoData);
//         formData.append("caption", caption);
      
//         axios.post("https://graph.facebook.com/v17.0/837473271235377/photos?",formData, {
//           access_token:'EAAUpuZBZC8xDMBO6TEbBZBFToJIaucv2nQZAvdlInKaMHLYU11ZAwsGGfyEbwDHoRpDdWBrvijsoSwqNcflj2rYokm6JNfGB7jSY926jovNjJXvdqZBzZCpx4SOm3m4gZBrYv8HSIKd9D9EnNjackBqkY42l8ZAbXcRniVnoYoNZAbV63hXuij2dnC4jYIcCus8enT0t90RRSVeX1yhbmLASdmKW8ZD',
           
//           })
//           .then((res) => {
//             console.log(res.data);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       }
//     };
//     fileReader.readAsArrayBuffer(fileToUpload);
//     // const data1 = new FormData();
//     // data1.append('source', profile.file);
   
//     // axios.post("https://graph.facebook.com/v17.0/114708481709328/photos?", {
//     //     img:profile,
//     //     access_token:
//     //      "EAAUpuZBZC8xDMBO6TEbBZBFToJIaucv2nQZAvdlInKaMHLYU11ZAwsGGfyEbwDHoRpDdWBrvijsoSwqNcflj2rYokm6JNfGB7jSY926jovNjJXvdqZBzZCpx4SOm3m4gZBrYv8HSIKd9D9EnNjackBqkY42l8ZAbXcRniVnoYoNZAbV63hXuij2dnC4jYIcCus8enT0t90RRSVeX1yhbmLASdmKW8ZD"})
//     //   .then(
//     //     res => {
//     //       const result = res.data;
//     //       console.log(result);
//     //       alert("Success!");
//     //     },
//     //     error => {
//     //       console.log(error);
//     //     }
//     //   );
//   };

const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
const handlePost = () => {
  if (!selectedFile) {
    alert('Please select an image.');
    return;
  }

  const formData = new FormData();
  formData.append('source', selectedFile);
 

  // Replace 'YOUR_ACCESS_TOKEN' with the actual user access token with 'publish_to_groups' permission.
  const accessToken = 'EAAUpuZBZC8xDMBO3E1Jr9EO6JQz313MWZCGze3mutEofNZBj3uS3PXq3eus7Tj0Aa5dhamUhPTV0kqGVRYxZBWVkOZAUQc4tovMPviwthO3a9a9JlnZBduuZB9Bk2J7DZCIgtO3jDpLZBKcfpqfaZBzeldc1unlpk3kLoqIq6sfIVqEOZByoJuBKXt1HWsZCdTOVgsSt24R8wyMGfW7EBeNhtiebj0nJ0nuOdxXAYPxtb9eGzYvoeRu70XndRbUYUMZCEbrQZDZD';

  axios
    .post(`https://graph.facebook.com/v17.0/114708481709328/photos?`, formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      console.log('Image posted successfully:', response.data);
      // Do something with the response if needed.
    })
    .catch((error) => {
      console.error('Error posting image:', error);
    });
};
  return (
    // <div>
    //   React Facebook Post Page Status - Random Photo
    //   <br />
    //   <input type="file" id="file-input" onChange={inputFileChangeHandler} />
    //   <button onClick={() => postRandomQuote()}>Post Photo</button>
    // </div>
    <div>
      <input type="file" onChange={handleFileChange} />
      <br />
     
      <br />
      <button onClick={handlePost}>Post to Facebook Group</button>
    </div>
  );
};

export default Postp

