import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NormalPage = () => {
  const [info, setInfo] = useState<any[]>([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    fetch("https://swapi.info/api/starships")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        setLoading(false);
        setRefetch(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        setRefetch(false);
      });
  }, [refetch, setRefetch]);

  if (loading) return "Cargando...";
  if (error) return "Error";

  return (
    <>
    <div className="flex flex-col gap-2">
    <div className="flex gap-2 items-center justify-between">
      <button onClick={() => {navigate(-1)}} className="h-10 bg-blue-900 text-white p-2 rounded-md hover:bg-blue-800 transition-all duration-200 cursor-pointer transform hover:scale-105">Volver</button>
      <h1>Normal</h1>
      <button onClick={() => {setRefetch(true)}} className="h-10 w-35 bg-blue-900 text-white p-2 rounded-md hover:bg-blue-800 transition-all duration-200 cursor-pointer transform hover:scale-105"> {refetch ? "Actualizando..." : "Actualizar"}</button>
      </div>
      <div className="grid grid-cols-3 gap-2">
      {info?.map((info) => (
        <div key={info.name} className="flex items-center justify-center bg-gray-800 p-2 rounded-md">
          <p>{info.name} - {info.length}m</p>
        </div>
      ))}
      </div>
    </div>
    </>
  );
}

export default NormalPage;
