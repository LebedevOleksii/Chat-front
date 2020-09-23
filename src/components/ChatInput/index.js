import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Icon, Input} from 'antd';
import { UploadField } from '@navjobs/upload';
import { Picker } from 'emoji-mart';

import './chatinput.scss';

const ChatInput = props => {
    const [text, setText] = useState('');
    const [isEmojiPicker, setEmojiPicker] = useState(false);

    const toggleEmojiPicker = () => setEmojiPicker(!isEmojiPicker);
    const handleText = event => setText(event.target.value);

    return (
        <div className='chat-input'>
            <div className='chat-input__smile-btn'>
                <div className='chat-input__emoji-picker'>
                    {isEmojiPicker && (
                        <Picker onSelect={emojiTag => console.log(emojiTag)} set='apple' />
                    )}
                </div>
                <Icon onClick={toggleEmojiPicker} type='smile' className='icon-button'/>
            </div>
            <Input
                size='large'
                placeholder='Enter your message'
                onChange={handleText}
            />
            <div className='chat-input__actions'>
                <UploadField
                    onFiles={e => console.log(e)}
                    containerProps={{
                        className: 'chat-input__actions-upload-btn'
                    }}
                    uploadProps={{
                        accept: '.jpg,.jpeg,.png,.gif,.bmp',
                        multiple: 'multiple'
                    }}
                >
                    <Icon className='icon-button' type='camera'/>
                </UploadField>
                {text ?
                    <Icon className='send-btn icon-button' type='check-circle'/> :
                    <Icon className='icon-button' type='audio'/>
                }
            </div>
        </div>
    )
};

ChatInput.propTypes = {
    className: PropTypes.string
};

export default ChatInput;