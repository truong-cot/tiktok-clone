import React, { useState, useRef } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '../AccountItem';
import styles from './Search.module.scss';

function Search() {
  const [showResult, setShowResult] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([1, 2]);

  const inputRef = useRef();

  // Hàm xử lý
  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <Tippy
      visible={showResult && searchResult.length > 0}
      interactive={true}
      render={(attrs) => (
        <div className={styles.searchResult} tabIndex="-1" {...attrs}>
          <h3 className={styles.title}>Tài khoản</h3>
          <div className={styles.listAccount}>
            <AccountItem />
            <AccountItem />
            <AccountItem />
          </div>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={styles.search}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Tìm kiếm tài khoản và video"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />

        {!!searchValue && (
          <button className={styles.btnClear} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {/* <FontAwesomeIcon className={styles.iconLoading} icon={faSpinner} /> */}

        <button className={styles.btnSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </Tippy>
  );
}

export default Search;
