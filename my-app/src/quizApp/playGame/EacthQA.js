import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function EacthQA(props) {
    const [first,setCount] = useState(0)
    console.log(first)
    
    const [second,setCounttwo] = useState(1)
    console.log(second)
    console.log(props.data)

    const nextButton=()=> {
        setCount(first+1)
        setCounttwo(second +1)
    }
    const prevButton=()=> {
        setCount(first-1)
        setCounttwo(second -1)
    }
    const quitButton =()=> {
        let ans = window.confirm('Do you want to Quit ?')
        if(ans) {
            setCount(0)
            setCounttwo(1)
        }
        else{
            
        }

    }
    return (
        <div>
            {
    
                props.data.slice(first,second).map(item => <div className='container'>
                    <div class="list-group">
                
                        <a href="#" class="list-group-item list-group-item-action active">
                            Q.N {item.id} {item.question}
                        </a>
                        <a href="#" class="list-group-item list-group-item-action">1. {item.answer_a} </a>
                        <a href="#" class="list-group-item list-group-item-action">2. {item.answer_b}</a>
                        <a href="#" class="list-group-item list-group-item-action">3. {item.answer_c}</a>
                        <a href="#" class="list-group-item list-group-item-action">4. {item.answer_d}</a>
                    </div>
                    <div style={{textAlign:'center'}} className='m-5'>
                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <label class="btn btn-secondary">
                                <input type="radio" name="options" id="option1" onClick={prevButton} /> Previous
                            </label>
                            <label class="btn btn-secondary">
                                <input type="radio" name="options" id="option2" onClick={quitButton} /> Restart ?
                            </label>
                            <label class="btn btn-secondary">
                                <input type="radio" name="options" id="option3" onClick={nextButton} /> Next
                            </label>
                        </div>
                        
                    </div>
                    <Link className='nav-link' to='/'><button type="button" class="btn btn-primary mt-1 btn-lg btn-block">Quit Game !</button></Link>
                </div>)
            }

        </div>
    )
}

export default EacthQA
