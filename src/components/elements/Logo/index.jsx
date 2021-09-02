import React from 'react';
import logo from '../../../assets/images/measures.png'

export default function Logo({h, w}){
    return (
        <img src={logo} alt='One Health' height={h ?? '209'} width={w ?? '256'} />
    )
}