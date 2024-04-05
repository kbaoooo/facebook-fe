import Header from './Header';
import Sidebar from './Sidebar';
import RightSide from './RightSidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
                <RightSide />
            </div>
        </div>
    );
}

export default DefaultLayout;
