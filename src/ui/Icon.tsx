interface FooProp {
	icon: string;
	className?: string;
}


function Icon(props: FooProp) {

	return (<>
		<svg className={props?.className}>
			<use xlinkHref={`/sprite.svg#${props.icon}`}></use>
		</svg>
	</>)
}


export default Icon;