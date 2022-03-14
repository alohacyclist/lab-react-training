import './BoxColor.css'

export function BoxColor(props) {

  function hexinate(value) {
    let hex = value.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  return (
    <div style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b} )`}}>
        <h2>rgb({props.r}, {props.g}, {props.b})</h2>
        <h2>#{hexinate(props.r)}{hexinate(props.g)}{hexinate(props.b)}</h2>
    </div>
  )
}
