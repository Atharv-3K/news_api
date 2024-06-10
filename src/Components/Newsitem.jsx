import React from "react";
import './Newsitem.css'; // Importing your custom CSS
import defaultImage from './default-news-image.jpg'; // Importing your default news image

const Newsitem = ({ title, description, src, url }) => {
  // If src is not available, use the default image
  const imageUrl = src ? src : defaultImage;

  return (
    <div className="card news-card mb-3 d-inline-block my-3 mx-3 px-2 py-2">
      <img src={imageUrl} className="card-img-top news-card-img" alt="News" />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "News"}</p>
        <a href={url} className="btn news-card-btn">Read More</a>
      </div>
    </div>
  );
};

export default Newsitem;
