import React from 'react';

import readedSvg from '../../assets/img/readed.svg';
import noreadedSvg from '../../assets/img/noreaded.svg';
import './IconReaded.scss';

const IconReaded = ({isMe, unreaded}) => (
    <React.Fragment>
        {isMe &&
        <img
            id='is-readed'
            src={unreaded ? noreadedSvg : readedSvg}
            alt='read status'
        />}
    </React.Fragment>
);

export default IconReaded;