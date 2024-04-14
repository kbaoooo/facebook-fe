import Story from './Story';
import Item from './Story/Item';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { CustomNextArrow, CustomPrevArrow } from './CustomArrow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Post from './Post';
import NewFeed from './NewFeed';
import { useEffect, useState, useLayoutEffect } from 'react';
import * as request from '~/utils/request';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const STORY_ITEMS = [
    {
        account: 'Hello Dev',
        src: require('../../assets/imgs/story.jpg'),
    },
    {
        account: 'Hello Dev',
        src: require('../../assets/imgs/story.jpg'),
    },
    {
        account: 'Hello Dev',
        src: require('../../assets/imgs/story.jpg'),
    },
    {
        account: 'Hello Dev',
        src: require('../../assets/imgs/story.jpg'),
    },
    {
        account: 'Hello Dev',
        src: require('../../assets/imgs/story.jpg'),
    },
    {
        account: 'Hello Dev',
        src: require('../../assets/imgs/story.jpg'),
    },
];

function Home() {
    const [newFeedData, setNewFeedData] = useState([]);
    const navigate = useNavigate();

    let user;
    const storedObj = JSON.parse(localStorage.getItem('login-status'));
    if (storedObj && storedObj.isLogin && storedObj.userInfo) {
        user = storedObj.userInfo;
    }

    useLayoutEffect(() => {
        if(!storedObj || !storedObj.isLogin) {
            navigate('/auth')
        }
    },[storedObj])

    useEffect(() => {
        request.get('posts').then((res) => {
            if (res.status === 200 && res.message === 'OK' && res.data) {
                const data = res.data;
                setNewFeedData(data);
            }
        });
    }, []);

    const handleLikePost = (e) => {
        console.log(e);
        const postInfo = [...newFeedData];

    }

    const settings = {
        infinite: false,
        speed: 100,
        slidesToShow: 4,
        slidesToScroll: 2.5,
        nextArrow: (
            <CustomNextArrow>
                <FontAwesomeIcon icon={faChevronRight} />
            </CustomNextArrow>
        ),
        prevArrow: (
            <CustomPrevArrow>
                <FontAwesomeIcon icon={faChevronLeft} />
            </CustomPrevArrow>
        ),
    };

    return (
        <div className={cx('wrapper')}>
            <Story>
                <Slider {...settings} className={cx('slider')}>
                    <Item src={`data:image/*;base64,${user?.avatar}`} alt={user?.username} type="create" />
                    {STORY_ITEMS.map((item, index) => (
                        <Item key={index} src={item.src} account={item.account} alt={item.account} />
                    ))}
                </Slider>
            </Story>
            <Post />
            {newFeedData
                ? newFeedData.map((item, index) => {
                      // convert to avatar to string
                      const avatarData = item.avatar.data;
                      const binaryString = String.fromCharCode.apply(null, avatarData);

                      // Assuming createdAtStr and updatedAtStr are your date strings in the format "yyyy-mm-ddThh:mm:ss.fffZ"
                      const createdAtStr = item.created_at;
                      const updatedAtStr = item.updated_at;

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

                      item = {
                          ...item,
                          avatar: binaryString,
                          created_at: formattedCreatedAt,
                          updated_at: formattedUpdatedAt,
                      };

                      return <NewFeed key={index} data={item} onLikePost={handleLikePost}/>;
                  })
                : 'Hiện chưa có bài đăng nào.'}
        </div>
    );
}

export default Home;
