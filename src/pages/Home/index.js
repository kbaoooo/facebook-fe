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

const NEW_FEED_ITEMS = [
    {
        account: 'Khanh Bao',
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        avatar: require('../../assets/imgs/avatar.jpg'),
    },
    {
        account: 'Khanh Bao',
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        avatar: require('../../assets/imgs/avatar.jpg'),
    },
    {
        account: 'Khanh Bao',
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        avatar: require('../../assets/imgs/avatar.jpg'),
    },
    {
        account: 'Khanh Bao',
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        avatar: require('../../assets/imgs/avatar.jpg'),
    },
    {
        account: 'Khanh Bao',
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        avatar: require('../../assets/imgs/avatar.jpg'),
    },
];

function Home() {
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
                    <Item src={require('../../assets/imgs/story_ava.jpg')} alt={'Khanh Bao'} type="create" />
                    {STORY_ITEMS.map((item, index) => (
                        <Item key={index} src={item.src} account={item.account} alt={item.account} />
                    ))}
                </Slider>
            </Story>
            <Post />
            {NEW_FEED_ITEMS.map((item, index) => {
                return <NewFeed key={index} data={item} />;
            })}
        </div>
    );
}

export default Home;
