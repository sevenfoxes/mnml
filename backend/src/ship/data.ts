import { allFactions } from "../faction";
import { Ship } from "./model";

const allShips: Array<Ship> = [
  { id: '1', name: 'X-Wing' },
  { id: '2', name: 'Y-Wing' },
  { id: '3', name: 'A-Wing' },
  { id: '4', name: 'Millennium Falcon' },
  { id: '5', name: 'Home One' },
  { id: '6', name: 'TIE Fighter' },
  { id: '7', name: 'TIE Interceptor' },
  { id: '8', name: 'Executor' },
];



export const getShip = (id: string): Ship | undefined => {
  return allShips.find((ship) => ship.id === id);
}

let nextShip = 9;
export function createShip(shipName: string, factionId: string): Ship {
  const newShip = {
    id: String(nextShip++),
    name: shipName,
  };

  allShips.push(newShip);

  const faction = allFactions.find((obj) => obj.id === factionId);
  faction?.ships.push(newShip.id);
  return newShip;
}
