import React, { Component, useState, useEffect } from 'react';
import { Box, Image, Heading, Text, Button, Flex } from 'rebass';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { parse, roll, parseAndRoll, Roll } from 'roll-parser';
import d4svg from './images/d4.svg';
import d6svg from './images/perspective-dice-six.svg';
import d8svg from './images/dice-eight-faces-eight.svg';
import d10svg from './images/d10.svg';
import d12svg from './images/d12.svg';
import d20svg from './images/dice-twenty-faces-twenty.svg';

const theme = {
    breakpoints: ['40em', '52em', '64em'],
}


const AppRoot = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #6c71c4;
    @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');
    font-family: 'Source Code Pro', monospace;
`;

const StyledButton = styled(Button)`
    background-color: black;
    border: .333rem solid #303030;
    margin: .5rem;
    border-radius: .666rem;

    transition: all .1337s ease-in-out;
    &:hover { transform: scale(1.1); }
    &:active { transform: scale(1.337); }
`;

const App = () => {
    const [D4s, setD4s] = useState(0);
    const [D6s, setD6s] = useState(0);
    const [D8s, setD8s] = useState(0);
    const [D10s, setD10s] = useState(0);
    const [D12s, setD12s] = useState(0);
    const [D20s, setD20s] = useState(0);

    // TODO make this one function
    let d4s = []
    for (let i = 0; i < D4s; i++) {d4s.push(<Image src={d4svg} height="5rem" />)}
    let d6s = []
    for (let i = 0; i < D6s; i++) {d6s.push(<Image src={d6svg} height="5rem" />)}
    let d8s = []
    for (let i = 0; i < D8s; i++) {d8s.push(<Image src={d8svg} height="5rem" />)}
    let d10s = []
    for (let i = 0; i < D10s; i++) {d10s.push(<Image src={d10svg} height="5rem" />)}
    let d12s = []
    for (let i = 0; i < D12s; i++) {d12s.push(<Image src={d12svg} height="5rem" />)}
    let d20s = []
    for (let i = 0; i < D20s; i++) {d20s.push(<Image src={d20svg} height="5rem" />)}

    const [rollString, setRollString] = useState('')
    const [log, setLog] = useState([]);

    useEffect(() => {
        const str = `${D4s >= 1 ? D4s + 'd4 + ' : ''}${D6s >= 1 ? D6s + 'd6 + ' : ''}${D8s >= 1 ? D8s + 'd8 + ' : ''}${D10s >= 1 ? D10s + 'd10 + ' : ''}${D12s >= 1 ? D12s + 'd12 + ' : ''}${D20s >= 1 ? D20s + 'd20 + ' : ''}`.slice(0, -3);
        setRollString(str);
    });

    return (
        <AppRoot>
            <Flex flexWrap='wrap'>

                <Box
                    p={5}
                    fontSize={4}
                    width={[ 1, 1, 1 ]}
                    color='white'
                    bg='#6c71c4'
                >
                    <StyledButton onClick={() => setD4s(D4s + 1)}> <Image src={d4svg} height="5rem"/> </StyledButton>
                    <StyledButton onClick={() => setD6s(D6s + 1)}> <Image src={d6svg} height="5rem"/> </StyledButton>
                    <StyledButton onClick={() => setD8s(D8s + 1)}> <Image src={d8svg} height="5rem"/> </StyledButton>
                    <StyledButton onClick={() => setD10s(D10s + 1)}> <Image src={d10svg} height="5rem"/> </StyledButton>
                    <StyledButton onClick={() => setD12s(D12s + 1)}> <Image src={d12svg} height="5rem"/> </StyledButton>
                    <StyledButton onClick={() => setD20s(D20s + 1)}> <Image src={d20svg} height="5rem"/> </StyledButton>
                </Box>

                <Box
                    p={5}
                    fontSize={4}
                    width={[ 1, 2/3, 2/3 ]}
                    color='white'
                    bg='#6c71c4'
                >
                    <StyledButton
                        onClick={() => {
                            setD4s(0);
                            setD6s(0);
                            setD8s(0);
                            setD10s(0);
                            setD12s(0);
                            setD20s(0);
                        }}
                    >
                        Clear
                    </StyledButton>
                    <StyledButton
                        onClick={() => {
                            console.log(log);
                            const result = parseAndRoll(rollString);
                            console.log(result);
                            setLog([ ...log, `${rollString} = ${result}` ])
                        }}
                    >
                        Roll!
                    </StyledButton>
                    <ul>{d4s} </ul>
                    <ul>{d6s} </ul>
                    <ul>{d8s} </ul>
                    <ul>{d10s} </ul>
                    <ul>{d12s} </ul>
                    <ul>{d20s} </ul>
                </Box>

                <Box
                    p={5}
                    fontSize={4}
                    width={[ 1, 1/3, 1/3 ]}
                    color='white'
                    bg='#6c71c4'
                >
                    <Heading>Roll Log</Heading>
                    { log.map( e => <Text>{ e.toString() }</Text>) }
                </Box>
            </Flex>
        </AppRoot>
    );
}

export default App;
