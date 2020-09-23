import React, {useState, useRef, useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Message.scss';
import Time from '../Time';
import Avatar from '../Avatar';
import IconReaded from '../IconReaded';
import waveSvg from '../../assets/img/wave.svg';
import playPng from '../../assets/img/play.png';
import pausePng from '../../assets/img/pause.png';
import convertCurrentTime from '../../utils/helpers/convertCurrentTime';


const Message = props => {
    const {text, createdAt, audio, unread, userId, attachments, user: {_id,}} = props;

    const isMe = useMemo(() => _id === userId, [_id, userId]);

    return (
        <div className={classNames('message', {
            'message--isReceive': !isMe
        })}>
            <div className='message__content'>
                <div className='message__info'>
                    {/*<div className='dialogs__item-avatar'>*/}
                    {/*    <Avatar user={partner}/>*/}
                    {/*</div>*/}
                    <IconReaded
                        unreaded={unread}
                        isMe={isMe}
                    />
                    <div className='message__content-block'>
                        {text &&
                        <div className='message__bubble'>
                            <p className='message__text'>{text}</p>
                        </div>}
                        {audio &&
                        <div className='message__bubble'>
                            <MessageAudio audioSrc={audio}/>
                        </div>}
                        {attachments &&
                        <div className='message__attachments'>
                            {attachments.map(attachment => (
                                <img
                                    key={attachment.url}
                                    className={classNames('message__attachments-item', {
                                        'message__attachments-one_image': attachments.length === 1
                                    })}
                                    src={attachment.url}
                                    alt={attachment.fileName}
                                />
                            ))}
                        </div>}
                    </div>
                </div>

                {createdAt &&
                <span className='message__date'>
                <Time date={createdAt}/>
            </span>}
            </div>
        </div>

    )
};

const MessageAudio = ({audioSrc}) => {
    const audioElem = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const togglePlay = () => {
        if (!isPlaying) {
            audioElem.current.play();
        } else {
            audioElem.current.pause();
        }
    };

    useEffect(() => {
        audioElem.current.volume = '0.05';
        audioElem.current.addEventListener('playing', () => setIsPlaying(true), false);
        audioElem.current.addEventListener('pause', () => setIsPlaying(false), false);
        audioElem.current.addEventListener('ended', () => {
            setIsPlaying(false);
            setProgress(0);
            setCurrentTime(0);
        }, false);
        audioElem.current.addEventListener('timeupdate', () => {
            const duration = (audioElem.current && audioElem.current.duration) || 0;
            setCurrentTime(audioElem.current.currentTime);
            setProgress((audioElem.current.currentTime / duration) * 100);
        }, false);
    }, []);

    return (
        <div className='message__audio'>
            <audio ref={audioElem} src={audioSrc} preload='auto'/>
            <div className='message__audio-progress' style={{width: progress + '%'}}/>
            <div className='message__audio-info'>
                <div className='message__audio-btn'>
                    <button onClick={togglePlay}>
                        {isPlaying ? (
                            <img src={pausePng} alt='Pause svg'/>
                        ) : (
                            <img src={playPng} alt='Play svg'/>
                        )}
                    </button>
                </div>
                <div className='message__audio-wave'>
                    <img src={waveSvg} alt='Wave svg'/>
                </div>
                <span className='message__audio-duration'>{convertCurrentTime(currentTime)}</span>
            </div>
        </div>
    );
};

Message.propTypes = {
    text: PropTypes.string,
    date: PropTypes.string,
    isTyping: PropTypes.bool,
    isReadedMsg: PropTypes.bool,
    isReceiveMsg: PropTypes.bool,
    attachments: PropTypes.array,
};

export default Message;