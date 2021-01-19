import React from "react";
import './Projects.css';
import Sudoku from '../../images/sudoku.jpg'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Footer from './Footer'

function Projects(props) {
    return (
        <>
            <div className='ProjectsContainer'>
                <Accordion className="ProjectsContainer">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <p>Sudoku GUI + Solver</p>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body><p>A Sudoku GUI that allows user to play Sudoku as
                            many times as they want, and the board can solve iteself if the player gets
                            stuck
                     <br />
                     Language: <strong>Python</strong>
                                <br />
                                <a href="https://github.com/Andy581/SudokuGUI"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    aria-label="GitHub"> GitHub
                        </a>
                            </p>
                                <img src={Sudoku} alt='Sudoku GUI'></img>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                <p>Future Projects!</p>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body><p>Come back soon to see what's in stock! </p></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
            <Footer />
        </>
    )
}

export default Projects;