import './Greeting.css'

export function Greeting(props) {
    let greeting = ''

    switch (props.lang) {
        case 'de':
            greeting = 'Hallo';
            break;
        case 'fr':
            greeting = 'Bonjour';
            break;
        case 'en':
            greeting = 'Hello';
            break;
        case 'es':
            greeting = 'Olà';
            break;
        default: greeting = 'This language is not supported yet.';
    }

    return (
            <p>{greeting}, {props.children}.</p>
    )
}