import '../styles/Banner.css'

function Banner({ children }) {
	return <div className='lmj-banner'>{children}</div>
}

export default Banner
/* On peut utiliser cette technique, notamment pour tester le style
return (
    <div style={{
        color: 'black',
        textAlign: 'right',
        padding: 32,
        borderBottom: 'solid 3px black'
    }}>
        <h1>La maison jungle</h1>
    </div>
    )
*/
