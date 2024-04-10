import classNames from 'classnames/bind';
import styles from './Item.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Item({ src, alt, className, type = 'watch', account }) {
    if (type === 'watch') {
        return (
            <div className={cx('wrapper', className)}>
                <img src={src} alt={alt} className={cx('story-img')} />
                <p className={cx('account-name')}>{account}</p>
            </div>
        );
    } else {
        return (
            <div className={cx('wrapper', className)}>
                <div className={cx('create-story-wrapper')}>
                    <img src={src} alt={alt} className={cx('create-story-avatar')} />
                </div>
                <span className={cx('add-icon')}>
                    <span className={cx('circle')}>
                        <FontAwesomeIcon icon={faPlus} />
                    </span>
                </span>
                <div className={cx('item-footer')}>Tạo tin</div>
            </div>
        );
    }
}

export default Item;
