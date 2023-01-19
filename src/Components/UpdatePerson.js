import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdatePerson = (args) => {
  const [person, setPerson] = useState({});
  const { id } = useParams();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch(`https://localhost:7128/People/${id}`)
      .then(response => response.json())
      .then(data => setPerson(data))
      .catch(error => console.log(error));
  }, [id]);



  const onSubmit = data => axios.put(`https://localhost:7128/People`, data).then((response) => {console.log("successful edit")})

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mt-3 mb-3">
      <input name="id" required={true} style={{display:"none"}} defaultValue={id} {...register("id")} />
      <div className="mb-3">
      <label style={{margin: 10}}>First Name: </label>
      <input name="firstName" required={true} defaultValue={person.firstName} type="text" {...register("firstName")}/>
      </div>
      <div className="mb-3">
      <label style={{margin: 10}}>Last Name: </label>
      <input name="lastName" required={true} defaultValue={person.lastName} type="text" {...register("lastName")}/>
      </div>
      <div className="mb-3">
      <label style={{margin: 10}}>Email: </label>
      <input name="email" required={true} defaultValue={person.email} type="text" {...register("email")}/>
      </div>
      <div className="mb-3">
      <label style={{margin: 10}}>Title: </label>
      <input name="title" required={true} defaultValue={person.title} type="text" {...register("title")}/>
      </div>
      <button type="submit" onClick={handleSubmit(onSubmit)}>Update</button>
    </form>
  );
}

export default UpdatePerson;




