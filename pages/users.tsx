import { ApiService } from "@/services/apiService";
import { USER } from "@/types/user";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import UserForm from "./userForm";

const inter = Inter({ subsets: ["latin"] });

const Users = () => {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(true);

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
      <table className="my-[20px] table-auto w-[100%]">
        <thead>
          <tr>
            <th className="bg-slate-300 px-4 py-2 text-left text-gray-950">Email</th>
            <th className="bg-slate-300 px-4 py-2 text-left text-gray-950 border-s">Username</th>
            <th className="bg-slate-300 px-4 py-2 text-left text-gray-950 border-s">Address</th>
            <th className="bg-slate-300 px-4 py-2 text-left text-gray-950 border-s">Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">test@email.com</td>
            <td className="border px-4 py-2">Testww3</td>
            <td className="border px-4 py-2">
                <table className="w-[100%]">
                    <tr className="text-left">
                        <td className="text-gray-950">Email :</td>
                        <td className="text-left">Username</td>
                    </tr>
                </table>
            </td>
            <td className="border px-4 py-2">icon/icon</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">test@email.com</td>
            <td className="border px-4 py-2">Testww3</td>
            <td className="border px-4 py-2">1972</td>
            <td className="border px-4 py-2">icon/icon</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">test@email.com</td>
            <td className="border px-4 py-2">Testww3</td>
            <td className="border px-4 py-2">1975</td>
            <td className="border px-4 py-2">icon/icon</td>
          </tr>
        </tbody>
      </table>

      <UserForm/>
      </>
    );
  };

  if (loading) {
    return <>Loading...</>;
  }
  return (
    <main className={`container mx-auto px-4 ${inter.className}`}>
      {renderUsersTable()}
    </main>
  );
};

export default Users;
