import React, {useState, useEffect, useRef} from "react";
import {FaSearch, FaHeart} from "react-icons/fa";
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
  const collection = "https://api.unsplash.com/collections/:McLa6VM9yhA";
  
  

  const [Loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1); 
  const [query, setQuery] = useState("");

    const fetchImages = async () => {
        setLoading(true);
        let url;

        //url = `${mainUrl}${clientId}`;
        const urlPage = `&page=${page}`;
        const urlQuery = `&query=${query}`;

        if (query) {
          url= `${searchUrl}${clientId}${urlPage}${urlQuery}`;
        } else {
          url= `${mainUrl}${clientId}${urlPage}`
        }
        
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            //setPhotos(data);
            setPhotos ((oldPhotos) => {
              if (query && page === 1) {
                return data.results
              } else if (query) {
                return [...oldPhotos, ...data.results];

              } else {
                return [...oldPhotos, ...data];
              }
            });
            
            setLoading(false);
          

        }
         catch(error) {
            setLoading(false);
            console.log(error);
        }
    }

    useEffect (() => {
      fetchImages();
    }, [page]);



    const handleSearch = (e) => {
      e.preventDefault();
      console.log("Submitted");
      if (!query) return;
      if (page === 1) {
        fetchImages();
        return;
      }
      setPage(1)
    };

    return(
        
             <div className="photo-app">
                 
           <section className="search">
             <form className="search-form">
              <input 
               type="text"
               placeholder="Search your fridge"
               className="form-input"
               value={query}
               onChange={(e) => setQuery(e.target.value)}
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