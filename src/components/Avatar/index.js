import React from "react";

import './Avatar.scss';
import generateAvatarFromHash from "../../utils/helpers/generateAvatarFromHash";

const Avatar = ({user}) => {
    if (user.avatar) {
        return (
            <img
                className='avatar'
                src={user.avatar}
                alt={`Avatar ${user.fullName}`}
            />
        )
    } else {
        const {color, colorLighten} = generateAvatarFromHash(user._id);
        const firstFullNameChar = user.fullName[0];

        return (
            <div
                style={{background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.54%)`}}
                className='avatar avatar--symbol'>
                {firstFullNameChar.toUpperCase()}
            </div>
        )
    }
};

export default Avatar;