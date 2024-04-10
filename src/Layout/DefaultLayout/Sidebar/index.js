import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { useState } from 'react';
import Scrollbar from '~/components/Scrollbar';

const cx = classNames.bind(styles);

function Sidebar({ children, className }) {
    const [isFocus, setIsFocus] = useState(false);
    return (
        <aside className={cx('wrapper', className)} onMouseLeave={() => setIsFocus(false)} onMouseOver={() => setIsFocus(true)}>
            <div className={cx('content')}>
                {children}
                {isFocus && <Scrollbar />}
            </div>
        </aside>
    );
}

export default Sidebar;
