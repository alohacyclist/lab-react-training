export function NumbersTable (props) {

    const createNumbersTable = () => {
        const items = []
        for(let i=1; i<props.limit; i++) {
            items.push(`${i}`)
        }
        return items.map(number => { 
            return <h3 
            style={{
                width: '100px',
                height: '100px',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                border:'2px solid black',
                borderRadius:'8px',
                backgroundColor: number % 2 === 0 ? 'red' : 'white'
            }}>{number}</h3> })
    }

    return (
        <div style={{width: '500px', display: 'flex', flexWrap: 'wrap', margin: '20px 40px'}}>
            {createNumbersTable()}
        </div>
    )
}