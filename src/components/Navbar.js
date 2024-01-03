import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/landing-page",
            name: "Landing Page",
            icon: <FaTh />
        },
        {
            path: "/broker",
            name: "Broker",
            icon: <FaUserAlt />
        },
        {
            path: "/analytics",
            name: "Profile",
            icon: <FaRegChartBar />
        },
        {
            path: "/comment",
            name: "Comment",
            icon: <FaCommentAlt />
        },
        {
            path: "/product",
            name: "Product",
            icon: <FaShoppingBag />
        },
        {
            path: "/productList",
            name: "Product List",
            icon: <FaThList />
        }
    ];

    return (
        <div className="grid grid-cols-8">
            <div className={`sidebar ${isOpen ? 'w-[200px]' : 'w-[50px]'}`}>
                <div className="top_section">
                    <h1 className={`logo ${isOpen ? 'block' : 'hidden'}`}>Logo</h1>
                    <div className="bars" style={{ marginLeft: isOpen ? '50px' : '0px' }}>
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                <div className='bg-gray-200 h-[100%]'>

                {
                    menuItem.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className="flex items-center space-x-6  mt-4"
                            activeClassName="active"
                        >
                            <div className="icon">{item.icon}</div>
                            <div className={`link_text ${isOpen ? 'block' : 'hidden'}`}>{item.name}</div>
                        </NavLink>
                    ))
                }
                </div>
            </div>
            <div className='col-span-7 mt-8 py-8 px-16'>

            <main>{children}</main>
            </div>
        </div>
    );
};

export default Sidebar;
