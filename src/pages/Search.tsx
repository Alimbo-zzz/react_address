import { Icon } from "@/ui";
import { useState } from "react";

function Search() {
	const [inputValue, setInputValue] = useState('');
	const [address, setAddress] = useState([]);

	const sendRequest = async (e: any) => {
		e.preventDefault();

		var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
		var token = "844fd3828c54c1f682889d6fe1c3e0490bc0194b";
		var query = inputValue;

		var options = {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Token " + token
			},
			body: JSON.stringify({ query: query })
		}

		fetch(url, options)
			.then(response => response.json())
			.then(res => {
				console.log(res)
				let result = res?.suggestions?.map(el => (`${el.unrestricted_value}`));

				setAddress(result);
			})
			.catch(error => console.log("error", error));

	}

	return (<>
		<div className="search-page">
			<div className="search-page__head">
				<h2 className="title">Поиск</h2>
				<p className="text">Введите интересующий вас адрес</p>
				<form className="search-page__form" onSubmit={sendRequest}>
					<input value={inputValue} onChange={(e: any) => setInputValue(e.target.value)} minLength={3} className="inp" autoComplete="new-password" type="text" required placeholder="Введите интересующий вас адрес" />
					<button type="submit" className="btn">
						<Icon icon="search" />
						<span>Поиск</span>
					</button>
				</form>
			</div>
			<div data-open={address.length > 0} className="search-page__result">
				<h2 className="title">Адреса</h2>
				<ul className="search-page__list">
					{address.map((el, i) =>
						<li className="search-page__item text" onClick={() => setInputValue(el)} key={i}>{el}</li>
					)}
				</ul>
			</div>
		</div>
	</>)
}

export default Search;