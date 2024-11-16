import { Link } from "~/shared/ui/link"
import { UserData } from "~/shared/ui/user"
import { EventList } from "~/widgits/event/eventList"

export const ProfileContent = () => {

	return (
		<main className={"w-[80vw] min-h-full ml-[10vw] pt-28 pb-24"}>
			<div className={"flex"}>
				<div className={"h-96 w-[220px] items-center grid"}>
					<h1 className={"text-3xl font-bold w-fit"}>Ваш профиль</h1>
					<div className={"w-full aspect-square"}>
						<img src="assets/user-avatar.svg" alt="avatar" className={"w-full aspect-square"} />
					</div>
					<p className={"text-xl"}>Измените свой аватар</p>
					<button className={"bg-blue w-52 h-12 text-md border rounded-lg text-[#fff] hover:scale-95 transition-all duration-300"}>Выберите файл</button>
				</div>
				<div className={"h-96 w-full flex items-center"}>
					<div className={"h-full grid align-middle w-full"}>
						<div className={"flex px-32 text-2xl min-h-1/3 items-center w-full relative"}>
							<div>
								<p>Ваше имя</p>
								<UserData param={"id"} />
							</div>
							<Link className={"text-blue after:!bg-blue absolute right-72"}>Редактировать</Link>
						</div>
						<div className={"flex px-32 text-2xl min-h-1/3 items-center relative"}>
							<div>
								<p>Ваш номер телефона</p>
								<UserData param={"phonenumber"}/>
							</div>
							<Link className={"text-blue after:!bg-blue absolute right-72"}>Редактировать</Link>
						</div>
						<div className={"flex px-32 text-2xl min-h-1/3 items-center relative"}>
							<div>
								<p>Ваш номер карты</p>
								<UserData param={"card"}/>
							</div>
							<Link className={"text-blue after:!bg-blue absolute right-72"}>Редактировать</Link>
						</div>
					</div>
				</div>
			</div>
			<div className={"grid mt-16"}>
				<h1 className={"text-3xl font-bold w-fit"}>Ваши события</h1>
				<div className={"mt-4 text-lg"}>
					<EventList />
				</div>
			</div>
		</main>
	)
}
