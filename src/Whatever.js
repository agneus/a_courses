import React, {useState} from 'react'
import './Whatever.css'

function Whatever() {
    const [tips,setTips] = useState(['there is no tip']);
    const [sch,setSch] = useState(['the real schedule is inside the heart']);
    const [tut,setTut] = useState(['BUET Tutorial']);
    const [inp1, setInp1] = useState('');
    const [inp2, setInp2] = useState('');
    const [inp3, setInp3] = useState('');

    var wee = () =>{
        var a = inp1;
        setTips([...tips,a]);
        setInp1('');
    }
    var wee2 = () =>{
        var a = inp2;
        setSch([...sch,a]);
        setInp2('');
    }
    var wee3 = () =>{
        var a = inp3;
        setTut([...tut,a]);
        setInp3('');
    }
    return (
        <div className='whatever'>
            <div className='what what1'>
                <h2>Tips of the day</h2>
                {tips.map(tip => <p>{tip}</p>)}
                <input type="text" onChange = {(e) => setInp1(e.target.value)}  />
                <button onClick={() =>wee()} >hyaa</button>
            </div>
            <div className='what what2'>
                <h2>Test Schedule</h2>
                {sch.map(sch => <p>{sch}</p>)}
                <input type="text" onChange = {(e) => setInp2(e.target.value)}/>
                <button onClick={() =>wee2()}>tou</button>
            </div>
            <div className='what what3'>
                <h2>My tutorials</h2>
                {tut.map(t => <p>{t}</p>)}
                <input type="text"  onChange = {(e) => setInp3(e.target.value)}/>
                <button onClick={() =>wee3()}>sore</button>
            </div>
        </div>
    )
}

export default Whatever
