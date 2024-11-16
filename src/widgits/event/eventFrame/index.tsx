import { Link } from "~/shared/ui/link"
import { Frame } from "~/shared/ui/frame"
import { useState } from "react"
import clsx from "clsx"
import { useNavigate } from "react-router-dom"

interface Props {
	className?: string
}

const EventFrame = (props: Props) => {
	const [isOpen, setOpen] = useState(false)
	const navigate = useNavigate()

	const toggleOpen = () => {
		setOpen(!isOpen)
	}

	return (
		<div className={clsx("w-fit relative", props.className)}>
			<Link onClick={() => toggleOpen()}>Событие</Link>
			<Frame isOpen={isOpen} className={"-left-[85px] !h-fit"}>
				<div className={"grid w-full justify-center p-4"}>
					<div className={"flex gap-2"}>
						<img src="assets/calendar.svg" alt="calendar" />
						<Link className={"after:!bg-asphalt"} onClick={ () => navigate("/create-event") }>Создать событие</Link>
					</div>
					{/* <div className={"flex gap-2"}>
						<img src="assets/calendar.svg" alt="calendar" />
						<Link className={"after:!bg-asphalt"}>Создать ивент</Link>
					</div> */}
				</div>
			</Frame>
		</div>
	)
}
export { EventFrame }
