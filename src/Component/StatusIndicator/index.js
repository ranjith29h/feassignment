import "./statusIndicator.css";

export default function StatusIndicator({ status }) {
  return <span className={`indicator ${status ? "online" : "offline"}`}></span>;
}
