import InputField from "./inputField";
import closeIcon from "../assets/images/close.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { USER } from "@/types/user";

export default function UserForm({ userData, toggleUserModal }: { userData?: USER, toggleUserModal: Function }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data: any) => {
    console.log("------------ data", data);
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg w-[100%]">
            <div className="bg-slate-200 text-black px-6 py-3 flex justify-between">
              <span>Update Details</span>

              <span className="cursor-pointer" onClick={()=>toggleUserModal(false)}>
                <Image src={closeIcon} alt="Close" />
              </span>
            </div>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="grid gap-4 mb-4 md:grid-cols-2">
                  <InputField
                    formRegister={register("email")}
                    placeholder="Email"
                    type="email"
                    message={'Email is required'}
                    required={true}
                  />
                  <InputField
                    formRegister={register("username")}
                    placeholder="Username"
                    message={'Username is required'}
                    required={true}
                  />
                </div>

                <div className="grid gap-4 mb-6 md:grid-cols-3">
                  <InputField
                    formRegister={register("street")}
                    placeholder="Street"
                  />
                  <InputField
                    formRegister={register("postalCode")}
                    placeholder="Postal Code"
                  />
                  <InputField
                    formRegister={register("countryCode")}
                    placeholder="Country Code"
                  />
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="text-white bg-slate-600 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
