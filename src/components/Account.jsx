import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { MdUpload } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import styles from './styles';

const Account = () => {

  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/login');
      console.log('You are logged out.')
    } catch (e) {
      console.log(e.message)
    }
  }

  function handleChange() { }

  return (
    <div className={styles.account_main_div}>
      <h1 className={styles.account_title}>Account</h1>

      <div className={styles.image_upload_section}>      
        <input type="file" className={styles.image_selector} onChange={handleChange} />
        <button className={styles.image_upload_button}> Upload <MdUpload className='my-auto ml-2 text-xl'></MdUpload> </button>
      </div>
      <p className={styles.user_email}>User Email: {user && user.email} </p>

      <button onClick={handleLogout} className={styles.logout_button}>
        Logout
      </button>
    </div>
  )
}

export default Account