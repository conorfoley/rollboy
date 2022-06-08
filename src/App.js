import React, { Component, useState, useEffect } from 'react';
import { Box, Image, Heading, Text, Button, Flex } from 'rebass';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { parse, roll, parseAndRoll, Roll, Result } from 'roll-parser';
import d4svg from './images/d4.svg';
import d6svg from './images/perspective-dice-six.svg';
import d8svg from './images/dice-eight-faces-eight.svg';
import d10svg from './images/d10.svg';
import d12svg from './images/d12.svg';
import d20svg from './images/dice-twenty-faces-twenty.svg';

// TODO actually use these
const theme = {
    breakpoints: ['40em', '52em', '64em'],
}

const AppRoot = styled.div`
    height: 100vh;
    max-width: 64em;
    margin: 0 auto;
    background-color: #6c71c4;
    @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');
    font-family: 'Source Code Pro', monospace;
`;

const DiceButton = styled(Button)`
    transition: all .1337s ease-in-out;
    &:hover {
        transform: scale(1.1);
        border-radius: 1rem;
    }
    &:active { transform: scale(1.337); }
    background-color: black;
    border-radius: 0;
    padding: .25rem;
`;

// TODO improve this animation
const RollButton = styled(Button)`
    transition: all .1337s ease-in-out;
    &:hover { filter: brightness(1.1); }
    &:active {
        transform: scale(1.04);
        border-radius: 1rem;
    }
    background-color: #303030;
    border-radius: 0;
    height: 3rem;
    touch-action: manipulation;
`;

const ClearButton = styled(Button)`
    transition: all .1337s ease-in-out;
    &:hover { filter: brightness(1.1); }
    &:active {
        transform: scale(1.04);
        border-radius: 1rem;
    }
    background-color: #b58900;
    border-radius: 0;
    position: absolute;
    bottom: 0;
    height: 3rem;
    touch-action: manipulation;
    max-width: 64em;
`;

const D4 = () => { return ( <Image src={d4svg} /> ) };
const D6 = () => { return ( <Image src={d6svg} /> ) };
const D8 = () => { return ( <Image src={d8svg} /> ) };
const D10 = () => { return ( <Image src={d10svg} /> ) };
const D12 = () => { return ( <Image src={d12svg} /> ) };
const D20 = () => { return ( <Image src={d20svg} /> ) };


