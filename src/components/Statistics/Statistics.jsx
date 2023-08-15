import React from 'react';
import PropTypes from 'prop-types';
import {
  StatList,
  StatisticSec,
  StatisticsTitle,
  StatListItem,
} from './StatisticsStyled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticSec>
      {title ? <StatisticsTitle>{title}</StatisticsTitle> : ''}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatListItem key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatListItem>
        ))}
      </StatList>
    </StatisticSec>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};
