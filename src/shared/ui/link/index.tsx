import { ReactNode } from "react"
import "./index.css"
import clsx from "clsx"

interface Props {
	onClick?: () => void
	children?: ReactNode
	className?: string
}

const Link = (props: Props) => {
	return (
		<button onClick={props.onClick} className={clsx("button", props.className)}>{ props.children }</button>
	)
}
export { Link }
