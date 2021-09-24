export function Audio({data}){
    return <section className="audio-sec">
         <audio src={data[0]?.phonetics[0].audio} controls className="audio">
            Browser does not support audio element
        </audio> 
    </section>
}

export function Meanings({data}){
    
    return <div className="meanings-sec">
      {data.map(meanings => meanings.meanings.map(word =>{
          return word.definitions.map(def => {
             
            return <section className="single-meaning">
                <p className="meaning-text">{def.definition}</p>
                {def.example && <p><span style={{color:'green'}}>Example : </span><span className="example-text">{def.example}</span></p>}

                {def.synonyms.length > 1 && <p><span style={{color:'brown'}}>Synonyms : </span>{def.synonyms.map(synonym => {
                    return <span className="example-text" >{synonym}, </span>
                })}</p>}
            </section>
          })
      }))}
    </div>
}

