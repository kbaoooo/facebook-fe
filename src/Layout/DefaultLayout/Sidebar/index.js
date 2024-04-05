import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import SidebarItem from '../SidebarItem';
import { Fragment, useState } from 'react';
import { ArrowDownIcon } from '~/assets/icons';
import Scrollbar from '~/components/Scrollbar';

const cx = classNames.bind(styles);

const SidebarListItems = [
    {
        type: 'avatar',
        path: '/profile',
        content: 'Khanh Bao',
    },
    {
        path: '/friends',
        content: 'Bạn bè',
        icon: (
            <Fragment>
                <i
                    data-visualcompletion="css-img"
                    className=""
                    style={{
                        backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png')",
                        backgroundPosition: '0 -296px',
                        backgroundSize: 'auto',
                        transform: 'scale(0.8)',
                        width: '36px',
                        height: '36px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block',
                    }}
                ></i>
            </Fragment>
        ),
    },
    {
        path: '/saved',
        content: 'Đã lưu',
        icon: (
            <Fragment>
                <i
                    data-visualcompletion="css-img"
                    className=""
                    style={{
                        backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png')",
                        backgroundPosition: '0 -185px',
                        backgroundSize: 'auto',
                        transform: 'scale(0.8)',
                        width: '36px',
                        height: '36px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block',
                    }}
                ></i>
            </Fragment>
        ),
    },
    {
        path: '/memory',
        content: 'Kỷ niệm',
        icon: (
            <Fragment>
                <i
                    data-visualcompletion="css-img"
                    className=""
                    style={{
                        backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png')",
                        backgroundPosition: '0 -444px',
                        backgroundSize: 'auto',
                        transform: 'scale(0.8)',
                        width: '36px',
                        height: '36px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block',
                    }}
                ></i>
            </Fragment>
        ),
    },
    {
        path: '/group',
        content: 'Nhóm',
        icon: (
            <Fragment>
                <i
                    data-visualcompletion="css-img"
                    className=""
                    style={{
                        backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png')",
                        backgroundPosition: '0 -37px',
                        backgroundSize: 'auto',
                        transform: 'scale(0.8)',
                        width: '36px',
                        height: '36px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block',
                    }}
                ></i>
            </Fragment>
        ),
    },
    {
        path: '/video',
        content: 'Video',
        icon: (
            <Fragment>
                <i
                    data-visualcompletion="css-img"
                    className=""
                    style={{
                        backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png')",
                        backgroundPosition: '0 -518px',
                        backgroundSize: 'auto',
                        transform: 'scale(0.8)',
                        width: '36px',
                        height: '36px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block',
                    }}
                ></i>
            </Fragment>
        ),
    },
    {
        path: '/marketplace',
        content: 'Marketplace',
        icon: (
            <Fragment>
                <i
                    data-visualcompletion="css-img"
                    className=""
                    style={{
                        backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png')",
                        backgroundPosition: '0 -407px',
                        backgroundSize: 'auto',
                        transform: 'scale(0.8)',
                        width: '36px',
                        height: '36px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block',
                    }}
                ></i>
            </Fragment>
        ),
    },
    {
        path: '/more',
        content: 'Xem thêm',
        icon: (
            <div className={cx('wrapper-arrow-icon')}>
                <div className={cx('arrow-icon')}>
                    <ArrowDownIcon className={cx('icon')} />
                </div>
            </div>
        ),
    },
];

function Sidebar() {
    const [isFocus, setIsFocus] = useState(false);
    console.log(isFocus);
    return (
        <aside className={cx('wrapper')} onMouseLeave={() => setIsFocus(false)} onMouseOver={() => setIsFocus(true)}>
            <div className={cx('content')}>
                <div className={cx('menu-aside')}>
                    {SidebarListItems.map((item, index) => (
                        <SidebarItem
                            classNames={cx('menu-item')}
                            key={index}
                            path={item.path}
                            content={item.content}
                            icon={item.icon}
                            type={item.type}
                        />
                    ))}
                </div>
                {isFocus && <Scrollbar />}
            </div>
        </aside>
    );
}

export default Sidebar;
