import React from "react";
import Card from "./Card";

const CardList = ({ players }) => {
    const cardArr = players.map((user, i) => {
        return <Card key={i} name={players[i].name} picture={players[i].picture}/>
    })

    console.log(players[0].picture);
    return (
        <div>
            {cardArr}
        </div>
    )
};

export default CardList;