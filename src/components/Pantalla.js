import './Pantalla.css'

const Pantalla = (props) => {
    return (
        <input className="pantalla" type="text" disabled value={props.value}/>
    )
}

export default Pantalla