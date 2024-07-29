'use client'
import React, { useState } from 'react'
import './Achievement.css'
import { FaBuilding } from "react-icons/fa"
import { MdOutlinePointOfSale } from "react-icons/md";
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";

const Achievement = () => {

    const [achievement, setAchievement] = useState([{
        id: 1,
        title: 'Completed Property',
        num: 2400,
        icon: <FaBuilding />
    },
    {
        id: 2,
        title: 'Property Sale',
        num: 3000,
        icon: <MdOutlinePointOfSale />
    },
    {
        id: 3,
        title: 'Apartment Rent',
        num: 100,
        icon:<HiOutlineCubeTransparent />
    },
    {
        id: 4,
        title: 'Happy Client',
        num: 4500,
        icon:<IoIosPeople />
    }
    ])
    return (
        <div className="achievement-wrapper">
            <div className="heading">
                <h2>Achievement</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.sumenda.</p>
            </div>

            <div className="card-container grid-4">
                {achievement.map((item) => (
                    <div className="card" key={item.id}>
                        <div className="card-icon">
                            <span>{item.icon}</span>
                        </div>
                        <div className="card-body">
                            <h3>{item.num}+</h3>
                            <p>{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Achievement