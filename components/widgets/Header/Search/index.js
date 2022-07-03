import React, { useState, useRef, useEffect } from 'react';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AccountItem from '../AccountItem';
import searchApi from '../../../../api/searchUser';
import useDebounce from '../../../../common/hooks/useDebounce';
import { faMagnifyingGlass, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(true);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const debounced = useDebounce(searchValue, 700);

  // Hàm xử lý
  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  // call api
  useEffect(() => {
    if (searchValue.trim()) {
      const searchUser = async () => {
        setLoading(true);
        try {
          const res = await searchApi.searchUser(encodeURIComponent(debounced));
          setSearchResult(res.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
      searchUser();
    }
  }, [debounced, searchValue]);

  return (
    <Tippy
      visible={showResult && searchResult?.length > 0 && searchValue != ''}
      interactive={true}
      render={(attrs) => (
        <div className={styles.searchResult} tabIndex="-1" {...attrs}>
          <h3 className={styles.title}>Tài khoản</h3>
          <div className={styles.listAccount}>
            {searchResult.map((item) => (
              <AccountItem key={item.id} data={item} />
            ))}
          </div>
        </div>
      )}
      onClickOutside={() => setShowResult(false)}
    >
      <div className={styles.search}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Tìm kiếm tài khoản và video"
          spellCheck={false}
          onChange={handleChange}
          onFocus={() => setShowResult(true)}
        />

        {!!searchValue && !loading && (
          <button className={styles.btnClear} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && <FontAwesomeIcon className={styles.iconLoading} icon={faSpinner} />}

        <button className={styles.btnSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </Tippy>
  );
}

export default Search;
