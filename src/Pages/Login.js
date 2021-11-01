import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import UseAuth from '../Hooks/UseAuth';
import '../css/Login.css'
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const {AllContexts, useApi}=UseAuth();
    const history=useHistory()
    const location=useLocation()
    const redirect=location?.state?.from || '/home'
   const {setError,setUser,toggleLogin,error,signInWithGoogle,signInWithGithub,resgister,handleEmail,handlePassowrd,isLogin,handleResetPassword,handleNameChange}=AllContexts;
    return (
        <div style={{marginBottom:'24%'}}>
            <h2 className='col-sm-6 col-lg-6 mx-auto mb-5 mt-5  px-5'>Please <span style={{color:'rgb(7, 232, 248)'}}>{isLogin ? 'Login': 'Register'}</span> </h2>

            
                <br /><br />
           <div className='col-sm-6 col-lg-6 mx-auto  px-5 authen-btn'>
           <Button onClick={()=>signInWithGoogle()
                .then(result=>{
                    setUser(result.user)
                    history.push(redirect)
                })
                .catch(error=>{
                    setError(error.message)
                })
            } style={{borderRadius:"10px", marginRight:"3px" }} type="submit">Google SignIn</Button>
           <Button onClick={()=>signInWithGithub()
                .then(result=>{
                    setUser(result.user)
                    history.push(redirect)
                })
                .catch(error=>{
                    setError(error.message)
                })
        } style={{borderRadius:"10px", marginTop:"5px" }} type="submit">Github SignIn</Button>
           </div>
        </div>
    );
};

export default Login;