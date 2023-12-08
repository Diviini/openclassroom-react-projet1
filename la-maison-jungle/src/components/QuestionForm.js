import { useState } from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    const isInputError = inputValue.includes('f')
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}    //Mettre la function ici pour formater
            />
            <button onClick={() => alert(inputValue)}> 
                Alertez moi 🚨
            </button>
            {isInputError && (<div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>)}

        </div>
    )

    //Permet de format l'input
    function checkValue(value) {
        if (!value.includes('f')) {
            setInputValue(value)
        }
    }
}



export default QuestionForm