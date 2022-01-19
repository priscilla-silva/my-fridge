import React, {useState, useEffect, useRef} from "react";
import {FaSearch} from "react-icons/fa";
import Photo from "./Photo";

const Welcome = () => {

    const myUser = {
    username: "priscilla",
    password: "fridge123"
  }

  const [user, setUser] = useState({username:""});
  const [error, setError] = useState("");

  const clientId = `?client_id=zutgZdRcn3GpXjmvCrb8qDh9X6yCEg6D3B8ZFJJRL58`;
  const mainUrl = "https://api.unsplash.com/photos/";
  const searchUrl = "https://api.unsplash.com/search/photos/";

  const [Loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState([]);

    const fetchImages = async() => {
        setLoading(true);
        let url;

        url = `${mainUrl}${clientId}`;
        
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setPhotos(data);
            setLoading(false);
          

        } catch(error) {
            setLoading(false);
            console.log(error);
        }
    }

    useEffect (() => {
      fetchImages();
    }, [])

    const handleSearch = (e) => {
      e.preventDefault();
      console.log("Submitted");
    }

    return(
        
             <div className="photo-app">
                 <p className="welcome-headline">Welcome, <span>{user.username}</span></p>
           <section className="search">
             <form className="search-form">
              <input 
               type="text"
               placeholder="Search"
               className="form-input"
              />
              <button type="submit" className="submit-btn" onClick={handleSearch}>
                <FaSearch />
              </button>
             </form>
             <section className="photos">
               <div className="photos-center">
                {photos.map((image) =>  {
                  console.log("image");
                  return  <Photo key={image.id} {...image} />
                })}
               </div>
               {Loading && <h2 className="loading">Loading...</h2>}
             </section>
           </section>

         </div>

        
    )

}

export default Welcome;