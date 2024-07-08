function Lista() {
    const tarefas = [{ tarefa: 'React', tempo: '01:00:00' }, { tarefa: 'TypeScript', tempo: '02:30:00' }, { tarefa: 'Java', tempo: '01:30:00' }]

    return (
        <div>
            {tarefas.map((item, index) => (
                <div key={index}>
                    <h3> {item.tarefa} </h3>
                    <span> {item.tempo} </span>
                </div>
            ))}
        </div>
    )
}

export default Lista;