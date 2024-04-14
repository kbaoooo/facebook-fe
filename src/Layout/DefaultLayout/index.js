import Header from './Header';
import Sidebar from './Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { ArrowDownIcon } from '~/assets/icons';
import { Fragment, useEffect, useState } from 'react';
import SidebarMenu from './SidebarMenu';
import { useNavigate } from 'react-router-dom';
import request from '~/utils/request';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [listFriends, setListFriends] = useState([]);
    const navigate = useNavigate();

    const storedObj = JSON.parse(localStorage.getItem('login-status'));
    let user;

    if (storedObj && storedObj.isLogin && storedObj.userInfo) {
        user = storedObj.userInfo;
    }

    useEffect(() => {
        if(!storedObj || !storedObj.isLogin) {
            navigate('/auth')
        }
    },[storedObj])

    const SidebarListItems = [
        {
            src: `data:image/*;base64,${user?.avatar}`,
            type: 'avatar',
            path: '/profile',
            content: user?.username,
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

    useEffect(() => {
        async function fetchData() {
            try {
                let response = await request.get(`friends/${user?.id}`);
                response = response.data;
                if (response.status === 200 && response.message === 'OK') {
                    if (response.data && response.data.length > 0) {
                        const modifyListFriends = [...response.data];

                        for (let i = 0; i < modifyListFriends.length; i++) {
                            // convert to avatar to string
                            const avatarData = modifyListFriends[i]?.avatar.data;
                            const binaryString = String.fromCharCode.apply(null, avatarData);

                            // Assuming createdAtStr and updatedAtStr are your date strings in the format "yyyy-mm-ddThh:mm:ss.fffZ"
                            const createdAtStr = modifyListFriends[i].created_at;
                            const updatedAtStr = modifyListFriends[i].updated_at;

                            // Function to convert ISO date string to "dd/mm/yyyy" format
                            const formatDate = (isoDateString) => {
                                const dateObject = new Date(isoDateString);
                                const day = dateObject.getDate().toString().padStart(2, '0');
                                const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
                                const year = dateObject.getFullYear();
                                return `${day}/${month}/${year}`;
                            };

                            // Convert created_at and updated_at dates to "dd/mm/yyyy" format
                            const formattedCreatedAt = formatDate(createdAtStr);
                            const formattedUpdatedAt = formatDate(updatedAtStr);
                            modifyListFriends[i].type = 'avatar';
                            modifyListFriends[i].src = `data:image/*;base64,${binaryString}`;
                            modifyListFriends[i].created_at = formattedCreatedAt;
                            modifyListFriends[i].updated_at = formattedUpdatedAt;
                        }
                        const friends = modifyListFriends;
                        console.log(friends);
                        setListFriends(friends);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [user?.id]);

    return (
        <div>
            <Header />
            <div className={cx('container')}>
                <Sidebar className="left">
                    <SidebarMenu data={SidebarListItems} />
                </Sidebar>
                <div className={cx('content')}>{children}</div>
                <Sidebar className="right">
                    <SidebarMenu title={'Người liên hệ'} data={listFriends} />
                </Sidebar>
            </div>
        </div>
    );
}

export default DefaultLayout;
