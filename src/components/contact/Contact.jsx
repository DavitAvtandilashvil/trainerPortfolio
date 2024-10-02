import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useSentEmail from "../../costumHooks/useSentEmail";

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
    setValue,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { sendEmail, loader } = useSentEmail();
  const onSubmit = (data) => {
    console.log(data);

    sendEmail(data);
    setValue("fullName", "");
    setValue("email", "");
    setValue("phoneNumber", "");
    setValue("message", "");
  };

  return (
    <div className="md:px-[8rem] px-[4rem]">
      <div className="md:w-[522px]  pt-[4rem] pb-[8.8rem] ">
        <h2 className="pb-[1.6rem] transition-all duration-[1s] ease-in-out md:text-[3.2rem] text-[14px] font-bold text-[#C4C4C4]">
          CONTACT
        </h2>

        <form
          className="flex flex-col text-[#C4C4C4]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="bg-[#121212] transition-all duration-[1s] ease-in-out rounded-[.8rem] px-[1rem] h-[4.2rem] border border-[#4D4D4D] mb-2"
            placeholder="Full Name"
            {...register("fullName")}
          />
          <span
            className={`text-[#f44040]  transition-opacity duration-300 px-[0.5rem] h-[2rem] ${
              errors.fullName ? "opacity-100" : "opacity-0"
            }`}
          >
            {errors.fullName?.message}
          </span>

          <input
            className="bg-[#121212] transition-all duration-[1s] ease-in-out rounded-[.8rem] px-[1rem] h-[4.2rem] text-[#C4C4C4] border border-[#4D4D4D] mb-2"
            placeholder="Email"
            {...register("email")}
          />
          <span
            className={`text-[#f44040]  px-[0.5rem]  transition-opacity duration-300 h-[2rem] ${
              errors.email ? "opacity-100" : "opacity-0"
            }`}
          >
            {errors.email?.message}
          </span>

          <input
            className="bg-[#121212] transition-all duration-[1s] ease-in-out rounded-[.8rem] px-[1rem] h-[4.2rem] text-[#C4C4C4] border border-[#4D4D4D] mb-2"
            placeholder="Phone Number"
            {...register("phoneNumber")}
          />
          <span
            className={`text-[#f44040]  px-[0.5rem] transition-opacity duration-300 h-[2rem] ${
              errors.phoneNumber ? "opacity-100" : "opacity-0"
            }`}
          >
            {errors.phoneNumber?.message}
          </span>

          <textarea
            rows={3}
            className="bg-[#121212] p-[1rem] text-[#C4C4C4] transition-all duration-[1s] ease-in-out rounded-[.8rem] border border-[#4D4D4D] mb-2"
            placeholder="Message"
            {...register("message")}
          />
          <span
            className={`text-[#f44040]   px-[0.5rem] transition-opacity duration-300 h-[2rem] ${
              errors.message ? "opacity-100" : "opacity-0"
            }`}
          >
            {errors.message?.message}
          </span>

          <input
            className="bg-[#121212] hover:bg-[#D7FD44] hover:text-[black] text-[#C4C4C4] self-end cursor-pointer transition-all duration-[1s] ease-in-out border border-[#4D4D4D] md:text-[1.6rem] text-[1.4rem] md:w-[18.4rem] w-[13.7rem] md:h-[4.2rem] h-[3.6rem] rounded-[.8rem]"
            type="submit"
            value={loader ? "Sending..." : "Submit"}
            disabled={loader}
          />
        </form>
      </div>
    </div>
  );
}