const App = () => {
    const [D4s, setD4s] = useState(0);
    const [D6s, setD6s] = useState(0);
    const [D8s, setD8s] = useState(0);
    const [D10s, setD10s] = useState(0);
    const [D12s, setD12s] = useState(0);
    const [D20s, setD20s] = useState(0);

    const [allDice, setAllDice] = useState([]);

    const [rollString, setRollString] = useState('');
    const [log, setLog] = useState([]);

    // TODO fix this
    useEffect(() => {
        setLog([]);
        // let d4Result = {value: 0};
        // let d6Result = {value: 0};
        // let d8Result = {value: 0};
        // let d10Result = {value: 0};
        // let d12Result = {value: 0};
        // let d20Result = {value: 0};
        let d4Result = new Result('d4', 0, []);
        let d6Result = new Result('d6', 0, []);
        let d8Result = new Result('d8', 0, []);
        let d10Result = new Result('d10', 0, []);
        let d12Result = new Result('d12', 0, []);
        let d20Result = new Result('d20', 0, []);
        if (D4s !== 0){
            d4Result = parseAndRoll(`${D4s}d4`);
        }
        if (D6s !== 0){
            d6Result = parseAndRoll(`${D6s}d6`);
        }
        if (D8s !== 0){
            d8Result = parseAndRoll(`${D8s}d8`);
        }
        if (D10s !== 0){
            d10Result = parseAndRoll(`${D10s}d10`);
        }
        if (D12s !== 0){
            d12Result = parseAndRoll(`${D12s}d12`);
        }
        if (D20s !== 0){
            d20Result = parseAndRoll(`${D20s}d20`);
        }
        const total = d4Result.value + d6Result.value + d8Result.value + d10Result.value + d12Result.value  + d20Result.value;
        console.log('TOTAL ', total);
        const d4Str = d4Result.value > 0 ? `${d4Result}\n` : '';
        const d6Str = d6Result.value > 0 ? `${d6Result}\n` : '';
        const d8Str = d8Result.value > 0 ? `${d8Result}\n` : '';
        const d10Str = d10Result.value > 0 ? `${d10Result}\n` : '';
        const d12Str = d12Result.value > 0 ? `${d12Result}\n` : '';
        const d20Str = d20Result.value > 0 ? `${d20Result}\n` : '';

        setRollString(d4Str + d6Str + d8Str + d10Str + d12Str + d20Str + `TOTAL: ${total}`);
        // setRollString(`${d4Result}\n${d6Result}\n${d8Result}\n${d10Result}\n${d12Result}\n${d20Result}\nTOTAl: ${total}`);

        // console.log('DICE ', D4s, D6s, D8s, D10s, D12s, D20s);


        // const str = `${D4s >= 1 ? D4s + 'd4 + ' : ''}${D6s >= 1 ? D6s + 'd6 + ' : ''}${D8s >= 1 ? D8s + 'd8 + ' : ''}${D10s >= 1 ? D10s + 'd10 + ' : ''}${D12s >= 1 ? D12s + 'd12 + ' : ''}${D20s >= 1 ? D20s + 'd20 + ' : ''}`.slice(0, -3);

    }, [D4s, D6s, D8s, D10s, D12s, D20s]);

    return (
        <AppRoot>
          <Flex flexWrap='wrap'>

            <DiceButton
              width={[1/3, 1/6, 1/6]}
              onClick={() => {
                  setAllDice([...allDice, D4]);
                  setD4s(D4s + 1);
              }}>
              <Image src={d4svg} />
            </DiceButton>

            <DiceButton
              width={[1/3, 1/6, 1/6]}
              onClick={() => {
                  setAllDice([...allDice, D6]);
                  setD6s(D6s + 1);
              }}>
              <Image src={d6svg} />
            </DiceButton>

            <DiceButton
              width={[1/3, 1/6, 1/6]}
              onClick={() => {
                  setAllDice([...allDice, D8]);
                  setD8s(D8s + 1);
              }}>
              <Image src={d8svg} />
            </DiceButton>

            <DiceButton
              width={[1/3, 1/6, 1/6]}
              onClick={() => {
                  setAllDice([...allDice, D10]);
                  setD10s(D10s + 1);
              }}>
              <Image src={d10svg} />
            </DiceButton>

            <DiceButton
              width={[1/3, 1/6, 1/6]}
              onClick={() => {
                  setAllDice([...allDice, D12]);
                  setD12s(D12s + 1);
              }}>
              <Image src={d12svg} />
            </DiceButton>

            <DiceButton
              width={[1/3, 1/6, 1/6]}
              onClick={() => {
                  setAllDice([...allDice, D20]);
                  setD20s(D20s + 1);
              }}>
              <Image src={d20svg} />
            </DiceButton>

            <Box bg="black" width={[1, 1, 1]} p={3} />

            <RollButton
              width={[1, 1, 1]}
              onClick={() => {
                  console.log('LOG ', log);
                  /* const result = parseAndRoll(rollString); */
                  /* console.log(result); */
                  /* setLog([ ...log, `${rollString} = ${result}` ]) */
                  console.log('ROLL STR ', rollString);
                  setLog([rollString]);
              }}
            >
              Roll!
            </RollButton>

            <Box
              fontSize={4}
              width={[ 1, 1, 1 ]}
              color='white'
              bg='#6c71c4'
            >
              {allDice.map(( Die, index ) =>
                  <DiceButton
                    width={[1/4, 1/6, 1/6]}
                    onClick={() => {
                        setAllDice(allDice.filter((v, i) => i !== index));
                        console.log('ALL DICE', allDice);
                    }}
                  >
                    <Die/>
                  </DiceButton>)
              }
            </Box>

            <Box
              p={1}
              fontSize={4}
              width={[ 1, 1/3, 1/3 ]}
              color='white'
              bg='#6c71c4'
            >
              { log.map( e => <pre>{ e.toString() }</pre>) }
            </Box>

            <ClearButton
              width={[1, 1, 1]}
              onClick={() => {
                  setD4s(0);
                  setD6s(0);
                  setD8s(0);
                  setD10s(0);
                  setD12s(0);
                  setD20s(0);
                  setLog([]);
                  setAllDice([]);
              }}
            >
              Clear
            </ClearButton>

          </Flex>
        </AppRoot>
    );
}
// abstract ClearButton onClick
export default App;
