import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {messagesActions} from '../redux/actions';
import Messages from '../components/Messages';


const MessagesContainer = ({messagesList, fetchMessages, currentDialogId, userId, isLoading, messagesHolder}) => {

    useEffect(() => {
        if (currentDialogId) fetchMessages(currentDialogId);
    }, [currentDialogId]);
    useEffect(() => {
        setTimeout(() => messagesHolder.current.scrollTo(0, 999999), 200)
    }, [messagesList]);

    return (
        <Messages
            messages={messagesList}
            isLoading={isLoading}
            userId={userId}
            isDialogEmpty={messagesList && !messagesList.length}
        />
    )
};

const mapStateToProps = reduxState => ({
    isLoading: reduxState.messages.isLoading,
    messagesList: reduxState.messages.items,
    currentDialogId: reduxState.dialogs.currentDialogId
});

export default connect(mapStateToProps, messagesActions)(MessagesContainer);