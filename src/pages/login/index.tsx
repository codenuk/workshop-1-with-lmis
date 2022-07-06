import React from "react";
import styles from './index.module.css'

const LoginPage: React.FC = () => {
  return (
    <div className={styles.logbody}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>กรุณาเข้าสู่ระบบ</h1>

        <div className={styles.wrapperInput}>
          <label htmlFor="fname">อีเมลผู้ใช้งาน</label>
          <input
            type="email"
            className={styles.txtinput}
            id="fname"
            name="fname"
            placeholder="อีเมลผู้ใช้งาน"
          />
        </div>

        <div className={styles.wrapperInput}>
          <label htmlFor="lname">รหัสผ่าน:</label>
          <input
            type="text"
            className="txtinput"
            id="lname"
            name="lname"
            placeholder="รหัสผ่าน"
          />
        </div>

        <div className={styles.wrapperbutton}>
          <button className={styles.btnLogin} type="submit">
            เข้าสู่ระบบ
          </button>
          <button className={styles.btnResetPass} type="reset">
            ลืมรหัสผ่าน
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
