import styles from "../Styles.css";

function Card(props) {
  return <div className="card">{props.children}</div>;
}

export default Card;
