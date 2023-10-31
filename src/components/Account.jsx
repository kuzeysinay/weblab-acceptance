import React, { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { MdUpload } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import styles from './styles';
import { getStorage, ref, uploadBytes } from "firebase/storage";

const Account = () => {

  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [ProfilePic, setProfilePic] = useState({ userEmail: '', image: '' })

  const storage = getStorage();
  const storageRef = ref(storage, ProfilePic.image);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/login');
      console.log('You are logged out.')
    } catch (e) {
      console.log(e.message)
    }
  }

  const handleSubmit = (storageRef) => {
    uploadBytes(storageRef, ProfilePic.image).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  }




  return (
    <div className={styles.account_main_div}>
      <h1 className={styles.account_title}>Account</h1>

      <div className={styles.image_upload_section}>
        <input type="file" className={styles.image_selector} onChange={({ target }) => { setProfilePic({ ...ProfilePic, userEmail: user.email, image: target.value }) }} />
        <button className={styles.image_upload_button} onClick={handleSubmit}> Upload <MdUpload className='my-auto ml-2 text-xl'></MdUpload> </button>
      </div>
      <p className={styles.user_email}>User Email: {user && user.email} </p>

      <button onClick={handleLogout()} className={styles.logout_button}>
        Logout
      </button>
    </div>
  )
}

export default Account