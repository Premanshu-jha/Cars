import { useSelector } from "react-redux";

export default function CarValue(){
     
    const totalCost = useSelector((state)=>{
        const filteredCars = state.cars.data.filter((car)=>{
            return car.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase());
        });

        const cost = 0;
        return filteredCars.reduce(((acc,car)=>{
            return acc + parseInt(car.cost);
        }),cost);
    });
    return <div className='car-value'>
          Total Cost:${totalCost}
        </div>
}