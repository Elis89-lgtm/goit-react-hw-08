import { RingLoader } from "react-spinners";
import s from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={s.loaderWrapper}>
      <RingLoader size={40} color={"#36d7b7"} />
    </div>
  );
}
