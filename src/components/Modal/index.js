import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function Modal({ children, hideModal, isOpen, className }) {
    return (
        <Fragment>
            {isOpen && (
                <div
                    className={cx('wrapper', className)}
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            hideModal()
                        }
                    }}
                >
                    <div className={cx('modal')}>{children}</div>
                </div>
            )}
        </Fragment>
    );
}

export default Modal;
