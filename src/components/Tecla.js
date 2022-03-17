import './Tecla.css'

const Tecla = (props) => {
    return (
        <div
            className="Button"
            data-size={props.size}
            data-value={props.value}
            onClick={props.onClick}
        >
            {props.label}
        </div>
    )
}

export default Tecla