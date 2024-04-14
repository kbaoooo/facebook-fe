import classNames from 'classnames/bind';
import styles from './Authentication.module.scss';
import Modal from '~/components/Modal';
import { Fragment, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import request from '~/utils/request';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Authentication() {
    const [userInput, setUserInput] = useState('');
    const [passInput, setPassInput] = useState('');
    const [regisInputName, setRegisInputName] = useState('');
    const [regisInputPhone, setRegisInputPhone] = useState('');
    const [regisInputPass, setRegisInputPass] = useState('');
    const [showModal, setShowModal] = useState(false);

    const userInputRef = useRef();
    const regisInputRef = useRef();

    const navigate = useNavigate();

    const handleHideModal = () => {
        setRegisInputName('');
        setRegisInputPhone('');
        setRegisInputPass('');
        setShowModal(false);
    };

    const handleChangeInputUser = (e) => {
        setUserInput(e.target.value);
    };

    const handleChangeInputPass = (e) => {
        setPassInput(e.target.value);
    };

    const handleInputRegisName = (e) => {
        setRegisInputName(e.target.value);
    };

    const handleInputRegisPhone = (e) => {
        setRegisInputPhone(e.target.value);
    };

    const handleInputRegisPass = (e) => {
        setRegisInputPass(e.target.value);
    };

    const handleLogin = async () => {
        const response = await request.post('auth/login', { phone: userInput, password: passInput });
        const data = response.data;
        if (data.status === 200 && data.message === 'OK') {
            if (data.data && data.data.length > 0) {
                const avatarData = data.data[0]?.avatar.data;
                const binaryString = String.fromCharCode.apply(null, avatarData);
                // Assuming createdAtStr and updatedAtStr are your date strings in the format "yyyy-mm-ddThh:mm:ss.fffZ"
                const createdAtStr = data.data[0].created_at;
                const updatedAtStr = data.data[0].updated_at;

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
                const user = {
                    isLogin: true,
                    userInfo: {
                        ...data.data[0],
                        avatar: binaryString,
                        created_at: formattedCreatedAt,
                        updated_at: formattedUpdatedAt,
                    },
                };

                const jsonObj = JSON.stringify(user);
                localStorage.setItem('login-status', jsonObj);
                navigate('/');
            } else {
                alert('Sai tài khoản hoặc mật khẩu. Vui lòng đăng nhập lại!');
                userInputRef.current.focus();
            }
        }
    };

    const handleSubmitRegister = async () => {
        const response = await request.post('auth/register', {
            username: regisInputName,
            phone: regisInputPhone,
            password: regisInputPass,
        });
        const data = response.data;
        if (data.status === 400 && data.message === 'User Already Exited') {
            alert('Người dùng đã tồn tại. Vui lòng đăng ký bằng SĐT khác!');
            regisInputRef.current.focus();
        }
        if (data.status === 200 && data.message === 'OK') {
            alert('Đăng ký thành công!');
            setShowModal(false);
        }
    };

    return (
        <Fragment>
            <div className={cx('logo')}>
                <img
                    className={cx('fb_logo', '_8ilh', 'img')}
                    src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
                    alt="Facebook"
                />
            </div>
            <div className={cx('wrapper')}>
                <form className={cx('form')}>
                    <div className={cx('login')}>
                        <input
                            ref={userInputRef}
                            placeholder="Số điện thoại"
                            type="text"
                            value={userInput}
                            onChange={handleChangeInputUser}
                        />
                        <input
                            placeholder="Mật khẩu"
                            type="password"
                            value={passInput}
                            onChange={handleChangeInputPass}
                        />
                        <div className={cx('login-btn')} onClick={handleLogin}>
                            Đăng nhập
                        </div>
                    </div>
                    <div className={cx('create-new-acc')}>
                        <div
                            className={cx('register-btn')}
                            onClick={() => {
                                setUserInput('');
                                setPassInput('');
                                setShowModal(true);
                            }}
                        >
                            Tạo tài khoản mới
                        </div>
                    </div>
                </form>
            </div>
            <Modal isOpen={showModal} hideModal={handleHideModal} className={cx('modal')}>
                <div className={cx('header')}>
                    <h2 className={cx('title')}>Đăng ký</h2>
                    <p className={cx('sub-title')}>Nhanh chóng dễ dàng</p>

                    <FontAwesomeIcon
                        icon={faXmark}
                        className={cx('close-btn')}
                        onClick={handleHideModal}
                    />
                </div>
                <div className={cx('form-regis')}>
                    <form className={cx('form')}>
                        <input
                            ref={regisInputRef}
                            placeholder="Họ tên"
                            type="text"
                            onChange={handleInputRegisName}
                            value={regisInputName}
                        />
                        <input
                            placeholder="Số điện thoại"
                            type="text"
                            onChange={handleInputRegisPhone}
                            value={regisInputPhone}
                        />
                        <input
                            placeholder="Mật khẩu mới"
                            type="password"
                            onChange={handleInputRegisPass}
                            value={regisInputPass}
                        />

                        <p className={cx('descrip')}>
                            Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên Facebook.
                            <span className={cx('highlight')}>Tìm hiểu thêm.</span>
                            <br />
                            <br /> Bằng cách nhấp vào Đăng ký, bạn đồng ý với{' '}
                            <span className={cx('highlight')}>
                                {' '}
                                Điều khoản, Chính sách quyền riêng tư và Chính sách cookie
                            </span>{' '}
                            của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc
                            nào.
                        </p>

                        <div className={cx('regis-btn-submit')} onClick={handleSubmitRegister}>
                            Đăng ký
                        </div>
                    </form>
                </div>
            </Modal>
        </Fragment>
    );
}

export default Authentication;
