import { Country } from '../../services/graphql/headToHead';

export interface PropsType {
  url: string;
  firstname: string;
  lastname: string;
  shortname: string;
  sex: string;
  age: number;
  height: number;
  weight: number;
  rank: number;
  points: number;
  country: Country;
  last: boolean[];
}