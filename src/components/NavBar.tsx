import { useState } from 'react';
import { Icon } from "../ui";
import { useLocation, useNavigate } from 'react-router-dom';

interface navElement {
	icon: string;
	text: string;
	route: string | null;
	list: { icon: string, text: string }[];
};


const navList: navElement[] = [
	{
		icon: "home",
		text: "Главная",
		route: "/",
		list: []
	},
	{
		icon: "search",
		text: "Поиск адресов",
		route: "/search",
		list: []
	},
	{
		icon: "table",
		text: "Таблицы",
		route: null,
		list: []
	},
	{
		icon: "date",
		text: "Календарь",
		route: null,
		list: []
	},
	{
		icon: "mark",
		text: "Карты",
		route: null,
		list: []
	},
	{
		icon: "tv",
		text: "Виджеты",
		route: null,
		list: []
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
		route: null,
		list: []
	},

];



function SelectItem(props: navElement) {
	const { text, icon, list } = props;
	const [isOpen, setOpen] = useState(false);

	return (<>
		<div className="select">
			<div data-open={isOpen} className="select__preview" onClick={() => setOpen(prev => !prev)}>
				<Icon icon={icon} />
				<p>{text}</p>
			</div>
			<ul data-open={isOpen} className="select__list">
				{list.map((el, i) =>
					<li key={i} className="select__item">
						<Icon icon={el.icon} />
						<p>{el.text}</p>
					</li>
				)}
			</ul>
		</div>
	</>)
}


function NavBar() {
	const location = useLocation();
	const navigate = useNavigate();

	const goPage = (e: any) => e && navigate(e);


	return (<>
		<div className="nav">
			<h4 className="nav__title">Меню</h4>
			<ul className="nav__list">
				{navList.map((el, i) =>
					<li key={i} className="nav__item" onClick={() => goPage(el.route)} data-active={location.pathname === el.route}>
						{
							el.list.length > 0
								? <SelectItem {...el} />
								:
								<>
									<Icon icon={el?.icon} />
									<p>{el?.text}</p>
								</>
						}
					</li>
				)}
			</ul>
		</div>
	</>)
}

export default NavBar;