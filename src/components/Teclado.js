import './Teclado.css'
import Tecla from "./Tecla";

const Teclado = ({handleClick}) => {
    return (
        <div className="teclado">
            <Tecla label="C" value="clear" onClick={handleClick}/>
            <Tecla label="/" value="/" onClick={handleClick}/>
            <Tecla label="x" value="*" onClick={handleClick}/>
            <Tecla label="del" value="null" onClick={handleClick}/>

            <Tecla label="7" value="7" onClick={handleClick}/>
            <Tecla label="8" value="8" onClick={handleClick}/>
            <Tecla label="9" value="9" onClick={handleClick}/>
            <Tecla label="-" value="-" onClick={handleClick}/>

            <Tecla label="4" value="4" onClick={handleClick}/>
            <Tecla label="5" value="5" onClick={handleClick}/>
            <Tecla label="6" value="6" onClick={handleClick}/>
            <Tecla label="+" value="+" onClick={handleClick}/>

            <Tecla label="1" value="1" onClick={handleClick}/>
            <Tecla label="2" value="2" onClick={handleClick}/>
            <Tecla label="3" value="3" onClick={handleClick}/>
            <Tecla label="=" size="2" value="=" onClick={handleClick}/>

            <Tecla label="%" value="%" onClick={handleClick}/>
            <Tecla label="0" value="0" onClick={handleClick}/>
            <Tecla label="," value="," onClick={handleClick}/>
        </div>
    )
}

export default Teclado