import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEarthAsia,
  faQuestion,
  faKeyboard,
  faUser,
  faGear,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

// Khai bao menu đã đăng nhập
const MENU_ITEMS_LOGIN = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'Trang cá nhân',
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Cài đặt',
  },
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Ngôn ngữ',
      data: [
        {
          type: 'language', // handle theo type
          code: 'vi',
          title: 'Tiếng việt',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language', // handle theo type
          code: 'vi',
          title: 'Tiếng việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faQuestion} />,
    title: 'Phản hồi và trợ giúp',
    to: 'feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Phím tắt trên bàn phím',
  },
  {
    icon: <FontAwesomeIcon icon={faRightFromBracket} />,
    title: 'Đăng xuất',
  },
];

export default MENU_ITEMS_LOGIN;
