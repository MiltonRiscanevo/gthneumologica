import React from 'react'
import {useForm} from "react-hook-form"
import {ErrorMessage} from "@hookform/error-message"

const HiringForm = () => {
    const { register,formState:{errors}, handleSubmit } = useForm({criteriaMode:"all"});
    const onSubmit = data => console.log(data);

  return (        
    <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Identificacion' {...register("identificacion", { required: "Campo requerido",pattern: {
            value: /\d+/,
            message: "Deben ser solo numeros"
          },
          minLength: {
            value: 6,
            message: "minimo registro 6 caracteres"
          },
          maxLength:{
            value:10,
            message:"limite de caracteres igual a 10"
          } })}
        />
        <ErrorMessage
         errors={errors}
          name="identificacion"
          render={({ messages }) => {
          console.log("messages", messages);
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
            : null;
        }}
      />
        <select {...register("tipoIdentificacion", {required:true})}>
            <option value="01">Cedula de ciudadania</option>
            <option value="02">Cedula de extrangeria</option>
            <option value="03">Tarjeta de identidad</option>
            <option value="06">Pasaporte</option>
            <option value="07">Permiso especial de trabajo</option>
            <option value="08">Permiso de proteccion temporal</option>
        </select>
        <input type="text" placeholder='Primer apellido' {...register("firstLastName",{
          required:"Campo requerido"
        })} />
        <input type="text" placeholder='Segundo apellido' {...register("secondLastName",{
          required:"Campo requerido"
        })} />
        <input type="text" placeholder='Primer nombre' {...register("firstName",{
          required:"Campo requerido"
        })} />
        <input type="text" placeholder='Segundo nombre' {...register("secondName",{
          required:"Campo requerido"
        })} />
        <input type="date" placeholder="fecha nacimiento" {...register("birthdate",{
          required:"Campo requerido"
        })}/>
        <select {...register("gender", {required:true})}>
            <option value="1">Masculino</option>
            <option value="2">Femenino</option>
        </select>
        <input type="submit"/>
    </form>

  )
}

export default HiringForm