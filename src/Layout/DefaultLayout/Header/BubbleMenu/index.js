import classNames from 'classnames/bind';
import styles from './BubbleMenu.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

function BubbleMenu({ children, type = 'icon', contentTippy }) {
    return (
        <Tippy content={contentTippy} arrow={false} offset={[0, 10]}>
            <div
                className={cx('wrapper', {
                    [type]: type,
                })}
            >
                {children}
            </div>
        </Tippy>
    );
}

export default BubbleMenu;
