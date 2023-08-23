import React from "react";
import "./App.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState, useEffect } from "react";
import Axios from 'axios';
export default function Post() {
    const [data, setdata] = useState([])
    const [profileInfo, setProfileInfo] = useState(null);
    const userId = 'me';
    const fetchProfileInfo = async () => {
        try {
            const accessToken = 'EAAEOe7iGSdsBO5EmMMMgpHE1FA6QMobZCE9Qcyc6XGdDY97roh1tR5nkiZBWNcXe0x4P9sKO95DHQIl7WqBBJ5u0ZC3IyR3CKodeSqeLI6YRI1utbhJq88paXTVlW81x3VWCWycTZCz9IvZCW5AwJhmMS9LZBRBOmUWsCoJ19Wk05LSl0mDoXNeW5tOOSitYRrO7QA4u3drc1H2uCsgh1ACmwZD';
          
          const response = await Axios.get(
            `https://graph.facebook.com/me?fields=id,name,picture&access_token=${accessToken}`
          );
    
          
          setProfileInfo(response.data);
        } catch (error) {
          
          console.error('Error :', error.response.data);
        }
      };
    
    useEffect(() => {
        fetchProfileInfo();

    }, [])
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
    };
    const handleImageUpload = async () => {
        if (selectedImage) {
            try {
                const url='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'
                const formData = new FormData();
                formData.append('source', selectedImage);
                const accessToken = 'EAAEOe7iGSdsBO5EmMMMgpHE1FA6QMobZCE9Qcyc6XGdDY97roh1tR5nkiZBWNcXe0x4P9sKO95DHQIl7WqBBJ5u0ZC3IyR3CKodeSqeLI6YRI1utbhJq88paXTVlW81x3VWCWycTZCz9IvZCW5AwJhmMS9LZBRBOmUWsCoJ19Wk05LSl0mDoXNeW5tOOSitYRrO7QA4u3drc1H2uCsgh1ACmwZD';
                const pageId = '837638837885487';
                const response = await Axios.post(
                    `https://graph.facebook.com/${pageId}/photos?access_token=${accessToken}`,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    }
                );
                // , response.data
                alert('Image uploaded successfully:');
            } catch (error) {

                console.error('Error uploading image:', error.response.data);
            }
        } else {

            console.warn('Please select an image to upload.');
        }
    };

    return (
        <div className="post mt-5">
            <div className="container-post">
                <div className="form-post">
                    <div className="formcontent">
                        <div className="img">
                            {profileInfo ? (
                                <div>
                                    <img
                                        src={profileInfo.picture.data.url}
                                        alt={profileInfo.name}
                                        style={{ width: '100px', height: '100px',borderRadius:'50px' }}
                                        />
                                        <h2>{profileInfo.name}</h2>
                                        
                                </div>
                            ) : (

                                <p>Loading...</p>
                            )}
                        </div>
                        <Tabs
                            defaultActiveKey="profile"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="post" title="Post">
                            <div>
                            <input type="file" onChange={handleImageChange} />
                                <br/>
                                <br/>
                            <button type="submit" className="btn btn-primary" onClick={handleImageUpload}>Upload Image</button>
                            </div>
                            </Tab>
                            <Tab eventKey="about" title="About">
                                <div>
                                    <img src={data.image} className="img-pro" />

                                </div>
                                <div>
                                    Name:<h6>{data.firstName}{" "}{data.lastName}</h6>
                                    Email:<h6>{data.email}</h6>
                                    Phone:<h6>{data.phone}</h6>
                                    BirthDate:<h6>{data.birthDate}</h6>

                                </div>
                            </Tab>

                        </Tabs>

                    </div>
                </div>

            </div>
        </div>
    )
}
