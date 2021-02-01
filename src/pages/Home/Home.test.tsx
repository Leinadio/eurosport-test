import React from 'react';
import renderer from 'react-test-renderer';
import Home from './'

jest.mock('@apollo/client', () => {
  return {
    useQuery: () => ({
      loading: false,
      error: false,
      data: {
        headToHead: [
          {
            firstname: "Stan",
            lastname: "Wawrinka",
            shortname: "S.WAW",
            sex: "MAN",
            picture: {
              url: "https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg"
            },
            country: {
              picture: {
                url: "https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png"
              },
              code: "SUI"
            },
            stats: {
              rank: 21,
              points: 1784,
              weight: 81000,
              height: 183,
              age: 33,
              last: [
                true,
                true,
                true,
                false,
                true
              ]
            }
          },
          {
            firstname: "Rafael",
            lastname: "Nadal",
            shortname: "R.NAD",
            sex: "MAN",
            picture: {
              url: "https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg"
            },
            country: {
              picture: {
                url: "https://i.eurosport.com/_iss_/geo/country/flag/large/2203.png"
              },
              code: "ESP"
            },
            stats: {
              rank: 1,
              points: 1982,
              weight: 85000,
              height: 185,
              age: 33,
              last: [
                true,
                false,
                false,
                false,
                true
              ]
            }
          }
        ]
      },
    }),
    gql: jest.fn(),
  }
})

describe('Home',  () => {
  it('should display Home', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
