import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { HomeIcon, FriendsIcon, MarketIcon, VideoIcon, GameIcon, FacebookIcon } from '~/assets/icons';
import Search from './Search';
import BubbleMenu from './BubbleMenu';
import { MenuIcon, MessIcon, NotiIcon } from '~/assets/icons';
import SquareMenu from './SquareMenu';

const cx = classNames.bind(styles);

function Header() {
    const storedObj = JSON.parse(localStorage.getItem('login-status'));
    let userData;

    if (storedObj && storedObj.isLogin && storedObj.userInfo) {
        userData = storedObj.userInfo;
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('left')}>
                <FacebookIcon className={cx('facebook-icon')} />
                <Search />
            </div>
            <div className={cx('middle')}>
                <div className={cx('icons')}>
                    <SquareMenu content={'Trang chủ'} path="/">
                        <HomeIcon />
                    </SquareMenu>
                    <SquareMenu content={'Bạn bè'} path="/friends">
                        <FriendsIcon />
                    </SquareMenu>
                    <SquareMenu content={'Video'} path="/video">
                        <VideoIcon />
                    </SquareMenu>
                    <SquareMenu content={'Marketplace'} path="/marketplace">
                        <MarketIcon />
                    </SquareMenu>
                    <SquareMenu content={'Trò chơi'} path="/game">
                        <GameIcon />
                    </SquareMenu>
                </div>
            </div>
            <div className={cx('right')}>
                <BubbleMenu contentTippy="Menu">
                    <MenuIcon />
                </BubbleMenu>
                <BubbleMenu contentTippy="Messenger">
                    <MessIcon />
                </BubbleMenu>
                <BubbleMenu contentTippy="Thông báo">
                    <NotiIcon />
                </BubbleMenu>
                <BubbleMenu type="avatar" contentTippy="Tài khoản" customizeTippy={true}>
                    <img src={`data:image/*;base64,${userData?.avatar}`} alt="avatar" className={cx('avatar')} />
                </BubbleMenu>
            </div>
        </header>
    );
}

export default Header;
