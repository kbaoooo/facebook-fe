import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './SidebarItem.module.scss';
const cx = classNames.bind(styles);

function SidebarItem({ content, icon, path, type = 'icon', src, alt, classNames }) {
    return (
        <div className={cx('wrapper')}>
            <Link path={path} className={cx('sidebar-link', classNames)}>
                {type === 'avatar' ? (
                    <div className={cx('avatar-img')}>
                        <img className={cx('avatar')} src={src} alt={alt} />
                    </div>
                ) : (
                    icon
                )}
                <span className={cx('content')}>{content}</span>
            </Link>
        </div>
    );
}

export default SidebarItem;
