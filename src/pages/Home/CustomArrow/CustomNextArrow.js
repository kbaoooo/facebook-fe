import classNames from 'classnames/bind';
import styles from './CustomNextArrow.scss';

const cx = classNames.bind(styles);

function CustomNextArrow(props) {
    const { className, onClick, style, children } = props;
    return (
        <div
            className={cx('next-arrow', className)}
            onClick={onClick}
            style={{
                ...style,
            }}
        >
            {children}
        </div>
    );
}

export default CustomNextArrow;
