"use client";
import React from "react";
import Snowfall from "react-snowfall";
import Nav from "../components/hotel/nav";
import Image from 'next/image';
export default function Page() {
  return <>
      <Nav />
      <Snowfall color="#fff" snowflakeCount={100} />
      <div className="float-left w-full -mt-56">
        <Image src="/static/hotel/dayuan.jpg" alt="bg" width={1920} height={1000}/>
        
      </div>
      <div className="bg-auto bg-local bg-no-repeat bg-center" name="about" id="About" style={{backgroundImage: `url`+`('/static/hotel/dating.jpg')`,height:`100%`}}> 
        <div className="">
          <article>
            <h1>About</h1>
            <p>
            "Because the mail never stops. It just keeps coming and coming and coming, there's never a let-up. It's relentless. Every day it piles up more and more and more. And you gotta get it out but the more you get it out the more it keeps coming in. And then the barcode reader breaks and it's Publisher's Clearing House day."

— Newman
            </p>
          </article>
        </div>
      </div>
  </>;
}