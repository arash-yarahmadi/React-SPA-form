import React,{useState,useEffect} from 'react';
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify}  from  './Toast';
import styles from './SignUp.module.css';
import { Link } from 'react-router-dom';


const SignUp = () => {

    const [data, setData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:false,
    });

    // validation state
    const [errors,setErrors] = useState({});
    const [touched,setTouced] = useState({});

    useEffect(()=>{

       setErrors(validate(data,"SignUp"))
       console.log(errors)
    },[data, touched])

    const focusHandler = (event)=> {
        setTouced({...touched , [event.target.name] : true })
    }

    const changeHandler = (event)=>{
       if(event.target.name === "isAccepted"){
            setData({...data , [event.target.name]:event.target.checked})
       }else{
            setData({...data , [event.target.name]:event.target.value})
       }

       console.log(data);
    }

    const submitHandler = (event) => {

        event.preventDefault();
        
        // notify();

        if(!Object.keys(errors).length){
            
        notify("You Signed Up Successfully", "success");

        }else{

            notify("Invalid data", "error");
            
            setTouced({
                name:true,
                email:true,
                password:true,
                confirmPassword:true,
                isAccepted:true,
            })
        }
    }

    // const notify = () => toast("Wow so easy!");

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>SignUP</h2>
                <div className={styles.formfeild}>
                    <label>Name</label>
                    <input
                     className={(errors.name && touched.name ) ? styles.uncompleted : styles.forminput}
                     type="text" name="name"
                     value={data.name}
                     onChange={changeHandler} onFocus={focusHandler}>
                     </input>

                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>

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

                <div className={styles.formfeild}>
                    <label>Confirm Password</label>
                    <input className={styles.uncompleted} type="password" name="confirmPassword" value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler}></input>
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>

                <div className={styles.formfeild}>
                    <div  className={styles.checkBoxContainer}>
                        <label>I accept terms of privacy policy</label>
                        <input
                        type="checkbox" name="isAccepted"
                        value={data.isAccepted} onChange={changeHandler}
                        onFocus={focusHandler}>
                        </input>
                    </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>

                <div className={styles.formButtons}>
                    <Link to="/login">Login</Link>
                    <button type='submit'>SignUp</button>
                </div>

            </form>

            <ToastContainer />

        </div>
    );
};

export default SignUp;