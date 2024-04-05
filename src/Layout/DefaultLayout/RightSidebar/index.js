import classNames from 'classnames/bind';
import styles from './RightSide.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faSearch } from '@fortawesome/free-solid-svg-icons';
import SidebarItem from '../SidebarItem';

const cx = classNames.bind(styles);

const LIST_FRIENDS = [
    {
        path: '/id = 1',
        content: 'Khanh Bao',
        type: 'avatar',
        src: require('../../../assets/imgs/avatar.jpg'),
        alt: 'Khanh Bao',
    },
    {
        path: '/id = 1',
        content: 'Khanh Bao',
        type: 'avatar',
        src: require('../../../assets/imgs/avatar.jpg'),
        alt: 'Khanh Bao',
    },
    {
        path: '/id = 1',
        content: 'Khanh Bao',
        type: 'avatar',
        src: require('../../../assets/imgs/avatar.jpg'),
        alt: 'Khanh Bao',
    },
    {
        path: '/id = 1',
        content: 'Khanh Bao',
        type: 'avatar',
        src: require('../../../assets/imgs/avatar.jpg'),
        alt: 'Khanh Bao',
    },
    {
        path: '/id = 1',
        content: 'Khanh Bao',
        type: 'avatar',
        src: require('../../../assets/imgs/avatar.jpg'),
        alt: 'Khanh Bao',
    },
    {
        path: '/id = 1',
        content: 'Khanh Bao',
        type: 'avatar',
        src: require('../../../assets/imgs/avatar.jpg'),
        alt: 'Khanh Bao',
    },
    {
        path: '/id = 1',
        content: 'Khanh Bao',
        type: 'avatar',
        src: require('../../../assets/imgs/avatar.jpg'),
        alt: 'Khanh Bao',
    },
    {
        path: '/id = 1',
        content: 'Khanh Bao',
        type: 'avatar',
        src: require('../../../assets/imgs/avatar.jpg'),
        alt: 'Khanh Bao',
    },
    {
        path: '/id = 1',
        content: 'Khanh Bao',
        type: 'avatar',
        src: require('../../../assets/imgs/avatar.jpg'),
        alt: 'Khanh Bao',
    },
];

function RightSidebar() {
    return (
        <aside className={cx('wrapper')}>
            <header className={cx('header')}>
                <p className={cx('title')}>Người liên hệ</p>
                <div className={cx('icons')}>
                    <FontAwesomeIcon icon={faSearch} />
                    <FontAwesomeIcon icon={faEllipsis} />
                </div>
            </header>
            <div className={cx('friends')}>
                {LIST_FRIENDS.map((item, index) => (
                    <SidebarItem
                        key={index}
                        type={item.type}
                        content={item.content}
                        path={item.path}
                        src={item.src}
                        alt={item.alt}
                    />
                ))}
            </div>
        </aside>
    );
}

export default RightSidebar;
