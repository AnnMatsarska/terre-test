'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

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
    reset();
  };

  return (
    <section className="bg-booking bg-cover h-[430px] md:h-[515px] 2xl:h-[610px] pt-[60px] md:pt-[70px] 2xl:pt-[102px] w-full mx-auto px-[10px] md:px-[20px] 2xl:px-[120px]">
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
        {errors.name && <span className="text-red-500">Name is required</span>}

        <input
          type="text"
          {...register('number')}
          placeholder="your number"
          className="input-field"
        />
        {errors.number && (
          <span className="text-red-500">
            Number is required and must be 10 characters long
          </span>
        )}

        <input
          type="date"
          {...register('date')}
          placeholder="date"
          className="input-field"
        />
        {errors.date && <span className="text-red-500">Date is required</span>}

        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Booking;
