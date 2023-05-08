import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";


function App() {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data);

  return (
    <>
      <h1 className='text-6xl text-purple-500 text-center'>HOT HOT COLD COFFEE :{data.length}</h1>
      <div className="grid grid-cols-2 gap-2">
        {
          coffees.map(d => <CoffeeCard key={d._id} coffee={d} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
