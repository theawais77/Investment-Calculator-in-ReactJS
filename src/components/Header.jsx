
import LOGO from '../assets/investment-calculator-logo.png';

export default function Header(){
    return(
        <header id='header'>
            <img src={LOGO} alt='logo showing money bag' />
            <h1>Investment calculator</h1>
        </header>
    )
}