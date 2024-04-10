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
        </div>
    );
}

export default Home;
