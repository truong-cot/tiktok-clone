import React from 'react';
import Tippy from '@tippyjs/react/headless';

import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <a href="https://www.tiktok.com/about?lang=vi-VN">Giới thiệu</a>
        <a href="https://www.tiktok.com/browse?lang=vi-VN">TikTok Browse</a>
        <a href="https://newsroom.tiktok.com/?lang=vi-VN">Bảng tin</a>
        <a href="https://www.tiktok.com/about/contact?lang=vi-VN">Liên hệ</a>
        <a href="https://careers.tiktok.com?lang=vi-VN">Sự nghiệp</a>
        <a href="https://www.bytedance.com/?lang=vi-VN">ByteDance</a>
      </div>
      <div className={styles.item}>
        <a href="https://www.tiktok.com/forgood?lang=vi-VN">TikTok for Good</a>
        <a href="https://www.tiktok.com/business/?attr_medium=tt_official_site_guidance&amp;attr_source=tt_official_site&amp;lang=vi-VN&amp;refer=tiktok_web">
          Quảng cáo
        </a>
        <a href="https://developers.tiktok.com/?lang=vi-VN&amp;refer=tiktok_web">Developers</a>
        <a href="https://www.tiktok.com/transparency?lang=vi-VN">Transparency</a>
        <a href="https://www.tiktok.com/tiktok-rewards/vi-VN?lang=vi-VN">TikTok Rewards</a>
      </div>
      <div className={styles.item}>
        <a href="https://support.tiktok.com/vi-VN?lang=vi-VN">Trợ giúp</a>
        <a href="https://www.tiktok.com/safety?lang=vi-VN">An toàn</a>
        <a href="https://www.tiktok.com/legal/terms-of-service?lang=vi-VN">Điều khoản</a>
        <a href="https://www.tiktok.com/legal/privacy-policy-row?lang=vi-VN">Quyền riêng tư</a>
        <a href="https://www.tiktok.com/creators/creator-portal/en-us/?lang=vi-VN">Creator Portal</a>
        <a href="https://www.tiktok.com/community-guidelines?lang=vi-VN">Hướng dẫn Cộng đồng</a>
      </div>

      <div className={styles.item}>
        <Tippy
          interactive={true}
          render={(attrs) => (
            <div className={styles.tippy} tabIndex="-1" {...attrs}>
              <a className={styles.link} href="https://www.tiktok.com/legal/law-enforcement?lang=vi-VN">
                NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK
              </a>
            </div>
          )}
        >
          <span className={styles.des}>Thêm</span>
        </Tippy>
      </div>

      <div className={styles.item}>
        <span className={styles.span}>© 2022 TikTok</span>
      </div>
    </div>
  );
}

export default Footer;
