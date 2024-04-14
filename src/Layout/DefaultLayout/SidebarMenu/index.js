import classNames from 'classnames/bind';
import styles from './SidebarMenu.module.scss';
import SidebarItem from '../SidebarItem';

const cx = classNames.bind(styles);

function SidebarMenu({ data, title }) {
    return (
        <div className={cx('menu-aside')}>
            {title && <p className={cx('title')}>{title}</p>}
            {data.map((item, index) => (
                <SidebarItem
                    classNames={cx('menu-item')}
                    key={index}
                    path={item.path}
                    content={item.content || item?.username}
                    icon={item.icon}
                    type={item.type}
                    src={item.src}
                />
            ))}
        </div>
    );
}

export default SidebarMenu;
