const Table = ({ todoList, deleteItem }) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td className="cell">Details</td>
                        <td className="cell">Action</td>
                    </tr>
                </thead>
                <tbody>
                    {todoList.map((x) => 
                        <tr>
                            <td className="cell">{x}</td>
                            <td className="cell"><button onClick={() => {deleteItem(x)}}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default Table;