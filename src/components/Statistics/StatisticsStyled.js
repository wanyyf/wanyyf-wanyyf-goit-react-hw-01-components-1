import styled from 'styled-components';
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const StatisticSec = styled.section`
  text-align: center;
  padding: 20px;
  margin: 60px auto;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
export const StatList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;
export const StatListItem = styled.li`
  width: 150px;
  line-height: 1.3;
  height: 100px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => getRandomColor()};
  color: #fff;
  font-size: 18px;
`;
export const StatisticsTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;
