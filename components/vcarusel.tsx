"use client";
// import { useState } from 'react';


import CaruselElement from './caruselelement'


export default function VCarusel() {


  function current_heading(heading: string){
    console.log(heading);
    const heading_contents = document.getElementsByClassName("heading_content");
    for (let i = 0; i < heading_contents.length; i++) {
      if (!heading_contents[i].classList.contains("hidden")) {
        heading_contents[i].classList.add("hidden");
      }
    }
    if (heading === "DESIGN & BRANDING") {
      document.getElementById("design_content")?.classList.remove("hidden");
    }
    else if (heading === "MARKETING FUNDAMENTALS") {
      document.getElementById("marketing_content")?.classList.remove("hidden");
    }
    else if (heading === "PR & INFLUENCER") {
      document.getElementById("pr_content")?.classList.remove("hidden");
    }
    else if (heading === "COMMUNITY BUILDING & DEVELOPMENT") {
      document.getElementById("community_content")?.classList.remove("hidden");
    }
    else if (heading === "DIGITAL TRAFFIC") {
      document.getElementById("traffic_content")?.classList.remove("hidden");
    }
  }


    return (
      <>
        <div className="flex-col">
          
          {/* <CaruselElement 
            content="COMMUNITY BUILDING & DEVELOPMENT"
            init_pos={3}
          /> */}
          <div className='absolute'>
          <CaruselElement content="DIGITAL TRAFFIC" init_pos={2} ch_head={current_heading} />
          </div>
          <div className='absolute'>

          <CaruselElement content="DESIGN & BRANDING" init_pos={1} ch_head={current_heading}/>
          </div>
          <div className='absolute'>
          <CaruselElement content="MARKETING FUNDAMENTALS" init_pos={0} ch_head={current_heading}/>
          </div>
          <div className='absolute'>
          <CaruselElement content="PR & INFLUENCER" init_pos={-1} ch_head={current_heading}/>
          </div>
          <div className='absolute'>
          <CaruselElement
            content="COMMUNITY BUILDING & DEVELOPMENT"
            init_pos={-2}
            ch_head={current_heading}
          />
          </div>
          {/* <CaruselElement content="DIGITAL TRAFFIC" init_pos={-3} /> */}
        </div>
      </>
    );
}