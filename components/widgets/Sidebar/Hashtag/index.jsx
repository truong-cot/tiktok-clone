import React from 'react';
import icons from '../../../../assets/icons';
import HashtagItem from './Hashtag.item';

import styles from './Hashtag.module.scss';

function Hashtag() {
  const data = [
    {
      hashtag: true,
      iconHashtag: icons.iconHashtag,
      iconMusic: icons.iconMusic,
      content: 'truongdb',
      href: '/tag',
    },
    {
      hashtag: true,
      iconHashtag: icons.iconHashtag,
      iconMusic: icons.iconMusic,
      content: 'truongdb',
      href: '/tag',
    },
    {
      hashtag: true,
      iconHashtag: icons.iconHashtag,
      iconMusic: icons.iconMusic,
      content: 'truongdb',
      href: '/tag',
    },
    {
      hashtag: true,
      iconHashtag: icons.iconHashtag,
      iconMusic: icons.iconMusic,
      content: 'asdfsdgdfg',
      href: '/tag',
    },
    {
      hashtag: false,
      iconHashtag: icons.iconHashtag,
      iconMusic: icons.iconMusic,
      content: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n',
      href: '/music',
    },
    {
      hashtag: false,
      iconHashtag: icons.iconHashtag,
      iconMusic: icons.iconMusic,
      content: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n',
      href: '/music',
    },
    {
      hashtag: true,
      iconHashtag: icons.iconHashtag,
      iconMusic: icons.iconMusic,
      content: 'asdfsdgdfg',
      href: '/tag',
    },
  ];

  return (
    <div className={styles.container}>
      {data.map((data, index) => (
        <HashtagItem key={index} data={data} />
      ))}
    </div>
  );
}

export default Hashtag;
