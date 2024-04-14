'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Image from 'next/image';

interface IData {
  name: string;
  number: string;
  date: string;
}

const Booking = () => {
  const schema = z.object({
    name: z.string(),
    number: z.string().min(10).max(10),
    date: z.string().refine((val) => {
      return !isNaN(Date.parse(val));
    }, 'Enter a valid date'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<IData> = (data) => {
    console.log(data);
    toast.success('Form submitted successfully!');
    reset();
  };

  return (
    <section className="bg-booking bg-cover h-[430px] md:h-[515px] 2xl:h-[610px] pt-[60px] md:pt-[70px] 2xl:pt-[102px] w-full mx-auto px-[10px] md:px-[20px] 2xl:px-[120px]">
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={true}
      />
      <p className="text-white font-montez font-normal text-center text-[17px] md:text-[20px] 2xl:text-[22px] w-[100px] mx-auto">
        book a table
      </p>
      <p className="text-white font-sans font-medium text-center text-[40px] md:text-[50px] 2xl:text-[60px] w-[245px] mx-auto">
        book a table
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        <input
          type="text"
          {...register('name')}
          placeholder="your name"
          className="input-field"
        />
        {errors.name && (
          <span className="text-red-500 text-[14px] md:text-[20px]">
            Name is required
          </span>
        )}

        <input
          type="text"
          {...register('number')}
          placeholder="your number"
          className="input-field"
        />
        {errors.number && (
          <span className="text-red-500 text-[14px] md:text-[20px]">
            Number is required and must be 10 characters long
          </span>
        )}

        <div className="relative w-[600px] max-w-[100%] ">
          <input
            type="date"
            {...register('date')}
            className="input-field custom-date-input"
            style={{ color: 'white' }}
          />
          <span className="absolute top-0 right-[6px] bottom-0 flex items-center pointer-events-none hover:cursor-custom">
            <Image
              src="/calendar.svg"
              alt="Calendar"
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </span>
        </div>
        {errors.date && (
          <span className="text-red-500 text-[14px] md:text-[20px]">
            Date is required
          </span>
        )}

        <button
          type="submit"
          className="text-arsenal font-bold text-[14px] md:text-[20px] text-white bg-secondary-green w-[600px] max-w-[100%] h-[50px] hover:cursor-custom mt-2"
        >
          submit
        </button>
      </form>
    </section>
  );
};

export default Booking;
