import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

export const Userdel = () => {
  const [post, setPost] = useState([])
  const [id, setId] = useState(0)
  const [username, setUsername] = useState('')
  const [age, setAge] = useState(0)
  const [edu, setEdu] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:3001/userdet')
      .then(res => {
        setPost(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/userdet', {"id": id, "username": username, "age": age,"edu":edu})
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/userdet/${id}`)
      .then(res => {
        console.log(res.data);
        setPost(post.filter(user => user.id !== id))
      })
      .catch(err => {
        console.log(err);
      })
  }

  const [popup, setPopup] = useState(false)
  const [id1, setId1] = useState(0)
  const [username1,setUsername1] = useState('')
  const [age1, setAge1] = useState(0)
  const [edu1, setEdu1] = useState(0)

  const openPopup = (x) => {
    setPopup(true)
    setId1(x.id)
    setUsername1(x.username)
    setAge1(x.age)
    setEdu1(x.edu)
  }

  const handleUpdate = () => {
    axios.put(`http://localhost:3001/userdet/${id1}`, {"id": id1, "username": username1, "age": age1, "edu":edu1})
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Education</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {post.map(x => (
            <tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.username}</td>
              <td>{x.age}</td>
              <td>{x.edu}</td>
              <td>
                <button onClick={() => openPopup(x)}>Update</button>
                <button onClick={() => handleDelete(x.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {popup &&
        <form onSubmit={handleUpdate}>
          <button onClick={() => setPopup(false)}>X</button>
          <label>Id:</label>
          <input type='number' value={id1} onChange={(e) => setId1(e.target.value)} />
          <br></br>

          <label>Name:</label>
          <input type='text' value={username1} onChange={(e) => setUsername1(e.target.value)} />
          <br></br>

          <label>Age:</label>
          <input type='number' value={age1} onChange={(e) => setAge1(e.target.value)} />
          <br></br>
          <label>Education:</label>
          <input type='text' value={edu1} onChange={(e) => setEdu1(e.target.value)} />
          <br></br>
          <button type='submit'>Submit</button>
        </form>
      }
    </div>
  )
}
