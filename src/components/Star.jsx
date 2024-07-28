/* eslint-disable */
import { FaStar } from "react-icons/fa"

const Star = ({selected=false, onSelect=f=>f, deSelect= f=>f}) => (
    <FaStar color={selected ? "red" : "grey"} onClick={selected ? deSelect : onSelect}/>
)
export default Star;