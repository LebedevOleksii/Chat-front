import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import {Dialogs} from '../components';
import {dialogsActions} from '../redux/actions';


const DialogsContainer = ({fetchDialogs, userId, items, currentDialogId, setCurrentDialogId}) => {
    const [inputValue, setValue] = useState('');
    const [filtred, setFiltredItems] = useState(Array.from(items));

    useEffect(() => {
        if (items.length) {
            onChangeInput();
        }
    }, [items]);

    const onChangeInput = (value = '') => {
        setFiltredItems(
            items.filter(
                dialog =>
                    dialog.author.fullName.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
                    dialog.partner.fullName.toLowerCase().indexOf(value.toLowerCase()) >= 0,
            ),
        );
        setValue(value);
    };

    useEffect(() => {
        fetchDialogs();

        // socket.on('SERVER:DIALOG_CREATED', fetchDialogs);
        // socket.on('SERVER:NEW_MESSAGE', fetchDialogs);
        // socket.on('SERVER:MESSAGES_READED', updateReadedStatus);
        // return () => {
        //     socket.removeListener('SERVER:DIALOG_CREATED', fetchDialogs);
        //     socket.removeListener('SERVER:NEW_MESSAGE', fetchDialogs);
        // };
    }, []);

    const onChooseDialog = id => {
        setCurrentDialogId(id);
        setValue('');
        setFiltredItems(items);
    };


    return (
        <Dialogs
            items={filtred}
            userId={userId}
            currentDialogId={currentDialogId}
            searchValue={inputValue}
            onSearch={onChangeInput}
            onSelectDialog={onChooseDialog}
        />
    )
};

const mapStateToProps = reduxState => ({
    items: reduxState.dialogs.items,
    currentDialogId: reduxState.dialogs.currentDialogId
});

export default connect(mapStateToProps, dialogsActions)(DialogsContainer);