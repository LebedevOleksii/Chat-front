import React, {useRef} from 'react';
import classNames from 'classnames';
import {Icon} from 'antd';

import './Home.scss';
import '../../styles/layouts/_chat.scss';
import ChatInput from '../../components/ChatInput';
import DialogsContainer from '../../containers/DialogsContainer';
import MessagesContainer from '../../containers/MessagesContainer';

// const audioFile = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
// const messages = [
//     {
//         avatar: 'https://filmschoolrejects.com/wp-content/uploads/2017/04/0JRofTsuy93evl_J5.jpg',
//         date: 'Sun Feb 23 2020 19:06:40',
//         isReceiveMsg: true,
//         audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
//     },
//     {
//         text: 'Thank you! I\'m better, so where are you from?',
//         date: 'Sun Feb 23 2020 19:06:40',
//         isReadedMsg: true
//     },
//     {
//         avatar: 'https://filmschoolrejects.com/wp-content/uploads/2017/04/0JRofTsuy93evl_J5.jpg',
//         text: 'Hello! How are you? We are going home!)',
//         date: 'Fri Jan 31 2020 19:55:40',
//         isReceiveMsg: true,
//         attachments: [
//             {
//                 fileName: 'image',
//                 url: 'https://source.unsplash.com/800x800/?random=3&user,erondu'
//             },
//             {
//                 fileName: 'image',
//                 url: 'https://source.unsplash.com/800x800/?random=1&user,erondu'
//             },
//             {
//                 fileName: 'image',
//                 url: 'https://source.unsplash.com/800x800/?random=2 &user,erondu'
//             },
//         ]
//     },
//     {
//         avatar: 'https://filmschoolrejects.com/wp-content/uploads/2017/04/0JRofTsuy93evl_J5.jpg',
//         date: 'Fri Jan 31 2020 19:55:40',
//         isReceiveMsg: true,
//         attachments:
//             [
//                 {
//                     fileName: 'image',
//                     url: 'https://source.unsplash.com/800x800/?random=11&user,erondu'
//                 },
//             ]
//     },
//     {
//         avatar: 'https://filmschoolrejects.com/wp-content/uploads/2017/04/0JRofTsuy93evl_J5.jpg',
//         date: 'Fri Jan 31 2020 19:55:40',
//         attachments: [
//             {
//                 fileName: 'image',
//                 url: 'https://source.unsplash.com/800x800/?random=11&user,erondu'
//             },
//         ]
//     },
//     {
//         avatar: 'https://filmschoolrejects.com/wp-content/uploads/2017/04/0JRofTsuy93evl_J5.jpg',
//         isTyping: true,
//         isReceiveMsg: true
//     },
// ];

const Home = ({user}) => {
    const messagesBlockRef = useRef(null);

    return (
        <section className='home'>
            <div className='chat'>
                <div className='chat__sidebar'>
                    <div className='chat__sidebar-header'>
                        <div>
                            <Icon type='team'/>
                            <span>Dialogs list</span>
                        </div>
                        <Icon type='form' className='icon-button'/>
                    </div>
                    <DialogsContainer userId={'5f672a297d32b745eb3da2ba'}/>
                </div>

                <div className='chat__dialog'>
                    <div className='chat__dialog-header'>
                        <div className='chat__dialog-header-user-info'>
                            <div className={classNames('status', {online: 'status status--online'})}/>
                            <b className='chat__dialog-username'>Max Kohut</b>
                        </div>
                        <Icon type='ellipsis' className='icon-button' style={{fontSize: 25}}/>
                    </div>
                    <div className='chat__dialog-messages' ref={messagesBlockRef}>
                        <MessagesContainer
                            messagesHolder={messagesBlockRef}
                            userId={'5f672a297d32b745eb3da2ba'}
                        />
                    </div>
                    <div className='chat__dialog-input'>
                        <ChatInput/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default (Home);
