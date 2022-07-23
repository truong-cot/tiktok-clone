import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './Hashtag.module.scss';

function HashtagItem({ data }) {
  return (
    <Link href={data.href}>
      <a className={styles.item}>
        <div className={styles.icon}>
          <Image src={data.hashtag ? data.iconHashtag : data.iconMusic} alt="icon" />
        </div>
        <p className={styles.content}>{data.content}</p>
      </a>
    </Link>
  );
}

export default HashtagItem;
