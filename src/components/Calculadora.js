import {useState} from "react";

import './Calculadora.css'
import Pantalla from "./Pantalla";
import Teclado from "./Teclado";

const Calculadora = () => {
    const [valor, setValor] = useState('')

    const calcular = (valor) => {
        try {
            const result = eval(valor)
            setValor(result)
        } catch (e) {
            setValor(e)
        }
    }

    const handleClick = e => {
        const value = e.target.getAttribute('data-value')

        switch (value) {
            case 'clear':
                setValor('')
                break
            case '=':
                calcular(valor)
                break
            case 'null':
                setValor(valor.substring(0, valor.length - 1))
                break
            default:
                console.log()
                setValor(valor + value)
        }
    }

    return (
        <div className="calculadora">
            <Pantalla value={valor} />
            <Teclado handleClick={handleClick}/>
        </div>
    )
}

export default Calculadora