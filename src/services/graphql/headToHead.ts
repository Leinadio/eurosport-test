import { gql } from '@apollo/client';

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