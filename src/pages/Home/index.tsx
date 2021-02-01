import React from 'react';
import { useQuery } from '@apollo/client';
import { HEAD_TO_HAD, HeadToHeadType } from '../../services/graphql/headToHead';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Card from '../../components/Card';
import { generateRandomNumber } from '../../utils/generateRandomNumber';
import './styles.css'

function displayCards(data: Array<HeadToHeadType>): Array<JSX.Element> {
  return data.map((el: HeadToHeadType): JSX.Element => (
    <Card
      key={`${el.firstname}${generateRandomNumber()}`}
      url={el.picture.url}
      firstname={el.firstname}
      lastname={el.lastname}
      shortname={el.shortname}
      sex={el.sex}
      age={el.stats.age}
      height={el.stats.height}
      weight={el.stats.weight}
      points={el.stats.points}
      rank={el.stats.rank}
      last={el.stats.last}
      country={el.country}
    />
  ))
}

function DisplayLoadingOrErrorOrData(): JSX.Element {
  const { loading, error, data } = useQuery(HEAD_TO_HAD);
  if (loading) {
    return (
      <Loading />
    )
  }
  if (error || !data) {
    return (
      <Error />
    )
  }
  return (
    <div className="container">
      <div className="cards">
        {displayCards(data.headToHead)}
      </div>
    </div>
  )
};

export default function Home(): JSX.Element {
  return (
    <div>
      <h1 className="home-title">Players</h1>
      {DisplayLoadingOrErrorOrData()}
    </div>
  )
}
