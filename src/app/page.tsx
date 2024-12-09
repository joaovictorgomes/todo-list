import FormTodoList from "@/components/form-todo-list";
import myImage from "../assets/todo-list.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="h-[200px] bg-custom-dark"></div>

      <div className="absolute top-[4.5rem] left-1/2 transform -translate-x-1/2">
        <Image src={myImage} alt="Minha imagem" width={100} height={100} />
      </div>

      <div className="flex-1 bg-custom-dark-secundary min-h-[calc(100vh-200px)]">
        <div className="absolute top-[10.81rem] left-1/2 transform -translate-x-1/2">
          <FormTodoList />
        </div>
      </div>
    </div>
  );
}
