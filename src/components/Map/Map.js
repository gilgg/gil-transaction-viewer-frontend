import "./Map.scss";
import useMap from "../../hooks/useMap";

const Map = ({ transaction, coords }) => {
  useMap(transaction._id, coords);

  return <div className="map-container" id={transaction._id}></div>;
};

export default Map;
