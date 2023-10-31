import { useState } from 'react';
import { Icon } from "@/ui";
import { useLocation, useNavigate } from 'react-router-dom';


const navList = [
	{
		icon: "home",
		text: "Главная",
		route: "/"
	},
	{
		icon: "search",
		text: "Поиск адресов",
		route: "/search"
	},
	{
		icon: "table",
		text: "Таблицы",
		route: null
	},
	{
		icon: "date",
		text: "Календарь",
		route: null
	},
	{
		icon: "mark",
		text: "Карты",
		route: null
	},
	{
		icon: "tv",
		text: "Виджеты",
		route: null
	},
	{
		icon: "settings",
		text: "Настройки",
		list: [
			{ icon: "person", text: "Настройки профиля" },
			{ icon: "bank", text: "Управление финансами" },
		],
		route: null
	},
	{
		icon: "out",
		text: "Выход",
		route: null
	},

];



function SelectItem(params: any) {
	const { text, icon, list } = params.data;
	const [isOpen, setOpen] = useState(false);


	const clickPreview = (e: object) => {
		console.log(e);

	}

	return (<>
		<div className="select">
			<div data-open={isOpen} className="select__preview" onClick={() => setOpen(prev => !prev)}>
				<Icon icon={icon} />
				<p>{text}</p>
			</div>
			<ul data-open={isOpen} className="select__list">
				{list.map((el, i) =>
					<li key={i} className="select__item">
						<Icon icon={el?.icon} />
						<p>{el?.text}</p>
					</li>
				)}
			</ul>
		</div>
	</>)
}


function NavBar() {
	const location = useLocation();
	const navigate = useNavigate();

	const goPage = (e: string) => e && navigate(e);


	return (<>
		<div className="nav">
			<h4 className="nav__title">Меню</h4>
			<ul className="nav__list">
				{navList.map((el, i) =>
					<li key={i} className="nav__item" onClick={() => goPage(el.route)} data-active={location.pathname === el.route}>
						{
							!el.list ?
								<>
									<Icon icon={el?.icon} />
									<p>{el?.text}</p>
								</>
								: <SelectItem data={el} />
						}
					</li>
				)}
			</ul>
		</div>
	</>)
}

export default NavBar;