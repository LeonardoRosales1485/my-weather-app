import Video from "./shootToThrill.mp4";
import style from "./YoSoyIronMan.module.css"

export default function YoSoyIronMan() {
  return(
    <video className={style.videoo}width="850" height="500" autoPlay src={Video}></video>
  )
}
