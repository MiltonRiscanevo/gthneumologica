import React from 'react'
import {useForm} from "react-hook-form"
import {ErrorMessage} from "@hookform/error-message"
import "./form_hiring.css"

const HiringForm = () => {
    const { register,formState:{errors}, handleSubmit } = useForm({criteriaMode:"all"});
    const onSubmit = data => console.log(data);

  return (        
    <form onSubmit={handleSubmit(onSubmit)} id="container_formHiring">
        <h1>FORMULARIO REGISTRO NUEVOS CONTRATOS</h1>
        <div id='container_form_data'>
        <input id="input_formhiring" placeholder='Identificacion' {...register("identificacion", { required: "Campo requerido",pattern: {
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
        <select id='select_hiringform' {...register("tipoIdentificacion", {required:true})}>
            <option value="01">Cedula de ciudadania</option>
            <option value="02">Cedula de extrangeria</option>
            <option value="03">Tarjeta de identidad</option>
            <option value="06">Pasaporte</option>
            <option value="07">Permiso especial de trabajo</option>
            <option value="08">Permiso de proteccion temporal</option>
        </select>
        <input id="input_formhiring" type="text" placeholder='Primer apellido' {...register("firstLastName",{
          required:"Campo requerido"
        })} />
        <input id="input_formhiring" type="text" placeholder='Segundo apellido' {...register("secondLastName",{
          required:"Campo requerido"
        })} />
        <input id="input_formhiring" type="text" placeholder='Primer nombre' {...register("firstName",{
          required:"Campo requerido"
        })} />
        <input id="input_formhiring" type="text" placeholder='Segundo nombre' {...register("secondName",{
          required:"Campo requerido"
        })} />
        <div id="container_slct">
        <label htmlFor="birthdate">Fecha nacimiento</label>
        <input id="input_formhiring" type="date" placeholder="fecha nacimiento" {...register("birthdate",{
          required:"Campo requerido"
        })}/>
        </div>
        <div id="container_slct">
        <label htmlFor="gender">Genero</label>
        <select id='select_hiringform'{...register("gender", {required:true})}>
            <option value="1">Masculino</option>
            <option value="2">Femenino</option>
        </select>
        </div>
        <input id="input_formhiring" type="text" placeholder='Grupo sanguineo' {...register("g_sanguineo",{
          required:"Campo requerido"
        })} />
        <div id="container_slct">
        <label htmlFor="factor">Factor</label>
        <select id='select_hiringform' {...register("factor", {required:true})}>
            <option value="+">+ Positivo</option>
            <option value="-">- negativo</option>
        </select>
        </div>
        <div id="container_slct">
        <label htmlFor="legal_status">Estado civil</label>
        <select id='select_hiringform' {...register("legal_status", {required:true})}>
            <option value="1">Soltero</option>
            <option value="2">Casado</option>
        </select>
        </div>
        <div id="container_slct">
        <label htmlFor="nacionalidad">Nacionalidad</label>
        <select id='select_hiringform' {...register("nacionalidad", {required:true})}>
            <option value="1">Colombiano</option>
            <option value="2">Extrangero</option>
        </select>

        </div>
        <input id="input_formhiring" type="text" placeholder='Numero celular' {...register("cel_number",{
          required:"Campo requerido"
        })} />
        <div id="container_slct">
        <label htmlFor="hiring_date">Fecha ingreso</label>
        <input id="input_formhiring" type="date" placeholder="fecha ingreso" {...register("hiring_date",{
          required:"Campo requerido"
        })}/>
        </div>
        <select id='select_hiringform' {...register("type_pay", {required:true})}>
            <option value="1">Cheque</option>
            <option value="2">Consignacion</option>
        </select>
        <select id='select_hiringform' {...register("banco", {required:true})}>
            <option value="14">Itau</option>
            <option value="07">Bancolombia</option>
        </select>
        <input id="input_formhiring" type="number" placeholder='cuenta No' {...register("bank_account",{
          required:"Campo requerido"
        })} />
        <select id='select_hiringform' {...register("tipo_salario", {required:true})}>
            <option value="2">Integral</option>
            <option value="1">Basico</option>
        </select>
        <select id='select_hiringform' {...register("c_costo", {required:true})}>
            <option value="6201">ATPA</option>
            <option value="3201">TEHO</option>
        </select>
        <select id='select_hiringform' {...register("unidad_funcional", {required:true})}>
            <option value="4100">DIAD</option>
            <option value="3201">OPER</option>
        </select>
        <select id='select_hiringform' {...register("cargo", {required:true})}>
            <option value="0109">INFORMADOR ATENCIÓN AL PACIENTE</option>
            <option value="0131">INGENIERO</option>
        </select>
        <select id='select_hiringform' {...register("tipo_contrato", {required:true})}>
            <option value="05">CONTRATO INFERIOR AÑO</option>
            <option value="01">INDEFINIDO</option>
        </select>
        <select id='select_hiringform' {...register("factor_riesgos", {required:true})}>
            <option value="0,522">0.522</option>
            <option value="2,436">2.436</option>
        </select>
        <select id='select_hiringform' {...register("tipo_fondoafp", {required:true})}>
            <option value="100">Porvenir</option>
            <option value="101">Proteccion</option>
        </select>
        <select id='select_hiringform' {...register("tipo_fondoeps", {required:true})}>
            <option value="204">Sura</option>
            <option value="209">Compensar</option>
        </select>
        <select id='select_hiringform' {...register("tipo_fondocesant", {required:true})}>
            <option value="502">Porvenir</option>
            <option value="501">Proteccion</option>
        </select>
        <input id="input_formhiring" type="number" placeholder='Salario' {...register("salario",{
          required:"Campo requerido"
        })} />
        <input id="input_formhiring" type="text" placeholder='Horas mes' {...register("month_hours",{
          required:"Campo requerido"
        })} />
        </div>
        <div id='input_sbt_cont'>
          <input id="input_sbt" type="submit"/>
          <button id="input_sbt">Generar formulario</button>
        </div>
    </form>

  )
}

export default HiringForm