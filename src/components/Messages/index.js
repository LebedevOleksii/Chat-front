import React from 'react';
import {Empty, Spin} from 'antd';
import classNames from 'classnames';

import Message from '../Message';
import '../Message/Message.scss';


const Messages = ({isLoading, messages, userId, isDialogEmpty}) => (
    <div className={classNames({'center-element-holder': isLoading || !messages || isDialogEmpty})}>
        {!isLoading && messages &&
        messages.map((message, i) => (
            <Message
                {...message}
                userId={userId}
                key={i}
            />
        ))}
        {isLoading && isDialogEmpty &&
        <Spin className='loader' size='large' tip='Loading messages...'/>}
        {!messages &&
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='Open a dialog...'/>}
        {!isLoading && isDialogEmpty &&
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='Dialog is empty...'/>}
    </div>
);

export default Messages;