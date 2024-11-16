import { Link } from "~/shared/ui/link"
import { Frame } from "~/shared/ui/frame"
import { useState } from "react"
import clsx from "clsx"

interface Props {
	className?: string
}

const NoticeFrame = (props: Props) => {
	const [isOpen, setOpen] = useState(false)

	const toggleOpen = () => {
		setOpen(!isOpen)
	}

	const notices = [
		{
			id: 1,
			title: "Покупка",
			time: "15:44",
			date: "12-02-2024"
		},
		{
			id: 2,
			title: "Такси",
			time: "15:44",
			date: "12-02-2024"
		},
		{
			id: 3,
			title: "Поездка в Италию",
			time: "15:44",
			date: "12-02-2024"
		},
		{
			id: 4,
			title: "Ресторан",
			time: "15:44",
			date: "12-02-2024"
		}
	]

	return (
		<div className={clsx("w-fit relative", props.className)}>
			<Link onClick={() => toggleOpen()}>Уведомления</Link>
			<Frame isOpen={isOpen} className={"-left-[130px] !h-[400px] !w-96"}>
				<div className={"grid w-full justify-center p-4"}>
					{notices.map((notice) => {
						return (
							<div className={"flex gap-2 w-80 h-[91px] justify-between"} key={notice.id}>
								<div className={"text-sm h-10 flex justify-center"}>
									<img src="assets/notice.svg" alt="notice" className={"h-full aspect-square mt-4"}/>
								</div>
								<div className={"content-center text-sm mb-4"}>
									{ notice.title }
								</div>
								<div className={"grid text-sm"}>
									<div className={"items-center w-full justify-center flex pt-6"}>{ notice.time }</div>
									<div className={"text-slate-50 content-center flex justify-center items-center w-full pb-6 text-[#bbb]"}>{ notice.date }</div>
								</div>
							</div>
						)
					})}
				</div>
			</Frame>
		</div>
	)
}
export { NoticeFrame }
