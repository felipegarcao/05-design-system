import React from "react";
import { TableContainer } from "./styles";

interface TableProps {
  children: React.ReactNode;
}

export function Table({children}: TableProps) {
  return (
    <TableContainer>
     {children}
    </TableContainer>
  );
}
