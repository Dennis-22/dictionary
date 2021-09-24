import {useEffect, useState} from 'react'
import axios from 'axios'
import './app.css'
import Header from './components/Header'
import {Audio, Meanings} from './components/Subs'


function App(){
    const [category, setCategory] = useState('en')
    const [word, setWord] = useState('')
    const [data, setData] = useState([])

let url = `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`


    const fetchData = async()=>{
        try {
            let results = await axios.get(url)
            setData(results.data)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(()=>{
        fetchData()
    },[word, category])

    return(
        <div className="app">

        <p className="title">Dictionary.</p>

            <Header category={category} setCategory={setCategory} word={word} setWord={setWord}/>
            {
                !word ?
                <p className="word">Start by searching a word</p> : 

                <p className="word">{word}</p>

            }

            {
                word && category === 'en' && data[0]?.phonetics[0].audio && <Audio data={data}/>
            }

            {
                word && <Meanings data={data} word={word}/>
            }
            
   
        </div>
    )
}

export default App