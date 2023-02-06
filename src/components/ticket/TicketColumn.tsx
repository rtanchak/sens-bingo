import styled from "styled-components";

import TicketNumber from "./TicketNumber";

interface TicketRowProps {
  column: number[];
  columnIndex: number;
  className?: string;
  selected: boolean[][];
  onSelect: (selected: { rowIndex: number, columnIndex: number }) => void
}

const TicketColumn = (props: TicketRowProps) => {
  const { column, columnIndex, className, onSelect, selected } = props;

  return <div className={className}>
    {
      column.map((number, rowIndex) => {
        const isSelected = selected[rowIndex][columnIndex];

        return (
          <TicketNumber
            key={`number-${rowIndex}-${columnIndex}`}
            onSelect={onSelect}
            isSelected={isSelected}
            columnIndex={columnIndex}
            rowIndex={rowIndex}
            number={number}
          />
        )
      })
    }
  </div>
}

export default styled(TicketColumn)`
  &:nth-child(even) ${TicketNumber}:nth-child(even) {
    background-color: #6b545f4f;
    /* border-color: #dc3545; */
    border: 3px solid #736d70cc;
    border-radius: 10%;
  }

  &:nth-child(odd) ${TicketNumber}:nth-child(odd) {
    background-color: #6b545f4f;
    /* border-color: #dc3545; */
    border: 3px solid #736d70cc;
    border-radius: 10%;
  }
`;
