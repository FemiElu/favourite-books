import React,{ useEffect, useState } from 'react'; 
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import BackgroundImage from '../components/Background';
import Header from '../components/Header';



const Login = () => {



  const navigate = useNavigate(); 


  const url = "http://3.236.191.157:4000/auth/login";

  //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2N…E3M30.Ng0mgHIljRjUglH8X4i2TPgAP9GDpDmShHavUZugUb0"
   const accessToken = localStorage.getItem('access_token');
  
const myHeader = {Authorization: `Bearer ${accessToken}`};
const encodedHeader = encodeURIComponent(myHeader);
 

  
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post(url, {
        email: email,
        password: password
      },{
        headers: {
          myheaders: encodedHeader
        }
      })
        .then(response => {
          console.log(response.data);
         const  token = response.data.token
          localStorage.setItem('access_token', token);
          navigate('/books', {replace:true})
        })
        .catch(error => {
          console.error(error);
        });
    };
  


  return (
    <Container>
      <BackgroundImage/>
      <div className='content'>
      <Header/>
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className='container flex column'>
              
                <input
                    type='email'
                    placeholder='Email Address'
                    name='email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                 
                 <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                />


                <button type='submit' onClick={handleSubmit}>Login</button>
              
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
        
        export default Login