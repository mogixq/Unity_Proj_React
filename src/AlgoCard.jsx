function AlgoCard(props) {
  return (
    <>
      <div>
        <h4>{props.name}</h4>
        <img
          src={props.ImgSrc}
          alt="img couldnt show"
          style={{ width: "250px", height: "150px" }}
        />
        <p>{props.info}</p>
        
      </div>
    </>
  );
}

export default AlgoCard;
