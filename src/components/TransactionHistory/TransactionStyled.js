const { styled } = require('styled-components');

export const TransSecion = styled.section`
  text-align: center;
  padding: 20px;
  margin: 60px auto;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
export const TransHead = styled.thead`
  background-color: lightblue;
`;
export const TransTable = styled.table`
  width: 100%;
  border: 1px solid #ddd;
  border-collapse: collapse;
  margin: 10px 0;
  font-family: Arial, sans-serif;
`;
export const TransTh = styled.th`
  padding: 12px 15px;
  text-align: left;
  font-weight: bold;
  border-bottom: 2px solid #ddd;
`;
export const TransBody = styled.tbody`
  border-bottom: 1px solid #ddd;
`;
export const TransTr = styled.tr`
  :nth-child(even) {
    background-color: lightcoral;
  }

  :hover {
    background-color: #e6e6e6;
  }
`;
export const TransTd = styled.td`
  padding: 10px 15px;
`;
