import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');


    // mount = quando o elemento e montado
    // update = quando o elemento e atualizado
    // onmount = quando o elemento e finalizado
    
    
    useEffect(() => {
        console.log('o estado nome mudou')
    }, [nome]);

    const alteraNome = (evento) => {
        // console.log(evento.target.value)
        setNome(estadoAnterior => {
            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;
        

        if (media == 7) {
            return (
                <p>Ola {nome}, voce foi aprovado</p>
            );
        } else if (media >= 8) {
            return (
                <p>Nossa {nome}, vc e pika d+</p>
            );
        }else {
            return (
                <p>Ola {nome}, voce nao foi aprovado vacilao</p>
            );
        }
        
    }
    
    return(
        <form>

            <ul>
                {[1,2,3,4].map(item => (
                    <li key={item}>{item}</li>
                ))}
                
            </ul>
            
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota materia A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario