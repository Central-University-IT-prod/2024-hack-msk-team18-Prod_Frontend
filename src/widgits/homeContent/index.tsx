import { useContext } from "react"
import { LoginContext } from "~/pages/home"

export const HomeContent = () => {
	const setLoginOpen = useContext(LoginContext)

	return (
		<main className={"w-[80vw] h-full ml-[10vw] pt-20"}>
			<div className={"mt-8 w-full"}>
				<div className={"flex gap-12 w-full"}>
					<div className={"relative w-full h-80"}>
						<div>
							<h1 className={"text-5xl"}>Меньше стресса</h1>
							<p className={"text-3xl"}>при разделении</p>
							<p className={"text-3xl"}>расходов с командой</p>
						</div>
						<div className={"absolute bottom-0"}>
							<p className={"text-3xl"}>Отслеживайте общие расходы и баланс</p>
							<p className={"text-3xl"}>в поездках, в группах, с друзьями и семьёй.</p>
						</div>
					</div>
					<div className={"h-full absolute right-[300px]"}>
						<img src="assets/phone.svg" alt="" className={"h-96"} />
					</div>
				</div>
			</div>
			<button className={"w-[200px] h-12 bg-blue mt-4 text-[white] hover:scale-95 transition-all duration-300 rounded-lg"} onClick={() => setLoginOpen(true)}>Регистрация</button>
			<div className={"mt-8"}>
				<img src="assets/some-image.jpg" alt="" />
			</div>
		</main>
	)
}
