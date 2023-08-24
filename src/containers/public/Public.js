import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideBarLeft, SideBarRight } from '../../components'

const Public = () => {
  return (
    <div class='w-full flex overflow-y-auto bg-[#1D2631]'>
      <div class='w-[200px] border-r border-[#28313C]'>
        <SideBarLeft />
      </div>
      <div class='flex-auto'>
        <Outlet />
      </div>
      <div class='w-[320px]'>
        <SideBarRight />
      </div>
    </div>
  )
}

export default Public
