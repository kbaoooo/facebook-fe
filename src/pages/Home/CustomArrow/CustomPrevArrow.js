import classNames from 'classnames/bind';
import styles from './CustomPrevArrow.scss';

const cx = classNames.bind(styles);

function CustomPrevArrow(props) {
    const { className, style, onClick, children } = props;
    return (
        <div
            className={cx('prev-arrow', className)}
            onClick={onClick}
            style={{
                ...style,
            }}
        >
            {children}
        </div>
    );
}

export default CustomPrevArrow;
