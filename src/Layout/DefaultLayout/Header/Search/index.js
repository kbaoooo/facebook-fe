import { useState, useRef, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [isFocus, setIsFocus] = useState(false);

    const inputRef = useRef();

    const handleChangeSearch = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        } else {
            return;
        }
    };

    return (
        <div className={cx('search')}>
            {!isFocus ? <FontAwesomeIcon icon={faSearch} className={cx('search-icon')} /> : <div className={cx('search-icon-padding')}/>}
            <input
                className={cx('search-input')}
                type="text"
                ref={inputRef}
                name=""
                value={searchValue}
                placeholder="Tìm kiếm trên Facebook"
                onChange={handleChangeSearch}
                onFocus={() => {
                    setIsFocus(true);
                }}
                onBlur={() => {
                    setIsFocus(false);
                }}
            />
        </div>
    );
}

export default Search;
