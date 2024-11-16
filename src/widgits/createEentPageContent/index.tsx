import { Input } from "~/shared/ui/input"
import { Link } from "~/shared/ui/link"

export const CreateEventPageContent = () => {
	return (
		<main className={"w-[80vw] min-h-full ml-[10vw] pt-28 pb-24"}>
			<div className={"mt-4"}>
				<h1 className={"text-3xl font-bold w-fit"}>Ваше событие будет называться...</h1>
				<Input className={"w-[500px] h-[40px]"} placeholder={"Введите название события..."}></Input>
			</div>
			<div className={"flex mt-8 gap-2 text-lg"}>
				<p>Отправьте своим друзьям</p>
				<Link className={"text-blue after:!bg-blue"}>ссылку для приглашения</Link>
			</div>
			<button className={"bg-blue text-[#fff] w-52 h-12 border rounded-md hover:scale-95 transition-all duration-300 mt-4"}>Сохранить</button>
		</main>
	)
}
