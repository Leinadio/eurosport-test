import React, { useEffect, useState } from 'react';
import { PropsType } from './types';
import './styles.css'

function showWinsLoses(data: any) {
  return data.map((el: any) => {
    if (!el) {
      return (
        <span className="dot-lose"></span>
      )
    }
    return (
      <span className="dot-win"></span>
    )
  })
}

export default function Card (props: PropsType) {
  const {
    url,
    firstname,
    lastname,
    shortname,
    sex,
    age,
    height,
    weight,
    rank,
    points,
    last
  } = props;

  const [totalWins, settotalWins] = useState(0);
  const [totalLoses, settotalLoses] = useState(0);
  useEffect(() => {
    const totalWinsCounted = last.filter((el: boolean) => el).length
    const totalLosesCounted = last.filter((el: boolean) => !el).length
    settotalWins(totalWinsCounted)
    settotalLoses(totalLosesCounted)
  }, [last]);

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-left">
          <img
            src={url}
            alt={`${firstname} ${lastname}`}
            className="card-img"
          />
        </div>
        <div className="card-right">
          <p className="card-text"><span className="card-span">Prenom:</span> {firstname}</p>
          <p className="card-text"><span className="card-span">Nom:</span> {lastname}</p>
          <p className="card-text"><span className="card-span">Shortname:</span> {shortname}</p>
          <p className="card-text"><span className="card-span">Age:</span> {age}</p>
          <p className="card-text"><span className="card-span">Sexe:</span> {sex}</p>
        </div>
      </div>
      <div className="card-content">
        <h1 className="card-title">Statistiques</h1>
        <p className="card-text"><span className="card-span">Height:</span> {height}m</p>
        <p className="card-text"><span className="card-span">Weight:</span> {weight*0.001}Kg</p>
        <p className="card-text"><span className="card-span">Points:</span> {points}</p>
        <p className="card-text"><span className="card-span">Rank:</span> {rank}</p>
      </div>
      <div className="card-annexe">
        <h1 className="card-title">Wins/Loses</h1>
        <div className="totalWinsLoses">
          <p className="card-text">Total Wins: <span className="card-span totalWinsLosesValue">{totalWins}</span></p>
          <p className="card-text">Total Loses: <span className="card-span totalWinsLosesValue">{totalLoses}</span></p>
        </div>
        <div className="last">
          {showWinsLoses(last)}
        </div>
      </div>
    </div>

  )
}