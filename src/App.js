import React,{useState} from 'react'


function App({Highlighter}) {

    const [text, setText] = useState('')
    const [subText, setSubText] = useState('')
    const [sensitiveCase, setSensitiveCase] = useState(false)

return (
    <div>
        <textarea 
        data-testid="source-text" 
        style={{width:'100%', height:'100px'}}
        value={text}
        onChange={e => setText(e.target.value)}
        /><br></br>
        <input 
        data-testid="search-term"
        style={{width:'100%'}} 
        value={subText}
        onChange={e => setSubText(e.target.value)}
        />
        <label>case sensitive ?</label>
        <input 
        type="checkbox" 
        data-testid="case-sensitive" 
        checked={sensitiveCase}
        onChange={() => setSensitiveCase(!sensitiveCase)}
        /> <br></br><br></br>
        <Highlighter
        highlightClassName="YourHighlightClassName"
        searchWords={[subText]}
        autoEscape={true}
        textToHighlight={text}
        caseSensitive={sensitiveCase}
        /> 
    </div>
)}

export default App