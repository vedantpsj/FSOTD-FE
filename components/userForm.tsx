import InputField from "./inputField";
import closeIcon from "../assets/images/close.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { USER } from "@/types/user";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";

export default function UserForm({
  userData,
  toggleUserModal,
  createUser,
  editUser,
  setSelectedUser,
}: {
  userData?: USER;
  toggleUserModal: Function;
  createUser: Function;
  editUser: Function;
  setSelectedUser: Function;
}) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      email: userData?.email,
      username: userData?.username,
      street: userData?.address?.street,
      postalCode: userData?.address?.postalCode,
      countryCode: userData?.address?.countryCode,
      city: userData?.address?.city,
    },
  });

  const handleFormSubmit = async (data: any) => {
    setLoading(true);
    try {
      if (userData?.id) {
        await editUser({ ...userData, ...data });
      } else {
        await createUser(data);
      }
      setLoading(false);
      toggleUserModal(false);
    } catch (e) {
      setLoading(false);
      console.error(e);
    }
  };
  if (loading) {
    return <Loader />;
  }
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
              <span>{userData?.id ? "Update User" : "Create User"}</span>

              <span
                className="cursor-pointer"
                onClick={() => {
                  setSelectedUser({});
                  toggleUserModal(false);
                }}
              >
                <Image src={closeIcon} alt="Close" />
              </span>
            </div>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="grid gap-4 mb-4 md:grid-cols-2">
                  <InputField
                    formRegister={register("email", {
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address",
                      },
                    })}
                    placeholder="Email"
                    message={"Email is required"}
                    identifier="email"
                    errors={errors}
                  />
                  <InputField
                    formRegister={register("username", { required: true })}
                    placeholder="Username"
                    message={"Username is required"}
                    identifier="username"
                    errors={errors}
                  />
                </div>

                <div className="grid gap-4 mb-6 md:grid-cols-3">
                  <InputField
                    formRegister={register("city", { required: true })}
                    placeholder="City"
                    identifier="city"
                    errors={errors}
                    message={"City is required"}
                  />
                  <InputField
                    formRegister={register("street", { required: true })}
                    placeholder="Street"
                    identifier="street"
                    errors={errors}
                    message={"Street is required"}
                  />
                  <InputField
                    formRegister={register("postalCode", { required: true })}
                    placeholder="Postal Code"
                    identifier="postalCode"
                    errors={errors}
                    message={"Postal Code is required"}
                  />
                  <InputField
                    formRegister={register("countryCode", { required: true })}
                    placeholder="Country Code"
                    identifier="countryCode"
                    errors={errors}
                    message={"Country Code is required"}
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
