"use client";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { useState } from "react";

export default function Tabcontent() {
  let [index, setIndex] = useState(0);

  let tabs = [
    [
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp1.ad8cf8b8.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp2.324dd6f5.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp3.1bf6f3d5.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp4.558afa27.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp5.72874b86.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp6.e539ab52.png&w=384&q=75",
    ],
    [
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp2.324dd6f5.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp3.1bf6f3d5.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp4.558afa27.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp5.72874b86.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp6.e539ab52.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp1.ad8cf8b8.png&w=384&q=75",
    ],
    [
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp3.1bf6f3d5.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp4.558afa27.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp5.72874b86.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp6.e539ab52.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp1.ad8cf8b8.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp2.324dd6f5.png&w=384&q=75",
    ],
    [
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp4.558afa27.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp5.72874b86.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp6.e539ab52.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp1.ad8cf8b8.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp2.324dd6f5.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp3.1bf6f3d5.png&w=384&q=75",
    ],
    [
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp5.72874b86.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp6.e539ab52.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp1.ad8cf8b8.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp2.324dd6f5.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp3.1bf6f3d5.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp4.558afa27.png&w=384&q=75",
    ],
    [
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp6.e539ab52.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp1.ad8cf8b8.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp2.324dd6f5.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp3.1bf6f3d5.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp4.558afa27.png&w=384&q=75",
      "https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstp5.72874b86.png&w=384&q=75",
    ],
  ];

  let tabheader = [
    "STP",
    "ETP",
    "RO",
    "DEMINERALIZED PLANT (DM)",
    "FILTRATION PLANT",
    "ULTRA-FILTRATION PLANT (UF)",
  ];

  // update images data

  function handleimages(idx) {
    setIndex(idx);
  }

  return (
    <div className="w-[420px] md:w-[100%] bg-white md:p-0 p-5 flex flex-col items-start content-end gap-[45px] self-stretch">
      <div className="gap-[24px] self-stretch items-end content-end flex-wrap flex lg:px-20 pb-2 pt-10 bg-white w-[100%]">
        {tabheader &&
          tabheader.map((val, idx) => (
            <div
              onClick={() => setIndex(idx)}
              key={idx}
              className={`flex md:h-[23px] py-[24px] px-[42px] md:w-auto justify-center items-center rounded-[4px] w-[44px] h-[27px] cursor-pointer  ${
                idx == index ? "bg-[#00973D]" : "bg-[#FDFDFC]"
              }  shadow-[0px_4px_10px_0px_rgba(68,68,68,0.20)]`}
            >
              <p className="text-[#2A2A2A] text-center font-lato text-[10px] md:text-[20px] font-[400] leading-[112%] ">
                {val}
              </p>
            </div>
          ))}
      </div>
      <div className="gap-[24px] self-stretch items-end content-end flex-wrap flex lg:px-20 pb-10 pt-2 bg-white w-[100%]">
        {tabs &&
          tabs[index].map((val, idx) => (
            <div key={idx}>
              <img src={val} alt="" className="shrink-0 rounded-[24px]" />
            </div>
          ))}
      </div>
    </div>
  );
}
