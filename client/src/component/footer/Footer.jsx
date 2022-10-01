import React from 'react'

const Footer = () => {
    const footerStyle ={
        footer: "w-full  text-xs max-w-5xl " ,
        footerList :"w-full flex p-3 justify-between mb-[50px]",
        list : "list-none p-0",
        item: "mb-[10px] text-base text-[#003580] cursor-pointer"
    }
  return (
    <div className={footerStyle.footer}>
    <div className={footerStyle.footerList}>
      <ul className={footerStyle.list}>
        <li className={footerStyle.item}>Countries</li>
        <li className={footerStyle.item}>Regions</li>
        <li className={footerStyle.item}>Cities</li>
        <li className={footerStyle.item}>Districts</li>
        <li className={footerStyle.item}>Airports</li>
        <li className={footerStyle.item}>Hotels</li>
      </ul>
      <ul className={footerStyle.list}>
        <li className={footerStyle.item}>Homes </li>
        <li className={footerStyle.item}>Apartments </li>
        <li className={footerStyle.item}>Resorts </li>
        <li className={footerStyle.item}>Villas</li>
        <li className={footerStyle.item}>Hostels</li>
        <li className={footerStyle.item}>Guest houses</li>
      </ul>
      <ul className={footerStyle.list}>
        <li className={footerStyle.item}>Unique places to stay </li>
        <li className={footerStyle.item}>Reviews</li>
        <li className={footerStyle.item}>Unpacked: Travel articles </li>
        <li className={footerStyle.item}>Travel communities </li>
        <li className={footerStyle.item}>Seasonal and holiday deals </li>
      </ul>
      <ul className={footerStyle.list}>
        <li className={footerStyle.item}>Car rental </li>
        <li className={footerStyle.item}>Flight Finder</li>
        <li className={footerStyle.item}>Restaurant reservations </li>
        <li className={footerStyle.item}>Travel Agents </li>
      </ul>
      <ul className={footerStyle.list}>
        <li className={footerStyle.item}>Curtomer Service</li>
        <li className={footerStyle.item}>Partner Help</li>
        <li className={footerStyle.item}>Careers</li>
        <li className={footerStyle.item}>Sustainability</li>
        <li className={footerStyle.item}>Press center</li>
        <li className={footerStyle.item}>Safety Resource Center</li>
        <li className={footerStyle.item}>Investor relations</li>
        <li className={footerStyle.item}>Terms & conditions</li>
      </ul>
    </div>
    <div className="text-sm text-gray-500">Copyright © 2022 masala RISOTTO.</div>
  </div>
  )
}

export default Footer