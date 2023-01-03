import React from 'react'
import { useForm } from "react-hook-form";

const Novedades = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
     
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Identificacion' {...register("identificacion", { required: true })} />
        <input placeholder='Novedad' {...register("novedad" )} />
        <input placeholder='Cargo' {...register("tipo ")} />
        <input placeholder='Centro de costo' {...register("idccosto")} />
        <label htmlFor="cantidad">cantidad</label>
        <input type="radio"  id='cantidad' {...register("cantidad")}/>
        <label htmlFor="valor">valor</label>
        <input type="radio" id='valor' {...register("valor")} />
        <input type="submit" />
      </form>
    );
}

export default Novedades