import icons from './icons'

const {
  AiOutlineSetting,
  GoHome,
  FiSearch,
  BiSolidBarChartAlt2,
  CiStar,
  SiSafari,
  MdHeadphones,
  BsChevronDown,
} = icons

export const sidebarMenu = [
  {
    path: 'tim-kiem',
    text: 'Tìm Kiếm',
    icons: <FiSearch size={22} color='#77e254' />,
  },
  {
    path: '',
    text: 'Trang Chủ',
    icons: <GoHome size={22} color='#29D7FF' />,
  },
  {
    path: '',
    text: 'Khám Phá',
    icons: <SiSafari size={22} color='#FF9B2D' />,
    iconDown: <BsChevronDown size={14} color='#f4f6f880' />,
    subNav: [
      {
        path: 'bai-hat',
        text: 'Bài hát',
      },
      {
        path: 'playlist',
        text: 'Playlist',
      },
      {
        path: 'video.html',
        text: 'Video',
      },
      {
        path: 'nghe-si.html',
        text: 'Nghệ Sỹ',
      },
    ],
  },
  {
    path: '',
    text: 'Nghe Gì Hôm Nay',
    icons: <MdHeadphones size={22} color='#FF9B2D' />,
    iconDown: <BsChevronDown size={14} color='#f4f6f880' />,
    subNav: [
      {
        path: 'chu-de.html',
        text: 'Chủ Đề',
      },
      {
        path: 'playlist',
        text: 'Tuyển Tập',
      },
      {
        path: 'top100',
        text: 'Top 100',
      },
    ],
  },
  {
    path: 'bai-hat',
    text: 'BXH NCT',
    icons: <BiSolidBarChartAlt2 size={22} color='#FFB353' />,
  },
  {
    path: 'kham-pha',
    text: 'Music 4U',
    icons: <CiStar size={22} color='#13F8E5' />,
  },
]
