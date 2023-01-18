// import {
//     ExitToAppOutlined,
//     FileCopyOutlined,
//     GroupOutlined,
//     HearingOutlined,
//     HomeOutlined,
//     List,
//     MovieCreationOutlined,
//     PhotoSizeSelectActualOutlined,
//     ScheduleOutlined,
//     Settings,
//     ShoppingBasketOutlined,
//   } from "@material-ui/icons";
import { AiFillHome, AiOutlineOrderedList, AiOutlineFileSearch, AiFillVideoCamera, AiFillSchedule, AiFillSetting, AiOutlineLogout } from 'react-icons/ai';
import { FaShopify } from 'react-icons/fa';
import { MdGroups, MdPhotoSizeSelectActual } from 'react-icons/md';


import React from "react";
import MenuLink from "../menulink/menulink";
import "./leftbar.css";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <MenuLink icon={<AiFillHome />
        } text="Homepage" />
        <MenuLink icon={<AiOutlineOrderedList />} text="Lists" />
        <MenuLink icon={<FaShopify />} text="Products" />
        <MenuLink icon={<MdGroups />} text="Groups" />
        <MenuLink icon={<AiOutlineFileSearch />} text="Pages" />
        <MenuLink icon={<MdPhotoSizeSelectActual />} text="Photos" />
        <MenuLink icon={<AiFillVideoCamera />} text="Videos" />
        <MenuLink icon={<AiFillSchedule />} text="Schedule" />
        <MenuLink icon={<AiFillSetting />} text="Settings" />
        <MenuLink icon={<AiOutlineLogout />} text="Logout" />
      </div>
    </div>
  );
}