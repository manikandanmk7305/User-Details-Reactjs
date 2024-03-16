import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { Outlet } from 'react-router-dom'

export const Users = () => {
  const[post,setPost]=useState([])
  const[id,setId]=useState('')
  const[username,setUsername]=useState('')
  const[email,setEmail]=useState('') 
  const[edu,setEdu]=useState('')
  const[phone,setPhone]=useState('')
  const[age,setAge]=useState('')
  const[field,setField]=useState('')

  useEffect(()=>{
    axios.get('http://localhost:3001/userdet') 
    .then(res=>{setPost(res.data)})
    .catch(err=>{console.log(err)})
  })
  const handleSubmit=()=>{
    axios.post('http://localhost:3001/userdet',{"username":username,"email":email,"phone":phone,"age":age,"id":id,"edu":edu,"field": field})

}


  return (
    <div>
        <h1 className='login-p'>User detail Page</h1><br></br>

        <form className='userform' onSubmit={handleSubmit}>
            <label>Id:</label>
            <input type='number' value={id} onChange={(e)=>{
                setId(e.target.value)}}/><br></br><br></br>
            <label>Username:</label>
            <input type='text' value={username} onChange={(e)=>{
                setUsername(e.target.value)}}/><br></br><br></br>
            <label>Email:</label>
            <input type='email' value={email} onChange={(e)=>{
                setEmail(e.target.value)}}/><br></br><br></br>
            <label>Phone No:</label>
            <input type='number' value={phone} onChange={(e)=>{
                setPhone(e.target.value)}}/><br></br><br></br>
            <label>Age:</label>
            <input type='number' value={age} onChange={(e)=>{
                setAge(e.target.value)}}/><br></br><br></br>
            <label>Education:</label>
            <input type='text' value={edu} onChange={(e)=>{
                setEdu(e.target.value)}}/><br></br><br></br>
           <label>Interested Field:</label><br/>
        <input className='radio' type='radio' name='field' value='web devoleper' onChange={(e) => setField(e.target.value)} /> <label>web devoleper</label><br />
        <input className='radio' type='radio' name='field' value='Android developer' onChange={(e) => setField(e.target.value)} /> <label>Android developer</label><br />
        <input className='radio' type='radio' name='field' value='software tester' onChange={(e) => setField(e.target.value)} /> <label >software tester</label><br /><br />


        <button type='submit'>Submit</button><br></br><br></br>

        {/* <Link className='flink' to="/login">Already have an account? Login</Link> */}
        </form>
        
        {/* <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {post.map(x=>(
                    <tr>
                    <td>{x.id}</td>
                    <td>{x.username}</td>
                    <td>{x.age}</td>
                    { <td>
                        <button onClick={openPopup}>Uptade</button>
                        <button onClick={()=>handleDelete(x.id)}>Delete</button>

                    </td> }
                </tr>
                ))}
                <br/><br/><br/>
                
            </tbody>
        </table> */}
    </div>
  )
}
