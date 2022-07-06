import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import AddPNG from "../../images/add.png";
import CalendarPNG from "../../images/calendar.png";
import EyePNG from "../../images/eye.png";

const MainPage: React.FC = () => {
  const [newCards, setNewCards] = useState<
    {
      projectName: string;
      customerName: string;
      type: string;
      sellName: string;
      createdAt: string;
      value: number;
    }[]
  >([]);

  useEffect(() => {
    console.log("Call API For Backend Response Data -> status 6");
    const responseNewCards = [
      {
        projectName: "ชื่อโครงการ #1",
        customerName: "ชื่อลูกค้า",
        type: "House",
        sellName: "ชื่อ นามสกุล",
        createdAt: "เคลื่อนไหวล่าสุด 2 วันที่แล้ว",
        value: 100000,
      },
      {
        projectName: "ชื่อโครงการ #2",
        customerName: "ชื่อลูกค้า",
        type: "House",
        sellName: "ชื่อ นามสกุล",
        createdAt: "เคลื่อนไหวล่าสุด 2 วันที่แล้ว",
        value: 100000,
      },
      {
        projectName: "ชื่อโครงการ #3",
        customerName: "ชื่อลูกค้า",
        type: "House",
        sellName: "ชื่อ นามสกุล",
        createdAt: "เคลื่อนไหวล่าสุด 2 วันที่แล้ว",
        value: 100000,
      },
    ];
    setNewCards(responseNewCards);
  }, []);

  return (
    <div className={styles.container}>
      <h1>CRM</h1>
      <p>ยินดีต้อนรับ [USER NAME]</p>
      <div className={styles.wrapperMenu}>
        <div className={styles.boxMenu}>
          <img src={AddPNG} alt="AddPNG" />
          <p>เพิ่มลูกค้า</p>
        </div>
        <div className={styles.boxMenu}>
          <img src={CalendarPNG} alt="CalendarPNG" />
          <p>ตารางทำงาน</p>
        </div>
        <div className={styles.boxMenu}>
          <img src={EyePNG} alt="EyePNG" />
          <p>ทีม Sale</p>
        </div>
      </div>

      <div className={styles.wrapperCard}>
        <div className={styles.columnCard}>
          <div className={`${styles.headCard} ${styles.new}`}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h4>โครงการใหม่</h4>
              <p>100,000,000 บาท</p>
            </div>
            <p className={styles.circle}>35</p>
          </div>
          {newCards.map((data: any, index: number) => {
            return (
              <div key={index} className={styles.card}>
                <h4>{data.projectName}</h4>
                <p>ลูกค้า: {data.customerName}</p>
                <p>มูลค่า: {data.value}</p>
                <p>ลักษณะงาน: {data.type}</p>
                <p>พนักงานขาย: {data.sellName}</p>
                <p className={styles.createdAt}>{data.createdAt}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
