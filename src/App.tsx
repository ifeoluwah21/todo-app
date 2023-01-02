import "./App.css";
import Registration from "./components/Auth/Registration";
import Button from "./components/UIs/Button";
import HomeSection from "./components/home/HomeSection";

function App() {
	return (
		<div className="bg-hero-pattern bg-no-repeat bg-left-top">
			{/* <Button
				onClickHandler={(event) => {}}
				className="border-none"
				type={"button"}>
				Click
			</Button> */}
			{/* <HomeSection /> */}
			<Registration />
		</div>
	);
}

export default App;
