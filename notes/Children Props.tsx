/*--= May 3, 2024: children =--*/
// - https://www.youtube.com/watch?v=Sq0FoUPxj_c
// - Children props gives more flexibility than regular props

// Component:
function ChildComponent(props) {
	return (
		<div>
			<h1>Hello {props.name}</h1>
			{props.children}
		</div>
	);
}

// Usage:
function App() {
	return (
		<ChildComponent name="Odee">
			<p>These are the children elements</p>
		</ChildComponent>
	);
}
