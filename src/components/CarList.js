import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

export default function CarList(){
    const {data,name} = useSelector((state)=>{
    const filteredCars = state.cars.data.filter((car)=>{
                return car.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase());
            });

            return {
                data:filteredCars,
                name:state.form.name
            }
});

    const dispatch = useDispatch();

    const handleDelete = (car)=>{
        
      dispatch(removeCar(car.key));
    }

   const renderedCars = data.map((car)=>{
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return <div className={`panel ${bold && 'bold'}`} key={car.key}>
        <p>{car.name}-${car.cost}</p>
        <button className='button is-danger' onClick={()=>handleDelete(car)}>Delete</button>
        </div>
   });

    return <div className='car-list'>
        {renderedCars}
        <hr />
    </div>
}

