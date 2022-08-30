/*eslint-disable*/

function Campaign(props) {
  const type = props.typeSelect;

  const style = {
    background: "orange",
    height: "400px",
  };

  const bannerStyle = {
    resizeMode: "cover",
    width: "100%",
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
