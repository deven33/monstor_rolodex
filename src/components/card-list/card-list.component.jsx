import React from 'react';
import '../card-list/card-list.style.css';
import { Card } from '../card/card.component'

const cardList =  props => (
        <div className = 'card-list'>
        { 
          props.monster.map( monsterLocal =>  (
              <Card key = {monsterLocal.id} monster = { monsterLocal }/>
        ))}
        </div>
        );
    
export default cardList;