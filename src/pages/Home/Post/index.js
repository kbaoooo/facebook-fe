import classNames from 'classnames/bind';
import styles from './Post.module.scss';
import { useState } from 'react';
import Modal from '~/components/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Post() {
    const [showModal, setShowModal] = useState(false);
    const [postInput, setPostInput] = useState('');
    const [imgFile, setImgFile] = useState('');

    const handleHideModal = () => {
        setShowModal(false);
    };

    const handlePostInputChange = (e) => {
        setPostInput(e.target.value);
    };

    const handleChangeImgFile = (e) => {
        setImgFile(e.target.files[0]);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('post')}>
                <img className={cx('avatar')} src={require('../../../assets/imgs/avatar.jpg')} alt="Khanh Bao" />
                <div
                    className={cx('create-post')}
                    onClick={() => {
                        setShowModal(true);
                    }}
                >
                    <p className={cx('create-title')}>Bao ơi, bạn đang nghĩ gì thế?</p>
                </div>
            </div>
            <div className={cx('actions')}>
                <div className={cx('actions-item')}>
                    <img src={require('../../../assets/imgs/live.png')} alt="" className={cx('icon')} />
                    <p className={cx('action-name')}>Video trực tiếp</p>
                </div>
                <div className={cx('actions-item')}>
                    <img src={require('../../../assets/imgs/image.png')} alt="" className={cx('icon')} />
                    <p className={cx('action-name')}>Ảnh/Video</p>
                </div>
                <div className={cx('actions-item')}>
                    <img src={require('../../../assets/imgs/reaction.png')} alt="" className={cx('icon')} />
                    <p className={cx('action-name')}>Cảm xúc/hoạt động</p>
                </div>
            </div>
            <Modal isOpen={showModal} hideModal={handleHideModal} className={cx('modal')}>
                <h3 className={cx('title')}>
                    Tạo bài viết
                    <span className={cx('close-icon')} onClick={handleHideModal}>
                        <FontAwesomeIcon icon={faXmark} />
                    </span>
                </h3>

                <div className={cx('content')}>
                    <div className={cx('user-info')}>
                        <img
                            className={cx('avatar')}
                            src={require('../../../assets/imgs/avatar.jpg')}
                            alt="khanh bao"
                        />
                        <p className={cx('username')}>Khanh Bao</p>
                    </div>
                    <div className={cx('search')}>
                        <textarea
                            className={cx('search-input')}
                            type="text"
                            placeholder={'Bao oi, bạn đang nghĩ gì thế?'}
                            onChange={(e) => handlePostInputChange(e)}
                        >
                            {postInput}
                        </textarea>
                    </div>
                    <button className={cx('upload-btn')}>Đăng</button>
                </div>
            </Modal>
        </div>
    );
}

export default Post;
