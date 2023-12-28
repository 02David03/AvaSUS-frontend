import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-12">
      <h1>Oops!</h1>
      <h5> Desculpe, o endereço que está tentando acessar não foi encontrado. </h5>
      <p className="text-gray-dark">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}