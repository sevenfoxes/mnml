import { Faction } from "./model";

export const rebels: Faction = {
  id: '1',
  name: 'Alliance to Restore the Republic',
  ships: ['1', '2', '3', '4', '5'],
};

export const empire: Faction = {
  id: '2',
  name: 'Galactic Empire',
  ships: ['6', '7', '8'],
};

export const getRebels = (): Faction => {
  return rebels;
}

export const getEmpire = (): Faction => {
  return empire;
}

export const getFaction = (id: string): Faction | undefined => {
  return allFactions.find((faction) => faction.id === id);
}

export const allFactions: Array<Faction> = [rebels, empire];
