import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SubmitButton from './SubmitButton'

function EacthQA(props) {
    const [first, setCount] = useState(0)
    // const [item,setItem] = useState({})
    const [second, setCounttwo] = useState(1)
    let [qtnSolvedCounter, settensolvedCounter] = useState(0)
    let [correct, setCorrect] = useState(0)
    const [isButton1Disabled, setDisabled] = useState(false)
    const [clickFirst,setClickFirst] = useState(false)




    const nextButton = () => {
        setClickFirst(false)

        
         if(clickFirst==false){
             alert('Hey man choose the ans first.')
             settensolvedCounter(qtnSolvedCounter)
         }else {
            setCount(first + 1)
        setCounttwo(second + 1)
        if (second >= 10) {
            setCount(9)
            setCounttwo(10)
        }
        settensolvedCounter((prevs) => prevs + 1)
        if (qtnSolvedCounter >= 10) {
            settensolvedCounter(10)
        }
         setDisabled(false)
         }
    }
    const prevButton = () => {
        setCount(first - 1)
        setCounttwo(second - 1)
        if (first <= 0) {
            setCount(0)
            setCounttwo(1)
        }
        settensolvedCounter((prevs) => prevs - 1)
        if (qtnSolvedCounter <= 0) {
            settensolvedCounter(0)
        }
        setDisabled(false)

    }
    const restartButton = () => {
        let ans = window.confirm('Do you want to Quit ?')
        if (ans) {
            setCount(0)
            setCounttwo(1)
            settensolvedCounter(0)
            setCorrect(0)
        }
        else {

        }

    }

    return (
        <div>
            {

                props.data.slice(first, second).map(item => <div className='container'>
                    <div class="list-group main-body">

                        <a href="#" class="list-group-item list-group-item-action active">
                            Q.N {item.id} {item.question}
                        </a>
                        <button type="button" class="btn btn-outline-dark" onClick={() => {
                            setDisabled(true)
                            setClickFirst(true)
                            if (item.correct_answer == 'a') {
                                
                                setCorrect(correct + 1)
                                

                            }
                            else {
                                setCorrect(correct)
                            }

                        }} disabled={isButton1Disabled} > 1. {item.answer_a}</button>
                        <button type="button" class="btn btn-outline-dark" onClick={() => {
                            setDisabled(true)
                            setClickFirst(true)

                            if (item.correct_answer == 'b') {
                                setCorrect(correct + 1)
                                

                            }
                            else {
                                setCorrect(correct)
                            }

                        }} disabled={isButton1Disabled} > 2. {item.answer_b}</button>
                        <button type="button" class="btn btn-outline-dark" onClick={() => {
                            setDisabled(true)
                            setClickFirst(true)

                            if (item.correct_answer == 'c') {
                                setCorrect(correct + 1)
                                

                            }
                            else {
                                setCorrect(correct)
                            }

                        }} disabled={isButton1Disabled} > 3. {item.answer_c}</button>
                        <button type="button" class="btn btn-outline-dark" onClick={() => {
                            setDisabled(true)
                            setClickFirst(true)

                            if (item.correct_answer == 'd') {
                                
                                setCorrect(correct + 1)
                                

                            }
                            else {
                                setCorrect(correct)
                            }

                        }} disabled={isButton1Disabled} > 3. {item.answer_d}</button>

                    </div>
                    <div style={{ textAlign: 'center' }} className='m-5'>
                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <label class="btn btn-secondary">
                                <input type="radio" name="options" id="option1" onClick={prevButton} /> Previous
                            </label>
                            <label class="btn btn-secondary">
                                <input type="radio" name="options" id="option2" onClick={restartButton} /> Restart ?
                            </label>
                            <label class="btn btn-secondary">
                                <input type="radio" name="options" id="option3" onClick={nextButton} /> Next
                            </label>
                        </div>

                    </div>
                    <h1>Question Solved -  {qtnSolvedCounter}/10 </h1>
                    <SubmitButton qtnsolved = {qtnSolvedCounter} ansCorrect = {correct} />
                    <Link className='nav-link' to='/'><button type="button" class="btn btn-primary mt-1 btn-lg btn-block">Quit Game !</button></Link>
                </div>)
            }

        </div>
    )
}

export default EacthQA
