import  {useState} from 'react'
import { TextField, MenuItem } from '@material-ui/core'

let categories = [
    {value: "English", label:"en"},
    {value: "Hindi", label:"hi"},
    {value: "Spanish", label:"es"},
    {value: "French", label:"fr"},
    {value: "Japanese", label:"ja"},
    {value: "Russian", label:"ru"},
    {value: "German", label:"de"},
    {value: "Italian", label:"it"},
    {value: "Korean", label:"ko"},
    {value: "English", label:"en"},
    {value: "English", label:"en"},

]

function Header({category, setCategory, word, setWord}){

    const handleChange = (language)=>{
        setCategory(language)
        setWord("")
    }

    return <div>
        <h1 style={{color:'#fff'}}>{word ? word : 'Word Hunt'}</h1>

        <section>
            <TextField label="Search a word" value={word} onChange={(e)=>setWord(e.target.value)} className="search"/>
            
            <TextField select label="Language" value={category} onChange={(e)=>handleChange(e.target.value)}>
                    
                {categories.map((option)=>{
                    return <MenuItem key={option.label} value={option.label}>
                        {option.value}
                    </MenuItem>
                })}
                        
            </TextField>
        </section>
    </div>

}

export default Header