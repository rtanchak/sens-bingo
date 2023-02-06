const DEFAULT_CARD_STATE = [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, true, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false]
];

export function generateTicket() {
  const selectedNumbers = randomArray(5);
  return {
    columns: [
      getColumn(selectedNumbers),
      getColumn(selectedNumbers),
      getColumn(selectedNumbers, true),
      getColumn(selectedNumbers),
      getColumn(selectedNumbers),
    ]
  }
}

export function  generateDefaultState() {
  return JSON.parse(JSON.stringify(DEFAULT_CARD_STATE));
}

function getColumn(possibleNumbers: number[], freeElement?: boolean) {
  const selectedNumbers = possibleNumbers.splice(0, 5);
  if(freeElement) {
    selectedNumbers[2] = 0;
  }
  return selectedNumbers;
}

export function generateTicketNumber() {
  return Math.floor(Math.random() * 25)
}

export function randomArray(size: number) {
  return Array.from(Array(size* size).keys()).map(e => e + 1).sort((a, b) => 0.6 - Math.random());
}