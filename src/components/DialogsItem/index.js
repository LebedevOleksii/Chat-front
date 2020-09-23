import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/is_today';

import './DialogsItem.scss';
import '../IconReaded/IconReaded.scss';
import Avatar from '../Avatar';
import IconReaded from '../IconReaded';
import {Link} from "react-router-dom";


const getMessageTime = created_at => {
    if (isToday(created_at)) {
        return format(created_at, 'HH:mm');
    }
    return format(created_at, 'DD.MM.YYYY')
};

const DialogsItem = (
    {
        _id,
        myId,
        partner,
        onClick,
        isDialogOpen,
        unReadedCount,
        lastMessage: {
            user,
            text,
            unread,
            createdAt
        }
    }
) => (
    <Link to={`/dialog/${_id}`}>
        <div className={classNames('dialogs dialogs__item', {
            'dialogs__item--online': partner.isOnline,
            'dialogs__item--isOpen': isDialogOpen
        })}
             onClick={onClick}
        >
            <div className='dialogs__item-avatar'>
                <Avatar user={partner}/>
            </div>
            <div className='dialogs__item-info'>
                <div className='dialogs__item-info-top'>
                    <b>{partner.fullName}</b>
                    <span>{getMessageTime(createdAt)}</span>
                </div>
                <div className='dialogs__item-info-bottom'>
                    <p>{text}</p>
                    {unReadedCount > 0 &&
                    <div className='dialogs__item-info-count'>{unReadedCount > 9 ? '+9' : unReadedCount}</div>}
                    <div className='dialogs__item-info-readStatus'>
                        <IconReaded
                            unreaded={unread}
                            isMe={user._id === myId}
                        />
                    </div>
                </div>
            </div>
        </div>
    </Link>
);

export default DialogsItem;