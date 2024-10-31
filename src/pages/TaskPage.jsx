import { useSearchParams, useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import Title from "../componentes/Title";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[500] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate("/")}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da tarefa</Title>
        </div>
      </div>
      <div className="bg-slate-200 p-4 rounded-md">
        <h2 className="text-xl font-bold text-slate-600">{title}</h2>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
}

export default TaskPage;
