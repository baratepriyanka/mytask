// Import necessary modules and components
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Postpp = () => {

    const [selectedImage, setSelectedImage] = useState(null);


    const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    const handleImageUpload = async () => {
        if (selectedImage) {
            try {
                const formData = new FormData();
                formData.append('source', selectedImage);
                const accessToken = 'EABdbZCtsNLFsBO66kpl7TTglhqJ47tulAfqZCPBupRwuSxt1ONIFUTqZAUNmkxT2pKgUsZBzwG2zUdQEZBQ3HkQUkpiU2Je6OUcF3IULoiZArDVI79P1QqFwpKwQp5D8oPn1iz3RmXTzOBOSpXfvLdZANEenyg3tZAXl4YLCp7D8ER1mLPZBPfrHetLZArv9fGgJ3iooP6LAqugHgWkNkjBrevagD8iTBixOWjj6Fl9bcBHcFuBbYXlOsuWHOfAqq80QZDZD';
                const pageId = '114708481709328';
                const response = await axios.post(
                    `https://graph.facebook.com/${pageId}/photos?access_token=${accessToken}`,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    }
                );

                console.log('Image uploaded successfully:', response.data);
            } catch (error) {

                console.error('Error uploading image:', error.response.data);
            }
        } else {

            console.warn('Please select an image to upload.');
        }
    };
    const [accounts, setAccounts] = useState([]);
    const fetchAccounts = async () => {
        try {
          // Replace 'your-access-token' with the actual access token obtained from Facebook
          const accessToken = 'EABdbZCtsNLFsBO66kpl7TTglhqJ47tulAfqZCPBupRwuSxt1ONIFUTqZAUNmkxT2pKgUsZBzwG2zUdQEZBQ3HkQUkpiU2Je6OUcF3IULoiZArDVI79P1QqFwpKwQp5D8oPn1iz3RmXTzOBOSpXfvLdZANEenyg3tZAXl4YLCp7D8ER1mLPZBPfrHetLZArv9fGgJ3iooP6LAqugHgWkNkjBrevagD8iTBixOWjj6Fl9bcBHcFuBbYXlOsuWHOfAqq80QZDZD';
    
          // Make a GET request to fetch the user's accounts from Facebook using Graph API
          const response = await axios.get(
            `https://graph.facebook.com/me?access_token=${accessToken}`
          );
            // console.log(response.data.data)
          // Set the fetched accounts to the state
          setAccounts([response.data]);
        } catch (error) {
          // Handle error, e.g., show error message
          console.error('Error fetching accounts:', error.response.data);
        }
      };
      console.log(accounts)
useEffect(() =>{
    fetchAccounts();
},[])
    return (
        <>
        <div>

            <input type="file" onChange={handleImageChange} />

            <button onClick={handleImageUpload}>Upload Image</button>
        </div>
        <div>
      {accounts.length > 0 ? (
        
        <ul>
          {accounts.map((account) => {
            console.log(account)
            return(
                <li key={account.id}>
              <strong>Name:</strong> {account.name} <br />
              <strong>Category:</strong> {account.category} <br />
              <strong>Access Token:</strong> {account.access_token}
            </li>
            )
          })}
        </ul>
      ) : (
        
        <p>Loading...</p>
      )} 
    </div>
        </>
        
    );
};

export default Postpp;
