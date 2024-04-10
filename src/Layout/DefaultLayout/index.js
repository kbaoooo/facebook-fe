import Header from './Header';
import Sidebar from './Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { ArrowDownIcon } from '~/assets/icons';
import { Fragment } from 'react';
import SidebarMenu from './SidebarMenu';

const cx = classNames.bind(styles);

const SidebarListItems = [
    {
        src: require('../../assets/imgs/avatar.jpg'),
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

const LIST_FRIENDS = [
    {
        path: '/id = 1',
        content: 'Khanh Bao',
        type: 'avatar',
        src: require('../../assets/imgs/avatar.jpg'),
        alt: 'Khanh Bao',
    },
    {
        path: '/id = 1',
        content: 'Khanh Bao',
        type: 'avatar',
        src: require('../../assets/imgs/avatar.jpg'),
        alt: 'Khanh Bao',
    },
    {
        path: '/id = 1',
        content: 'Khanh Bao',
        type: 'avatar',
        src: require('../../assets/imgs/avatar.jpg'),
        alt: 'Khanh Bao',
    },
    {
        path: '/id = 1',
        content: 'Khanh Bao',
        type: 'avatar',
        src: require('../../assets/imgs/avatar.jpg'),
        alt: 'Khanh Bao',
    },
    {
        path: '/id = 1',
        content: 'Khanh Bao',
        type: 'avatar',
        src: require('../../assets/imgs/avatar.jpg'),
        alt: 'Khanh Bao',
    },
    {
        path: '/id = 1',
        content: 'Khanh Bao',
        type: 'avatar',
        src: require('../../assets/imgs/avatar.jpg'),
        alt: 'Khanh Bao',
    },
    {
        path: '/id = 1',
        content: 'Khanh Bao',
        type: 'avatar',
        src: require('../../assets/imgs/avatar.jpg'),
        alt: 'Khanh Bao',
    },
    {
        path: '/id = 1',
        content: 'Khanh Bao',
        type: 'avatar',
        src: require('../../assets/imgs/avatar.jpg'),
        alt: 'Khanh Bao',
    },
    {
        path: '/id = 1',
        content: 'Khanh Bao',
        type: 'avatar',
        src: require('../../assets/imgs/avatar.jpg'),
        alt: 'Khanh Bao',
    },
];

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('container')}>
                <Sidebar className="left">
                    <SidebarMenu data={SidebarListItems}/>
                </Sidebar>
                <div className={cx('content')}>{children}</div>
                <Sidebar className="right">
                    <SidebarMenu title={'Người liên hệ'} data={LIST_FRIENDS}/>
                </Sidebar>
            </div>
        </div>
    );
}

export default DefaultLayout;
