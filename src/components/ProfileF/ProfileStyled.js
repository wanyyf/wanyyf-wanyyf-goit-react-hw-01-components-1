import styled from 'styled-components';

export const Card = styled.div`
  margin: 0 auto;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px 16px 0 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Avatar = styled.div`
  border-radius: 50%;
  border: 2px solid green;
  padding: 5px;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
`;
export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const CardName = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-top: 16px;
`;
export const Cardtag = styled.p`
  font-size: 16px;
  color: #666;
  margin-top: 8px;
`;
export const Cardlocation = styled.p`
  font-size: 16px;
  color: #666;
  margin-top: 8px;
`;

export const Stats = styled.ul`
  display: flex;
  width: 300px;
  margin-top: 16px;
  justify-content: center;
`;
export const StatsInfo = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;

  width: 100%;
  background-color: rgba(204, 204, 204, 0.4);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.span`
  font-size: 16px;
  color: #666;
`;
export const Quantity = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-top: 5px;
`;
