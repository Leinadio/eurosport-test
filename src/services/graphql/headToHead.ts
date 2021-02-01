import { gql } from '@apollo/client';

enum Sex {
  MAN = 'MAN',
  WOMAN = 'WOMAN'
}

interface Stats {
  rank: number
  points: number
  height: number;
  weight: number;
  age: number;
  last: boolean[];
}

interface Picture {
  url: string
}

export interface Country {
  picture: Picture
  code: string
}

export interface HeadToHeadType {
  firstname: string;
  lastname: string;
  shortname: string;
  sex: Sex;
  picture: Picture
  country: Country
  stats: Stats
}

export const HEAD_TO_HAD = gql`
query headToHead {
  headToHead {
    firstname
    lastname
    shortname
    sex
    picture {
      url
    }
    country {
      picture {
        url
        
      }
      code
    }
    stats {
      rank
      points
      weight
      height
      age
      last
    }
  }
}`