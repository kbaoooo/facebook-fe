import classNames from 'classnames/bind';
import styles from './BubbleMenu.module.scss';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function BubbleMenu({ children, type = 'icon', contentTippy, customizeTippy }) {
    const navigate = useNavigate();

    const storedObj = JSON.parse(localStorage.getItem('login-status'));
    let user;

    if (storedObj && storedObj.isLogin && storedObj.userInfo) {
        user = storedObj.userInfo;
    }

    const handleLogOut = () => {
        navigate('/auth');
        localStorage.removeItem('login-status');
    };

    return customizeTippy ? (
        <HeadlessTippy
            delay={[0, 700]}
            interactive={true}
            placement="bottom-end"
            render={(attrs) => {
                return (
                    <div className={cx('tippy-menu')} tabIndex="-1" {...attrs}>
                        <div className={cx('tippy-item')}>
                            <span className={cx('icon')}>
                                <img
                                    src={`data:image/*;base64,${user?.avatar}`}
                                    alt={user?.username}
                                    className={cx('avatar')}
                                />
                            </span>
                            <p className={cx('title')}>{user?.username}</p>
                        </div>
                        <div className={cx('tippy-item')} onClick={handleLogOut}>
                            <span className={cx('icon')}>
                                <span className={cx('circle')}>
                                    <i
                                        data-visualcompletion="css-img"
                                        className={cx('x1b0d499', 'xep6ejk')}
                                        aria-hidden="true"
                                        style={{
                                            backgroundImage:
                                                'url("https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/OVddDNJZXpl.png?_nc_eui2=AeH9yXzJox7zisKkpHP4Q-ffa1V6zrUm_7xrVXrOtSb_vEzvgv3HI3-wlWM4doQnyP2nl07mg__EmegI01BD_f9X")',
                                            backgroundPosition: '0px -234px',
                                            backgroundSize: 'auto',
                                            width: '20px',
                                            height: '20px',
                                            backgroundRepeat: ' no-repeat',
                                            display: 'inline-block',
                                        }}
                                    ></i>
                                </span>
                            </span>
                            <p className={cx('title')}>Đăng xuất</p>
                        </div>
                    </div>
                );
            }}
        >
            {children}
        </HeadlessTippy>
    ) : (
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
