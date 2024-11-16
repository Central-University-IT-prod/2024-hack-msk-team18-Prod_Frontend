import clsx from "clsx"
import { EventType } from "~/shared/api/event/model"


interface Props {
	className?: string
	username: string
	event: EventType
}

export const EventCard = (props: Props) => {
	let color = "border-black"
	if (props.event.eventBalance > 0) {
		color = "border-green-light"
	} else if (props.event.eventBalance < 0) {
		color = "border-red"
	}
	return (
		<div className={clsx("w-full border-2 rounded-xl h-28 mt-4 flex justify-between", props.className, color)}>
			<div className={"h-full aspect-square flex items-center ml-4 gap-6"}>
				<img src="assets/user-avatar.svg" alt="" className={"h-[80%] aspect-square"}/>
				<p className={"font-bold text-xl"}>{ props.username }</p>
			</div>
			<div className={"h-full flex items-center"}>
				<p className={"font-bold text-xl"}>{ props.event.eventName }</p>
			</div>
			<div className={"h-full flex items-center"}>
				<p className={"font-bold text-xl"}>{ props.event.eventBalance }</p>
			</div>
			<div className={"h-full flex items-center mr-8"}>
				<p className={"font-bold text-xl text-[#bbb]"}>{ props.event.eventDate }</p>
			</div>
		</div>
	)
}
