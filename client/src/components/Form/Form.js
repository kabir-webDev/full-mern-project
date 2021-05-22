import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const handlePost = () => {
    axios
      .post("http://localhost:1111/", {
        title: "Fred",
        message: "Flintstone",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("example")} />

      <input {...register("exampleRequired", { required: true })} />

      <input type="submit" />
      <button onClick={handlePost}>Post</button>
    </form>
  );
}
