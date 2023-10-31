interface FooProp {
	icon: string;
	className?: string;
}

import sprite from '../assets/sprite.svg';


function Icon(props: FooProp) {

	return (<>
		<svg className={props?.className}>
			<use xlinkHref={`${sprite}#${props.icon}`}></use>
		</svg>
	</>)
}


export default Icon;