import { useState } from "react"
import { Input } from "~/shared/ui/input"
import { Link } from "~/shared/ui/link"

interface Props {
	isOpen?: boolean
	setOpen?: () => void
}

const Login = (props: Props) => {
	const [mode, setMode] = useState(false)

	if (mode) {
		return (
			<dialog className={"w-[375px] h-[300px] border-2 border-[#fff] rounded-xl fixed top-40 text-xl p-4 bg-green text-[#fff] z-50"} open={props.isOpen}>
				<div className={"absolute hover:scale-90 transition-all duration-300 right-5 cursor-pointer"} onClick={props.setOpen}>
					<img src="assets/cross.svg" alt="" />
				</div>
				<div className={"bg-[#fff] h-[2px] w-[85%] translate-y-2"}></div>
				<div className={"mt-6"}>
					<p>Имя</p>
					<Input placeholder={"Укажите свое имя..."}></Input>
				</div>
				<div className={"mt-4"}>
					<p>Номер телефона</p>
					<Input placeholder={"Укажите номер телефона..."}></Input>
				</div>
				<div className={"flex !text-sm mt-4 gap-2"}>
					<p className={"text-[#bbb]"}>Нет аккаунта?</p>
					<Link onClick={() => setMode(!mode)}>Зарегистрируйся</Link>
				</div>
				<button className={"w-32 h-8 bg-blue text-sm mt-3 hover:scale-95 transition-all duration-300 rounded-lg"}>
					Вход
				</button>
			</dialog>
		)
	} else {
		return (
			<dialog className={"w-[375px] h-[300px] border-2 border-[#fff] rounded-xl fixed top-40 text-xl p-4 bg-green text-[#fff] z-50"} open={props.isOpen}>
				<div className={"absolute hover:scale-90 transition-all duration-300 right-5 cursor-pointer"} onClick={props.setOpen}>
					<img src="assets/cross.svg" alt="" />
				</div>
				<div className={"bg-[#fff] h-[2px] w-[85%] translate-y-2"}></div>
				<div className={"mt-6"}>
					<p>Представтесь</p>
					<Input placeholder={"Укажите свое имя..."}></Input>
				</div>
				<div className={"mt-4"}>
					<p>Номер телефона</p>
					<Input placeholder={"Укажите номер телефона..."}></Input>
				</div>
				<div className={"flex !text-sm mt-4 gap-2"}>
					<p className={"text-[#bbb]"}>Есть аккаунт?</p>
					<Link onClick={() => setMode(!mode)}>Войти</Link>
				</div>
				<button className={"w-44 h-8 bg-blue text-sm mt-3 hover:scale-95 transition-all duration-300 rounded-lg"}>
					Зарегистрироваться
				</button>
			</dialog>
		)
	}
}
export { Login }
