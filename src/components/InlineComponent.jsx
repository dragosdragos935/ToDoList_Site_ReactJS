// import "../css/style.css";
import styles from "./inlinecomponent.module.css";

const header = { color: "blue", fontSize: "130px" };
export default function InlineComponent() {
  return (
    <div>
      {/* <h1 style={header}>Inline Component</h1> */}
      {/* <h1 className="inline-header">Inline Component</h1> */}
      <h1 className={styles.header}>This Inline Component</h1>
    </div>
  );
}
