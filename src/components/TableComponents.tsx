import { Table, TableCell, Typography } from '@material-ui/core';
import styled from 'styled-components';


const TableTitle = styled(Typography)`
  padding: 16px 0;
`
const StyledTable = styled(Table)`
  table-layout: fixed;
`;

const StyledTableCell = styled(TableCell)`
  && {
    padding: 8px;
  }
`;


export {
  TableTitle,
  StyledTable,
  StyledTableCell
}
