import { React, useState } from 'react'
import logo from '../assets/logo.png'
import { sidebarMenu } from '../utils/menu'
import icons from '../utils/icons'
import SubMenu from './SubMenu'
import { sidebarTab } from '../utils/tabNavigates'

const { AiOutlineSetting, SiSafari, MdHeadphones, BsChevronDown } = icons

const SideBarLeft = () => {
  return (
    <div class='cursor-pointer h-screen'>
      {/* start logo */}
      <div class='w-full h-16 flex items-center justify-between'>
        <a href='#' className='flex items-center justify-center ml-4'>
          <img src={logo} alt='' class='w-[48px] h-[24.05px]' />
        </a>
        <a
          href='#'
          className='text-[12.4px] uppercase font-bold text-[#90969c] mr-4 border border-solid border-[rgba(244,246,248,0.1)] rounded-xl pt-1 pr-3 pb-1 pl-3 hover:text-[#2DAAED] hover:border-[#2DAAED] flex items-center justify-center'
        >
          Nâng cấp
        </a>
      </div>

      {/* start logister */}
      <div class='w-full h-14 bg-[#212A35] flex items-center justify-between'>
        <div class='mr-2'>
          <div class='h-14 ml-4  mr-[6px] flex items-center justify-center '>
            <p class='text-[13px] text-[rgba(244,246,248,0.88)] font-semibold tracking-wide'>
              <span class='hover:text-[#2DAAED] hover:border-[#2DAAED]'>Đăng nhập</span> |{' '}
              <span class='hover:text-[#2DAAED] hover:border-[#2DAAED]'>Đăng ký</span>
            </p>
          </div>
        </div>
        <div class='text-[rgba(244,246,248,0.7)] hover:text-[#2DAAED] hover:border-[#2DAAED] mr-2'>
          <AiOutlineSetting size={16} />
        </div>
      </div>

      {/*start path */}
      <div class='pt-4 pb-4 flex flex-col'>
        {sidebarMenu?.map((item) => (
          <div key={item.path}>
            <SubMenu item={item} />
          </div>
        ))}
        {/* <li className='list-none'>
          <div> 
            <div></div>
            <div className='w-50 h-8 relative font-medium ml-1 pl-[5px] py-[6px] mb-[6px] flex items-center'>
              <span className='mx-[6px]'>
                <SiSafari size={22} color='#FF9B2D' />
              </span>
              <span className='text-[#C9CDD0] text-[14px] ml-[6px] mb-[2px]'>
                Khám Phá
              </span>
              <span className='absolute right-[10px] text-[rgba(244,246,248,0.5)]'>
                <BsChevronDown />
              </span>
            </div>
            <div className='relative'>
              {sidebarTab.map((item) => (
                <NavLink to={item.path} className='w-100 h-8 flex items-center pb-2'>
                  <div className='w-1 h-1 absolute left-12 rounded-full bg-[#2DAAED]'></div>
                  <span className='text-[#848A91] text-[14px] font-medium pl-16'>
                    {item.text}
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </li>
        <li className='list-none'>
          <div>
            <div></div>
            <div className='w-50 h-8 relative font-medium ml-1 pl-[5px] py-[6px] mb-[6px] flex items-center'>
              <span className='mx-[5px]'>
                <MdHeadphones size={22} color='#FF9B2D' />
              </span>
              <span className='text-[#C9CDD0] text-[14px] ml-[6px] mb-[2px]'>
                Nghe Gì Hôm Nay
              </span>
              <span className='absolute right-[10px] text-[rgba(244,246,248,0.5)]'>
                <BsChevronDown />
              </span>
            </div>
          </div>
        </li> */}
      </div>
    </div>
  )
}

export default SideBarLeft
