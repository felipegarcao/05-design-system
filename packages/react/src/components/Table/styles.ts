import styles from 'styled-components';


export const TableContainer = styles.table`
width: 100%;

border-collapse: collapse;
width: 100%;

thead th {
  color: #00995d;
  text-align: left;
  padding: 22px;
  border-bottom: 2px solid #d8e9a5;
}
tbody td {
  padding: 12px;
  border-bottom: 1px solid #eee;
  position: relative;
  font-size: 13px;

  &:first-of-type {
    padding-left: 2rem;

    &::before {
      content: "";
      height: 95%;
      position: absolute;
      width: 4px;
      background-color: #40b385;
      top: 2px;
      left: 3px;
    }
  }
}

p {
  display: flex;
  flex-direction: column;
}

tbody tr {
  height: 60px;

  &:nth-child(even) {
    background: #f0f2f3;
  }
}
img {
  height: 100px;
}
strong {
  color: #333;
  display: block;
}
span {
  display: block;
  margin-top: 5px;
  font-size: 18px;
  font-weight: bold;
}
.button-group {
  display: flex;
  align-items: center;
  gap: 1rem;
}
`;

