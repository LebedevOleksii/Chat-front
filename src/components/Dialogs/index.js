import React from 'react';
import orderBy from 'lodash/orderBy';
import {Input, Empty} from 'antd';

import './Dialogs.scss';
import DialogsItem from '../DialogsItem';


const Dialogs = ({items, userId, onSearch, searchValue, onSelectDialog, currentDialogId}) => (
    <React.Fragment>
        <div className='sidebar-search'>
            <Input.Search
                placeholder='Search dialog'
                onChange={e => onSearch(e.target.value)}
                value={searchValue}
            />
        </div>
        <div className='dialogs__list'>
            <div className='dialogs'>
                {items.length ?
                    orderBy(items, ['created_at'], ['desc']).map(dialog => (
                        <DialogsItem
                            key={dialog._id}
                            isDialogOpen={currentDialogId === dialog._id}
                            onClick={onSelectDialog.bind(this, dialog._id)}
                            myId={userId}
                            {...dialog}
                        />
                    )) :
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='Nothing found...'/>
                }
            </div>
        </div>
    </React.Fragment>
);

export default Dialogs;