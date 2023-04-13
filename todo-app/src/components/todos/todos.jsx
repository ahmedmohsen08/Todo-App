export default function TodosComponent() {
    const targetDate = new Date();
    const todos = [
                    {id:1, description:'AWS', done:false, targetDate:targetDate},
                    {id:2, description:'devops', done:false, targetDate:targetDate},
                    {id:3, description:'cloud', done:false, targetDate:targetDate}
                ]
                
    
    return (
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Done?</th>
                        <th>Target Date</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(
                        todo => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                 <td>{todo.done.toString()}</td>
                                  <td>{todo.targetDate.toDateString()}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        )
    
}