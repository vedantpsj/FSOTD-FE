import { ApiService } from "@/services/apiService";
import { USER } from "@/types/user";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import UserForm from "../components/userForm";
import Loader from "../components/loader";
import Image from "next/image";
import deleteIcon from "../assets/images/delete.svg";
import editIcon from "../assets/images/edit.svg";
import Confirmation from "./confirmation";
import { ToastTypes, useToast } from "@/context/toast";

const inter = Inter({ subsets: ["latin"] });

const Users = () => {
  const [users, setUsers]: any = useState([]);
  const [selectedUser, setSelectedUser]: any = useState({});
  const [loading, setLoading] = useState(true);
  const [openUserModal, toggleUserModal] = useState(false);
  const [confirmationModal, toggleConfirmationModal] = useState(false);
  const { callToast } = useToast();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    setLoading(true);
    try {
      let res: any = await ApiService.listUsers();
      if (res?.success) {
        setUsers(res?.success?.data);
      } else {
        throw res;
      }
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };
  const createUser = async (data: USER) => {
    try {
      let res: any = await ApiService.createUser(data);
      if (res?.success) {
        let allUsers = users;
        allUsers.push(res?.success?.data);
        setUsers(allUsers);
      } else {
        throw res;
      }
    } catch (e) {
      console.error(e);
      throw e;
    }
  };
  const editUser = async (data: USER) => {
    try {
      let res: any = await ApiService.editUser(data);
      if (res?.success) {
        let userData = res?.success?.data;
        let allUsers = users;
        allUsers[allUsers.findIndex((el: USER) => el.id === userData.id)] =
          userData;
        setUsers(allUsers);
      } else {
        throw res;
      }
    } catch (e) {
      console.error(e);
      throw e;
    }
  };
  const deleteUser = async (data: USER) => {
    try {
      let res: any = await ApiService.deleteUser(data);
      if (res?.success) {
        let allUsers = users;
        let index = allUsers.findIndex((el: USER) => el.id === data.id);
        allUsers.splice(index, 1);
        setUsers(allUsers);
        callToast(ToastTypes.SUCCESS, "User deleted successfully!");
      } else {
        throw res;
      }
    } catch (e: any) {
      console.error(e);
      callToast(
        ToastTypes.ERROR,
        e?.error?.response?.data?.title ||
          e?.error?.response?.data ||
          "Something went wrong!"
      );

      throw e;
    }
  };
  const renderUsersTable = () => {
    if (!users?.length) {
      return <>No users found</>;
    }
    return (
      <>
        <div className="container mx-auto px-3">
          {users.map((val: USER, index: number) => (
            <div
              key={index}
              className="my-3 border bg-white overflow-hidden bg-opacity-50 rounded-md lg:text-[16px] text-[14px]"
            >
              <div className="bg-slate-100 flex text-black w-[100%] py-2 px-3 justify-end text-center">
                <span
                  className="cursor-pointer text-green-600"
                  onClick={() => {
                    setSelectedUser(val);
                    toggleUserModal(true);
                  }}
                >
                  <Image width={20} src={editIcon} alt="Edit" />
                </span>

                <span
                  className="ml-3 inline-block cursor-pointer text-red-600"
                  onClick={() => {
                    setSelectedUser(val);
                    toggleConfirmationModal(true);
                  }}
                >
                  <Image width={20} src={deleteIcon} alt="Delete" />
                </span>
              </div>
              <div className="p-4">
                <div className="grid gap-x-4 gap-y-2 mb-2 md:grid-cols-2">
                  <div className="flex">
                    <span className="text-black md:w-[125px] w-[100px]">
                      Email:{" "}
                    </span>
                    <p className="pl-2 md:w-[calc(100%-125px)] w-[calc(100%-100px)]">
                      {val?.email}
                    </p>
                  </div>
                  <div className="flex">
                    <span className="text-black md:w-[125px] w-[100px]">
                      Username:{" "}
                    </span>
                    <p className="pl-2 md:w-[calc(100%-125px)] w-[calc(100%-100px)]">
                      {val?.username}
                    </p>
                  </div>
                </div>

                <h3 className="font-bold text-black mb-2 mt-4">Address</h3>
                <div className="grid gap-x-4 gap-y-2 md:grid-cols-2">
                  <div className="flex">
                    <span className="text-black md:w-[125px] w-[100px]">
                      Street:{" "}
                    </span>
                    <p className="pl-2 md:w-[calc(100%-125px)] w-[calc(100%-100px)]">
                      {val?.street}
                    </p>
                  </div>
                  <div className="flex">
                    <span className="text-black md:w-[125px] w-[100px]">
                      City Name:{" "}
                    </span>
                    <p className="pl-2 md:w-[calc(100%-125px)] w-[calc(100%-100px)]">
                      {val?.city}
                    </p>
                  </div>
                  <div className="flex">
                    <span className="text-black md:w-[125px] w-[100px]">
                      Postal Code:{" "}
                    </span>
                    <p className="pl-2 md:w-[calc(100%-125px)] w-[calc(100%-100px)]">
                      {val?.postalCode}
                    </p>
                  </div>
                  <div className="flex">
                    <span className="text-black md:w-[125px] w-[100px]">
                      Country Code:{" "}
                    </span>
                    <p className="pl-2 md:w-[calc(100%-125px)] w-[calc(100%-100px)]">
                      {val?.countryCode}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  const onConfirmAction = async () => {
    try {
      await deleteUser(selectedUser);
      toggleConfirmationModal(false);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <main className={`${inter.className}`}>
      <div className="bg-slate-100 sticky top-0">
        <div className="flex items-center py-3 px-3 justify-between container mx-auto">
          <h2 className="text-black text-[20px]">Users</h2>

          <span
            className="inline-block bg-gray-500 hover:bg-gray-700 text-white py-2 px-5 rounded cursor-pointer"
            onClick={() => toggleUserModal(true)}
          >
            Create
          </span>
        </div>
      </div>
      {renderUsersTable()}

      {openUserModal && (
        <UserForm
          createUser={createUser}
          editUser={editUser}
          toggleUserModal={toggleUserModal}
          userData={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      )}
      {confirmationModal && (
        <Confirmation
          toggleConfirmationModal={toggleConfirmationModal}
          title={"Confirmation"}
          description={`Are you sure you want to delete ${selectedUser?.username}?`}
          onConfirmAction={onConfirmAction}
        />
      )}
    </main>
  );
};

export default Users;
