import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import styles from './styles';


const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password)
      navigate('/private_route')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }


  return (
    <div className={styles.main}>


      <form className={styles.form_div} onSubmit={handleSubmit}>
        <div>
          <h1 className={styles.header}>
            Giriş Yap
          </h1>
          <p className={styles.question}>
            Hesabın yok mu? <Link to='/signup' className={styles.question_link}> Kaydol.</Link>
          </p>
        </div>
        <div className={styles.input_div}>
          <label className={styles.input_label}>E-Posta</label>
          <input onChange={(e) => setEmail(e.target.value)} className={styles.input} type="email" placeholder='E-Posta' />
        </div>
        <div className={styles.input_div}>
          <label className={styles.input_label}>Parola</label>
          <input onChange={(e) => setPassword(e.target.value)} className={styles.input} type="password" placeholder='Parola' />
        </div>
        <button className={styles.button}>Giriş Yap</button>
      </form>

    </div>
  )
}

export default SignIn