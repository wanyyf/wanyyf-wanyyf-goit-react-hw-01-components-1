import React from 'react';
import PropTypes from 'prop-types';
import {
  FriendsSec,
  FriendListUl,
  FriendItem,
  FriendName,
  FriendStatus,
} from './FriendListStyled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsSec>
      <FriendListUl>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendItem key={id}>
            <FriendStatus $isonline={isOnline}></FriendStatus>
            <img src={avatar} alt="User  avatar" width="48" />
            <FriendName>{name}</FriendName>
          </FriendItem>
        ))}
      </FriendListUl>
    </FriendsSec>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
