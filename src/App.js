import {useEffect, useState} from 'react'
import axios from 'axios'
import { Container} from '@material-ui/core'
import './app.css'
import Header from './components/Header'
import Meanings from './components/Meanings'



function App(){
    const [category, setCategory] = useState('en')
    const [word, setWord] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])

let url = `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`


    const fetchData = async()=>{
        setError(false)
        setLoading(true)
        try {
            let results = await axios.get(url)
            setData(results.data)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
            setError(true)
        }
    }

    // console.log(data);

    useEffect(()=>{
        fetchData()
    },[word, category])

    return(
        <div style={{background:'#282c34', height:'100vh'}}>
            <Container style={{textAlign:'center'}}>
                <Header category={category} setCategory={setCategory} word={word} setWord={setWord}/>
                <Meanings word={word} data={data}/>

            </Container>
        </div>
    )
}

export default App