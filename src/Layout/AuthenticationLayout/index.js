import classNames from 'classnames/bind';
import styles from './AuthenticationLayout.module.scss';
import Authentication from '~/pages/Authentication';
const cx = classNames.bind(styles);

function AuthenticationLayout() {
    return (
        <div className={cx('wrapper')}>
            <Authentication />
        </div>
    );
}

export default AuthenticationLayout;
