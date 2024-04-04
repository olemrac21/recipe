const Card =  ({image, title, body, description}) => {
    return (
        <>
        <div className="card">
          <img src={image} alt="image" className="card-images" />
          <h2 className="card-title">{title}</h2>
          <p className="card-body">{body}</p>
          {/* <p className="card-description">{description}</p> */}
          </div>
        </>
      
    );
};

export default Card