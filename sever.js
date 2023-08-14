const express = require("express"); //ดึงโทดูลออกมาใช้งาน
const app = express(); //ประกาศตัวแปร
app.get("/",(req,res)=>{
    res.json({message: "welcome to ITD102 appication "});
});

const PORT = 8080
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`); //ถ้าใช้$ ให้เปลี่ยน ' ' เป็น``

});//ฟังก์ชั่นไม่มีชื่อ