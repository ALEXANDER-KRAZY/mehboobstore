"use client"

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

import useRegisterModal from "../hooks/useRegisterModal"
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);
    const {
      register,
      handleSubmit,
      formState: {
        errors,
      }
    } = useForm<FieldValues>({
      defaultValues: {
        name: '',
        email: '',
        password: ''
      }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
      setIsLoading(true);

      //axios post to the register api
      axios.post("/api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      })
    }

    const bodyContent = (
      <div className="
      flex
      flex-col
      gap4
      ">
        <Heading
        title="Welcome to our store"
        subtitle="Create an account"
        />
        <Input />
      </div>
    )
  return (
    <Modal
    title="Register"
    actionLabel="Continue"
    isOpen={registerModal.isOpen}
    onClose={registerModal.onClose}
    disabled={isLoading}
    onSubmit={handleSubmit(onSubmit)}
    body={bodyContent

    }
    />
  )
}

export default RegisterModal
