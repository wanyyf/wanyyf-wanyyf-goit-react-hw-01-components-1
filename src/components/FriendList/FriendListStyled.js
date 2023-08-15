import { styled } from 'styled-components';

export const FriendsSec = styled.section`
  text-align: center;
  padding: 20px;
  margin: 60px auto;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
export const FriendListUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 8px;
  background-color: #f0f0f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
export const FriendStatus = styled.span`
  margin-right: 10px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${props => (props.$isonline ? '#4caf50' : '#f44336')};
  color: #fff;
  font-size: 12px;
`;

export const FriendName = styled.p`
  font-size: 16px;
  margin-left: auto;
  margin-right: 10px;
  font-style: italic;
  font-weight: bold;
`;
