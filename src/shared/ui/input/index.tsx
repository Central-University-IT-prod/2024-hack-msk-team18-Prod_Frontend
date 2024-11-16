import clsx from "clsx"

interface Props {
	placeholder?: string
	className?: string
}


const Input = (props: Props) => {
	return (
		<input type="text" className={clsx("border-2 border-green rounded-md w-72 h-8 px-2 outline-none mt-2 text-sm text-green", props.className)} placeholder={props.placeholder} />
	)
}
export { Input }
