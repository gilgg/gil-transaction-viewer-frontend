import "./HeaderBtn.scss";

const HeaderBtn = ({ type, onClickHandler }) => {
  const typeClassName = type.toLowerCase().replaceAll(" ", "-");

  return (
    <button className={`btn ${typeClassName}`} onClick={onClickHandler}>
      {type}
    </button>
  );
};

export default HeaderBtn;
