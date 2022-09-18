import React,{useState,useEffect} from 'react';
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify}  from  './Toast';
import styles from './SignUp.module.css';
import { Link } from 'react-router-dom';


const Login = () => {

    const [data, setData] = useState({
        email:"",
        password:"",
    });

    // validation state
    const [errors,setErrors] = useState({});
    const [touched,setTouced] = useState({});

    useEffect(()=>{

       setErrors(validate(data ,"Login"))
       console.log(errors)
    },[data, touched])

    const focusHandler = (event)=> {
        setTouced({...touched , [event.target.name] : true })
    }

    const changeHandler = (event)=>{
     
            setData({...data , [event.target.name]:event.target.value})
    }

    const submitHandler = (event) => {

        event.preventDefault();
        
        // notify();

        if(!Object.keys(errors).length){
            
        notify("You loged in Successfully", "success");

        }else{

            notify("Invalid data", "error");
            
            setTouced({
                email:true,
                password:true,
                
            })
        }
    }

    // const notify = () => toast("Wow so easy!");

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Login</h2>

                <div className={styles.formfeild}>
                    <label>Email</label>
                    <input className={(errors.email && touched.email ) ? styles.uncompleted : styles.forminput}
                    type="text" name="email" value={data.email}
                    onChange={changeHandler} onFocus={focusHandler}>
                     </input>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>

                <div className={styles.formfeild}>
                    <label>Password</label>
                    <input className={(errors.password && touched.password ) ? styles.uncompleted : styles.forminput}
                     type="password" name="password"
                     value={data.password} onChange={changeHandler}
                     onFocus={focusHandler}>
                     </input>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                    
                </div>

                <div className={styles.formButtons}>
                    <Link to="/signup">Sign Up</Link>
                    <button type='submit'>Login</button>
                </div>

            </form>

            <ToastContainer />

        </div>
    );
};

export default Login;