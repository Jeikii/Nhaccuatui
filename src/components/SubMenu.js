import { useState } from 'react'
import { motion } from 'framer-motion'
// import { sidebarMenu } from '../utils/menu'
import { NavLink, useLocation } from 'react-router-dom'
import icons from '../utils/icons'

const { BsChevronDown } = icons

const SubMenu = ({ item }) => {
  const [subNav, setSubNav] = useState(false)

  const showSubNav = () => setSubNav(!subNav)

  const { pathname } = useLocation()

  return (
    <>
      <NavLink
        to={item.path}
        onClick={item.subNav && showSubNav}
        // className={`link${pathname.includes(item.path) && 'bg-[#28313C]'}`}
        className='w-[200px] h-8 relative font-medium ml-1 pl-[5px] flex items-center py-[6px] mb-[6px] hover:border-l-[#2DAAED] hover:border-l-[3px] hover:transition-all hover:duration-160 hover:ease-linear'
      >
        <div className='flex '>
          <span className='mx-[6px]'>{item.icons}</span>
          <span className='text-[#C9CDD0] text-[14px] ml-[6px] mb-[2px] '>
            {item.text}
          </span>
        </div>
        {item?.subNav ? (
          <BsChevronDown
            size={14}
            className={`${
              subNav && 'rotate-180'
            } absolute top-[11px] text-[#757B82] right-4 font-semibold ease-linear duration-300`}
          />
        ) : null}
      </NavLink>
      <motion.ul
        animate={
          subNav
            ? {
                height: 'fit-content',
              }
            : {
                height: 0,
              }
        }
        className='w-[200px] h-0 flex flex-col pl-16 overflow-hidden'
      >
        {item?.subNav?.map((item) => (
          <li>
            <NavLink to={item.path} className=''>
              <span className='text-[#848A91] text-[14px] h-10 font-medium flex items-center hover:text-[#ffff]'>
                {item.text}
              </span>
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  )
}

export default SubMenu
