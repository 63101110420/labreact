import React, { useState, useEffect } from 'react';
import _ , { attempt } from 'lodash';
import CharaacterCard from './CharacterCard';

const prepareStateFromWord = given_word =>{
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c => {
        console.log(`${c} has been activated`)

       let guess = state.guess + c //กดอะไรมาแล้ว
       setState({...state, guess})

        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('Congret!!!')
                console.log('Facebook')
                setState({...state, completed: true})
                setState.attempt = 1;
            }else{
                console.log('reset, next attempt')
                setState({...state, guess: '',attempt: state.attempt + 1})
            }
           
       }                                      

        //console.log(guess)

    }

    return (
        <div>
            {
                state.chars.map((c,i) => 
                 <CharaacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                 
                )
            }
        </div>
    )
}