import React from 'react';
import pic from '../img/millennium_falcon_blast_off.jpeg';
import pic2 from '../img/millennium_falcon_blast_off.jpeg';


export default function Home() {
    return (
  /* background: url("./img/millennium_falcon_blast_off.jpeg") no-repeat center top; */
        <div className="home">
            <img src={pic}  alt={pic2} srcset="" />
        </div>
    )
}
