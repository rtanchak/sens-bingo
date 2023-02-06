import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

import Ticket from "./ticket/Ticket";
import Bingo from "./ticket/Bingo";
import TicketColumnHeader from "./ticket/TicketColumnHeader";

import { generateTicket, generateDefaultState, generateTicketNumber } from "../functional/ticket";
import { checkBingoState } from "../functional/game";

interface PlayerProps {
  className?: string;
}


const PlayCard: React.FC<PlayerProps> = ({ className }) => {
  const [card, setCard] = useState(() => generateTicket());
  const [cardState, setCardState] = useState<boolean[][]>(generateDefaultState());
  const [ticketState, setTicketState] = useState<number>(generateTicketNumber());
  const [winState, setWinState] = useState<boolean>(false);

  const generateNewCard = () => {
    setWinState(false);
    setCard(generateTicket());
    setCardState(generateDefaultState());
    setTicketState(generateTicketNumber());
  };

  const generateNewNumber = () => {
    setTicketState(generateTicketNumber());
  };

  const checkBingo = () => {
    setWinState( checkBingoState(cardState))
  };

  return (
    <div className={className}>
        <Bingo
          winCondition={winState}
        />
       <TicketColumnHeader
        ticketNumber={ticketState}
       />
      <Ticket
        ticket={card}
        selected={cardState}
        onSelect={({columnIndex, rowIndex}) => {
          cardState[rowIndex][columnIndex] = !cardState[rowIndex][columnIndex];
          setCardState([...cardState]);
          checkBingo();
        }}
      />

      <br/>

      <div className="Buttons">
        <Button className="Button4"
          variant="secondary"
          onClick={generateNewNumber}
        >
          Next number
        </Button>
        
        <Button className="Button4"
           variant="secondary"
          onClick={generateNewCard}
        >
          New bingo ticket
        </Button>
      </div>
    </div>
  );
}

export default styled(PlayCard)`
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
`