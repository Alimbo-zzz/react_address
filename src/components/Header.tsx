import { Icon } from '../ui';


function Header() {


	return (<>
		<div className="header">
			<div data-name='logo' className='header__box'>
				<Icon icon='logo' />
				<span>Wrench CRM</span>
			</div>
			<div data-name='user' className='header__box'>
				<Icon icon='user' />
				<span>Имя Фамилия</span>
			</div>
		</div>
	</>)
}

export default Header;