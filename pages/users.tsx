import { ApiService } from "@/services/apiService";
import { USER } from "@/types/user";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import UserForm from "./userForm";
import Loader from "./loader";
import Image from "next/image";
import deleteIcon from "../assets/images/delete.svg";
import editIcon from "../assets/images/edit.svg";

const inter = Inter({ subsets: ["latin"] });

const Users = () => {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(true);
  const [openUserModal, toggleUserModal] = useState(false);

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
    setLoading(true);
    try {
      let res: any = await ApiService.createUser(data);
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
  const editUser = async (data: USER) => {
    setLoading(true);
    try {
      let res: any = await ApiService.editUser(data);
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
  const deleteUser = async (data: USER) => {
    setLoading(true);
    try {
      let res: any = await ApiService.deleteUser(data);
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

  const renderUsersTable = () => {
    return (
      <>
        <button
          onClick={() => toggleUserModal(true)}
          className="text-white bg-slate-600 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create User
        </button>
        <div className="overflow-x-auto">
          <table className="bg-white bg-opacity-50 my-[20px] min-w-[900px] table-auto w-[100%]">
            <thead>
              <tr>
                <th className="bg-slate-300 px-4 py-2 text-left text-gray-950">
                  Email
                </th>
                <th className="bg-slate-300 px-4 py-2 text-left text-gray-950 border-s">
                  Username
                </th>
                <th className="bg-slate-300 px-4 py-2 text-left text-gray-950 border-s">
                  Address
                </th>
                <th className="bg-slate-300 px-4 py-2 text-left text-gray-950 border-s">
                  Edit/Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {new Array(6).fill(0).map((val, index) => (
                <tr>
                  <td className="border px-4 py-2">test@email.com</td>
                  <td className="border px-4 py-2">Testww3</td>
                  <td className="border px-4 py-2 w-[400px] text-[90%]">
                    <div className="flex">
                      <span className="text-black w-[125px] pr-[10px]">
                        Street:
                      </span>
                      <span className="w-[calc(100%-125px)]">121</span>
                    </div>
                    <div className="flex">
                      <span className="text-black w-[125px] pr-[10px]">
                        City:
                      </span>
                      <span className="w-[calc(100%-125px)]">City Name</span>
                    </div>
                    <div className="flex">
                      <span className="text-black w-[125px] pr-[10px]">
                        Postal Code:
                      </span>
                      <span className="w-[calc(100%-125px)]">122322</span>
                    </div>
                    <div className="flex">
                      <span className="text-black w-[125px] pr-[10px]">
                        Country Code:
                      </span>
                      <span className="w-[calc(100%-125px)]">+893</span>
                    </div>
                  </td>
                  <td className="border px-4 py-2 w-[100px]">
                    <div className="flex items-center justify-center">
                      <span
                        className="cursor-pointer text-green-600"
                        onClick={() => toggleUserModal(true)}
                      >
                        <Image src={editIcon} alt="Edit" />
                      </span>

                      <span className="ml-[10px] cursor-pointer text-red-600">
                        <Image src={deleteIcon} alt="Delete" />
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {openUserModal && <UserForm userData={users[0]} />}
      </>
    );
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <main className={`container mx-auto px-4 ${inter.className}`}>
      {renderUsersTable()}
    </main>
  );
};

export default Users;
