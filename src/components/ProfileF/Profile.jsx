import React from 'react';
import PropTypes from 'prop-types';

import {
  Description,
  Avatar,
  Stats,
  StatsInfo,
  Label,
  Quantity,
  Card,
  Image,
  CardName,
  Cardlocation,
  Cardtag,
} from './ProfileStyled';

export const Profile = ({ avatar, location, stats, tag, username }) => {
  return (
    <Card>
      <Description>
        <Avatar>
          <Image src={avatar} alt="User avatar" />
        </Avatar>
        <CardName>{username}</CardName>
        <Cardtag>@{tag}</Cardtag>
        <Cardlocation>{location}</Cardlocation>
      </Description>

      <Stats>
        <StatsInfo>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsInfo>
        <StatsInfo>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsInfo>
        <StatsInfo>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsInfo>
      </Stats>
    </Card>
  );
};
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
