
import React from "react";
import styled from "styled-components";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

interface BingoProps {
    winCondition: boolean;
    className?: string;
};


const Bingo: React.FC<BingoProps>  = ({  winCondition, className }) => {
    const { width, height } = useWindowSize();
    if (!winCondition) {
      return <span style={{display: 'none'}}></span>;
    }
    return(
      <Confetti
        className={className}  
        width={width-5}
        height={height-5}
        numberOfPieces={2000}
      />
    );
  }

  
export default styled(Bingo)`
`