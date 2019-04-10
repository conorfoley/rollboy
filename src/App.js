import React, { Component, useState } from 'react';
import { Box, Image, Heading, Text, Button, Flex } from 'rebass';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
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
    background-color: lightgray;
    @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');
    font-family: 'Source Code Pro', monospace;
`;

const StyledButton = styled(Button)`
    background-color: black;
    border: .5rem solid teal;

    transition: all .1337s ease-in-out;
    &:hover { transform: scale(1.1); }
    &:active { transform: scale(1.337); }
`;


// TODO make this one function
const rollD20 = () => Math.floor(Math.random()*20+1);
const rollD12 = () => Math.floor(Math.random()*12+1);
const rollD10 = () => Math.floor(Math.random()*10+1);
const rollD8 = () => Math.floor(Math.random()*8+1);
const rollD6 = () => Math.floor(Math.random()*6+1);
const rollD4 = () => Math.floor(Math.random()*4+1);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            d4: 0,
            d6: 0,
            d8: 0,
            d10: 0,
            d12: 0,
            d20: 0,
        };
    }
    render() {
        // TODO make this one function
        let d4s = []
        for (let i = 0; i < this.state.d4; i++) {d4s.push(<Image src={d4svg} height="5rem" />)}
        let d6s = []
        for (let i = 0; i < this.state.d6; i++) {d6s.push(<Image src={d6svg} height="5rem" />)}
        let d8s = []
        for (let i = 0; i < this.state.d8; i++) {d8s.push(<Image src={d8svg} height="5rem" />)}
        let d10s = []
        for (let i = 0; i < this.state.d10; i++) {d10s.push(<Image src={d10svg} height="5rem" />)}
        let d12s = []
        for (let i = 0; i < this.state.d12; i++) {d12s.push(<Image src={d12svg} height="5rem" />)}
        let d20s = []
        for (let i = 0; i < this.state.d20; i++) {d20s.push(<Image src={d20svg} height="5rem" />)}

        return (
            <AppRoot>
                <Flex flexWrap='wrap'>

                    <Box
                        p={5}
                        fontSize={4}
                        width={[ 1, 1, 1 ]}
                        color='white'
                        bg='DarkMagenta'
                    >
                        <StyledButton onClick={() => this.setState({ d4: this.state.d4 + 1 })}> <Image src={d4svg} height="5rem"/> </StyledButton>
                        <StyledButton onClick={() => this.setState({ d6: this.state.d6 + 1 })}> <Image src={d6svg} height="5rem"/> </StyledButton>
                        <StyledButton onClick={() => this.setState({ d8: this.state.d8 + 1 })}> <Image src={d8svg} height="5rem"/> </StyledButton>
                        <StyledButton onClick={() => this.setState({ d10: this.state.d10 + 1 })}> <Image src={d10svg} height="5rem"/> </StyledButton>
                        <StyledButton onClick={() => this.setState({ d12: this.state.d12 + 1 })}> <Image src={d12svg} height="5rem"/> </StyledButton>
                        <StyledButton onClick={() => this.setState({ d20: this.state.d20 + 1 })}> <Image src={d20svg} height="5rem"/> </StyledButton>
                    </Box>

                    <Box
                        p={5}
                        fontSize={4}
                        width={[ 1, 2/3, 2/3 ]}
                        color='white'
                        bg='DarkMagenta'
                    >
                        {`${this.state.d4 || ''} ${(!!this.state.d4 ? 'd4' : '')}`}
                        <StyledButton
                            onClick={() => this.setState({
                                d4: null,
                                d6: null,
                                d8: null,
                                d10: null,
                                d12: null,
                                d20: null,
                            })}>
                            Clear
                        </StyledButton>
                        <StyledButton>
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
                        bg='DarkMagenta'
                    >
                        Roll Log
                    </Box>
                </Flex>
            </AppRoot>
        );
    }
}

export default App;
