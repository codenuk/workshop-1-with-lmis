import React from "react";
import LogoPNG from '../../images/logo.png'
import styles from './index.module.css'

const NavtopBarComponent: React.FC = () => {
  return (
    <div className={styles.navtopbar}>
      <img src={LogoPNG} alt="logo" width={145} height={45} />
      <button className={styles.btnNavLogin} type="button">
        เข้าสู่ระบบ
      </button>
    </div>
  );
};

export default NavtopBarComponent;
