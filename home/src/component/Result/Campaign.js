/*eslint-disable*/

function Campaign(props) {
  const style = {
    background: "orange",
    position: "absolute",
    bottom: "30px",
  };

  const bannerStyle = {
    resizeMode: "cover",
    width: "100%",
    height: "100px",
  };
  return (
    <div style={style}>
      <a href="https://www.animals.or.kr/center/adopt">
        <img src="image/banner.png" style={bannerStyle}></img>
      </a>
    </div>
  );
}

export default Campaign;
