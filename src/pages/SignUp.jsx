import React,{ useEffect, useState } from 'react'; 
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import BackgroundImage from '../components/Background';
import Header from '../components/Header';



const SignUp = () => {

  const navigate = useNavigate(); 

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)




const EndPointUrl = "http://3.236.191.157:4000/auth/register";



 const submitForm = (e) =>{
    e.preventDefault(); 
setLoading(true)
 axios.post(EndPointUrl, {username, password, email})
   .then(response => {
     const token = response.data.token;
     axios.get(EndPointUrl, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
   })
   console.log('Signup successful!');
   console.log(response.data);
    setLoading(false);
     navigate('/books', {replace:true})
   })
   .catch(error => {
      setLoading(false)
      setError(error.message)
     console.error('Signup failed:', error.response.data);
   });
}

  return (
    <Container>
      <BackgroundImage/>
      <div className='content'>
      <Header login/>
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Sign Up</h3>
            </div>
            <div className='container flex column'>
            <input
                    type='text'
                    placeholder='username'
                    name='username'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                />
                   <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <input
                    type='email'
                    placeholder='Email Address'
                    name='email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <button type='submit' onClick={submitForm}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
        
    </Container>
  )
}


const Container = styled.div`
    position: relative;
    .content{
        position:absolute; 
        left:0; 
        top: 0;
        background-color: rgba(0,0,0,0.5);
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-rows: 15vh 85vh;
        
        .form-container {
          gap:2rem; 
          height: 85vh;
          .form{
            padding: 2rem; 
            background-color: #000000;
            width:25vw; 
            gap:2rem; 
            color:white; 
            .container {
              gap:2rem;
              input{
                padding: 0.5rem 1rem; 
                width: 15rem; 
              }
              button {
                padding: 0.5rem 1rem;
                background-color: #e50914;
                border:none; 
                cursor: pointer; 
                color:white; 
                border-radius:0.2rem; 
                font-weight:bolder; 
                font-size:1.05rem;
              }
          }
          }
        }
        
        }`
        
        export default SignUp