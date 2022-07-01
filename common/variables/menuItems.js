import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia, faQuestion, faKeyboard } from '@fortawesome/free-solid-svg-icons';

// Khai bao menu chưa đăng nhập
const MENU_ITEMS = [
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
];

export default MENU_ITEMS;
