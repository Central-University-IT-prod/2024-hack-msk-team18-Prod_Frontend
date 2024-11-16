import { ReactNode } from "react"
import "./index.css"
import clsx from "clsx"

interface Props {
	children?: ReactNode
	isOpen?: boolean
	className?: string
}

const Frame = (props: Props) => {
	return (
		<dialog className={clsx("border-2 border-asphalt dialog", props.className)} open={props.isOpen}>
			{ props.children }
		</dialog>
	)
}
export { Frame }
