import React, {useState, useEffect} from "react";

const Photo = ({urls:{regular}, alt_description, likes, user:{name, portfolio_url,profile_image:{medium}, image}}) => {
    

    return(
       <article className="photo">
           <img src={regular} alt={alt_description} />
           <div className="photo-info">
               <div>
                   <h4>{name}</h4>
                   <p>{likes}</p>
               </div>
               <a href={portfolio_url}>
                   <img src={medium} alt={image} className="user-img" />
               </a>
           </div>
       </article>
       
        
    )
}

export default Photo;
