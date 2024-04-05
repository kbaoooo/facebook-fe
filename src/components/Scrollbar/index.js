import classNames from 'classnames/bind';
import styles from './Scrollbar.module.scss';

const cx = classNames.bind(styles);

function Scrollbar({ w = 8, h = 195, position = [0, 0] }, className) {
    return (
        <div
            style={{ width: w, height: h, top: position[0], right: position[1] }}
            className={cx('scrollbar', className)}
        ></div>
    );
}

export default Scrollbar;
