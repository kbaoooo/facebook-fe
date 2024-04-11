import classNames from 'classnames/bind';
import styles from './NewFeed.module.scss';
const cx = classNames.bind(styles);

function NewFeed({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <img src={data.avatar} alt={data.account} className={cx('avatar')}/>
                <span className={cx('account')}>{data.account}</span>
            </div>
            <div className={cx("content")}>
                <p className={cx('text')}>
                    {data.content}
                </p>
            </div>
        </div>
    );
}

export default NewFeed;
