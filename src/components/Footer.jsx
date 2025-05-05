import { Header } from "./Header";


export function Footer(){

	return (
		<footer>
			<p>Alex Holder Copyright {new Date(Date.now()).getFullYear()}</p>
			{ new Date(Date.now()).getDay() == 1 && <h6>Garfield loves Mondays, right?!</h6> }
		</footer>
	)
}