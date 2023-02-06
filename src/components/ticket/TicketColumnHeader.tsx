import React from "react";
import styled from "styled-components";

interface TicketColumnHeaderProps {
  ticketNumber: number,
  className?: string
}

const TicketColumnHeader: React.FC<TicketColumnHeaderProps> = ({ticketNumber, className}) => {
  return <div className={className}>
    Ticket Number: {ticketNumber}
  </div>
}

export default styled(TicketColumnHeader)`
  margin: 7px;
  padding: 5px;
  border: 5px solid #DDD;
  border-radius: 16%;
  box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
  margin-bottom: 22px;
  ;
`;