function AlgoCard(props) {
  return (
    <>
      <div
        style={{
          border: "solid lightblue 2px",
          margin: 10,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <h4>{props.name}</h4>
        <img
          src={props.ImgSrc}
          alt="img couldnt show"
          style={{ width: "250px", height: "150px" }}
        />
        <p>{props.info}</p>
        <br />
        <h5>more infomation in external links</h5>
        <a href={props.LinkWiki} target="_blank">Visit Wikipedia   </a>
        <a href={props.LinkG4G} target="_blank" style={{color:'green'}}>Visit Geeks 4 Geeks</a>
      </div>
    </>
  );
}

export default AlgoCard;
