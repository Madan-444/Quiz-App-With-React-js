import React, { useState, Fragment } from 'react'
import { Button, Modal,Card } from 'react-bootstrap'
import {Link } from 'react-router-dom'

function SubmitButton({ qtnsolved, ansCorrect }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            {/* <h3> {ansCorrect} </h3> */}
            {
                (qtnsolved >= 10) &&
                <>
                    <Button variant="secondary" size='lg' block onClick={handleShow}>
                        Submit ??
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <Card>
                                    <Card.Header>Congrats ! Your score is {ansCorrect}</Card.Header>
                                    <Card.Body>
                                        <Card.Title> </Card.Title>
                                        <Card.Text>
                                            For more Question Sets, Click bellow. We will provide awesome question and answer like this.
                                        </Card.Text>
                                        <Button variant="primary">See AnsWers ?</Button>
                                    </Card.Body>
                                </Card>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                            Next Question Set?
                            </Button>
                           <Link className='nav-link' to= '/' > <Button variant="primary" onClick={handleClose}>
                                Save All?
                            </Button></Link>
                        </Modal.Footer>
                    </Modal>
                </>


            }
        </div>
    )
}

export default SubmitButton
