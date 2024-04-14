import classNames from 'classnames/bind';
import styles from './SquareMenu.module.scss';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function SquareMenu({ children, content, path = '/' }) {
    return (
        <Tippy content={content} arrow={false} offset={[0, 2]}>
            <div className={cx('icon')}>
                <NavLink to={path} className={(nav) => cx('icon-link', { active: nav.isActive })}>
                    <span className={cx('icon-content')}>{children}</span>
                </NavLink>
            </div>
        </Tippy>
    );
}

export default SquareMenu;
