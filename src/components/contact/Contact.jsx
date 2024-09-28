import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Contact() {
  const validationSchema = yup.object().shape({
    fullName: yup
      .string()
      .required("Full Name is required")
      .min(2, "Full Name must be at least 2 characters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Must be a valid email"),
    phoneNumber: yup
      .string()
      .required("Phone Number is required")
      .matches(/^\d+$/, "Phone Number must contain only numbers"),
    message: yup
      .string()
      .required("Message is required")
      .min(5, "Message must be at least 5 characters long"),
  });

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="md:w-[522px] pt-[4rem] pb-[8.8rem] w-[256px]">
      <h2 className="pb-[1.6rem]">CONTACT</h2>

      <form
        className="flex flex-col text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="bg-[#222222] rounded-[.8rem]  px-[1rem] h-[4.2rem] border border-[#4D4D4D] mb-2"
          placeholder="Full Name"
          {...register("fullName")}
        />
        {errors.fullName && (
          <span className="text-[#f44040] py-[.3rem]">
            {errors.fullName.message}
          </span>
        )}

        <input
          className="bg-[#222222] rounded-[.8rem] px-[1rem] h-[4.2rem] text-white border border-[#4D4D4D] mb-2"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-[#f44040] py-[.3rem]">
            {errors.email.message}
          </span>
        )}

        <input
          className="bg-[#222222] rounded-[.8rem] px-[1rem] h-[4.2rem] text-white border border-[#4D4D4D] mb-2"
          placeholder="Phone Number"
          {...register("phoneNumber")}
        />
        {errors.phoneNumber && (
          <span className="text-[#f44040] py-[.3rem]">
            {errors.phoneNumber.message}
          </span>
        )}

        <input
          className="bg-[#222222] h-[4.2rem] px-[1rem] rounded-[.8rem] text-white border border-[#4D4D4D] mb-2"
          placeholder="Message"
          {...register("message")}
        />
        {errors.message && (
          <span className="text-[#f44040] py-[.3rem]">
            {errors.message.message}
          </span>
        )}

        <input
          className="bg-[red] h-[4.2rem] rounded-[.8rem]"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}
