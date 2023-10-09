import { useEffect, useState } from "react";
import './App.css'

const App = () => {
    const [contacts, setContacts] = useState([])
    const [newContact, setNewContact] = useState({})
    const [editContact, setEditContact] = useState()

    const fetchAPI = () => {
        fetch("https://my-json-server.typicode.com/troy1129/jsonplaceholder/data")
            .then(response => response.json())
            .then(response => setContacts(response))
    }

    const addCont = () => {
        var id = contacts.map(cont => cont.id).indexOf(newContact.id)
        if(id == -1) setContacts([...contacts, newContact]);
    }

    const editCont = (id) => {
        var ndx = contacts.map(cont => cont.id).indexOf(id)
        setEditContact(contacts[ndx]);
    }

    const deleteCont = (id) => {
        var ndx = contacts.map(cont => cont.id).indexOf(id)
        contacts.splice(ndx, 1)
        setContacts([...contacts])
    }

    const saveCont = (id) => {
        var ndx = contacts.map(cont => cont.id).indexOf(id)
        contacts[ndx] = { ...contacts[ndx], name: editContact.name, age: editContact.age, course: editContact.course} 
        setContacts([...contacts])
    }

    return (
        <>
            <h1>Contact List w/ CRUD</h1>

            {
                editContact ?
                    <>
                        <p><strong><label htmlFor="contName">Enter Contact Name: </label></strong>
                            <input type="text" value={editContact.name} onChange={(e) => setEditContact({ ...editContact, name: e.target.value })} /></p>
                        <p><strong><label htmlFor="contAge">Enter Contact Age: </label></strong>
                            <input type="number" value={editContact.age} onChange={(e) => setEditContact({ ...editContact, age: e.target.value })} /></p>
                        <p><strong><label htmlFor="contCourse">Enter Contact Course: </label></strong>
                            <input type="text" value={editContact.course} onChange={(e) => setEditContact({ ...editContact, course: e.target.value })} /></p>
                    </>
                :
                    <>
                        <p><strong><label htmlFor="contID">Enter Contact ID: </label></strong>
                            <input type="number" value={newContact.id} onChange={(e) => setNewContact({ ...newContact, id: e.target.value })} /></p>
                        <p><strong><label htmlFor="contName">Enter Contact Name: </label></strong>
                            <input type="text" value={newContact.name} onChange={(e) => setNewContact({ ...newContact, name: e.target.value })} /></p>
                        <p><strong><label htmlFor="contAge">Enter Contact Age: </label></strong>
                            <input type="number" value={newContact.age} onChange={(e) => setNewContact({ ...newContact, age: e.target.value })} /></p>
                        <p><strong><label htmlFor="contCourse">Enter Contact Course: </label></strong>
                            <input type="text" value={newContact.course} onChange={(e) => setNewContact({ ...newContact, course: e.target.value })} /></p>
                    </>
            }

            <div style={{ marginBottom: 20 }}>
                {
                    editContact ?
                        <>
                            <button onClick={() => saveCont(editContact.id)} style={{ marginRight: 20 }}>Save Contact</button>
                            <button onClick={() => setEditContact()} style={{ marginRight: 20 }}>Cancel Edit</button>
                        </>
                    :
                        <button onClick={addCont} style={{ marginRight: 20 }}>Add Contact</button>
                }
                <button onClick={fetchAPI}>Fetch API</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((cont) =>
                            <tr key={cont.id}>
                                <td>{cont.id}</td>
                                <td>{cont.name}</td>
                                <td>{cont.age}</td>
                                <td>{cont.course}</td>
                                <td>
                                    <button onClick={() => editCont(cont.id)}>Edit</button>
                                    <button onClick={() => deleteCont(cont.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default App;