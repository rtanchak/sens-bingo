import React from "react";
import styled from "styled-components";


import TicketColumn from "./TicketColumn";

interface TicketProps {
  ticket: { columns: number[][] }
  className?: string;
  selected: boolean[][];
  onSelect: (selectedItem: { columnIndex: number, rowIndex: number }) => void
}

const Ticket: React.FC<TicketProps> = (props) => {
  const { className, selected, ticket, onSelect } = props;
  const { columns } = ticket;

  return <div className={className}>
    {
      columns.map((column, index) => (
        <TicketColumn
          selected={selected}
          columnIndex={index}
          column={column}
          key={`ticket-row-${index}`}
          onSelect={onSelect}
        />
      ))
    }
  </div>
}

export default styled(Ticket)`
  display: flex;
  padding: 5px;
  border: 5px solid #DDD;
  border-radius: 4%;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
`;