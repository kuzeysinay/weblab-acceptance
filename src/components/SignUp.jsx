import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';
import styles from './styles';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/private_route')
    }
    catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }

  return (
    <div className={styles.main}>
      
      <form className={styles.form_div} onSubmit={handleSubmit}>
      <div>
        <h1 className={styles.header}>
          Kaydol
        </h1>
        <p className={styles.question}>
          Zaten bir hesabın var mı? <Link to='/login' className={styles.question_link}> Giriş Yap</Link>
        </p>
      </div>
        <div className={styles.input_div}>
          <label className={styles.input_label}>E-Posta</label>
          <input onChange={(e) => setEmail(e.target.value)} className={styles.input} type="email" placeholder='E-Posta'/>
        </div>
        <div className={styles.input_div}>
          <label className={styles.input_label}>Parola</label>
          <input onChange={(e) => setPassword(e.target.value)} className={styles.input} type="password" placeholder='Parola' />
        </div>
        <button className={styles.button}>Kaydol</button>
      </form>
    </div>
  )
}

export default SignUp