

export function PageContent({targetContent}){

	if (targetContent == "home") {
		return(
			<main>
				<h1>Welcome to the website homepage!</h1>
			</main>
		)
	} else {
		return(
			<main>
				<p>Thankyou for visiting! You last visited the {targetContent} page, that's awesome!</p>
			</main>
		)
	}

	
}