import React from 'react'
import "./home.css"

export default function Home() {
    return (
        <div className="home">
            <form>
                <input type="text" placeholder="الإسم واللقب" />
                <input type="text" placeholder="العمر" />
                <input type="date" placeholder="تاريخ الميلاد" />
                <input type="text" placeholder="رقم الهاتف" />
                <button>تسجيل</button>
            </form>
        </div>
    );
}
