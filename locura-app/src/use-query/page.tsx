import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

type Starship = {
  name: string;
  length: string;
};

const UseQueryPage = () => {
  const navigate = useNavigate();
  const { data, isLoading, error, refetch, isFetching } = useQuery<Starship[]>({
    queryKey: ["info"],
    queryFn: () =>
      fetch("https://swapi.info/api/starships").then((res) => res.json()),
  });

  if (isLoading) return "Cargando...";
  if (error) return "Error";

  return (
    <>
      <div className="flex gap-2 items-center justify-between">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="h-10 bg-blue-900 text-white p-2 rounded-md hover:bg-blue-800 transition-all duration-200 cursor-pointer transform hover:scale-105"
        >
          Volver
        </button>
        <h1>Use Query</h1>
        <button
          onClick={() => {
            refetch();
          }}
          className="h-10 w-35 bg-blue-900 text-white p-2 rounded-md hover:bg-blue-800 transition-all duration-200 cursor-pointer transform hover:scale-105"
        >
          {isFetching ? "Actualizando..." : "Actualizar"}
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {data?.map((info) => (
          <div
            key={info.name}
            className="flex items-center justify-center bg-gray-800 p-2 rounded-md"
          >
            <p>
              {info.name} - {info.length}m
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default UseQueryPage;
