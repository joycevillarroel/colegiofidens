import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

import './Bullet.css';

const Bullet = (props) => {

    const [ content, setContent ] = useState({
        whatsapp: false,
        email: false, 
        instagram: false,
        facebook: false,
    });

    useEffect(() => {
        const resetWhats = props.linkData.type === 'whatsapp' ? true : false;
        const resetEmail = props.linkData.type === 'email' ? true : false;
        const resetInsta = props.linkData.type === 'instagram' ? true : false;
        const resetFace = props.linkData.type === 'facebook' ? true : false;

        const resetAll = {
            whatsapp: resetWhats,
            email: resetEmail,
            instagram: resetInsta,
            facebook: resetFace,
        };

        setContent({ ...resetAll });
    }, [props]);

    return (
        <div className={`bullet ${props.linkData.class}`}>
            <a href={props.linkData.link} target="_blank" rel="noopener noreferrer">
                <div className="content">
                    {
                        content.whatsapp && <FaWhatsapp className="icon" />
                    }
                    {
                        content.instagram && <FaInstagram className="icon" />
                    }
                    {
                        content.facebook && <FaFacebook className="icon" />
                    }
                    {
                        content.email && <HiOutlineMail className="icon" />
                    }
                </div>
            </a>
        </div>
    );
};

export default Bullet;