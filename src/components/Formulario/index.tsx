import React from 'react';
import Botao from '../Botao';

class Formulario extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label
                        htmlFor='tarefa'
                    >
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você quer estudar"
                        required
                    />
                </div>
                <br></br>

                <div>
                    <label htmlFor="tempo">`
                        Tempo
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <br></br>

                <Botao/>
                <br></br>
            </form>
        )
    }
}

export default Formulario;
