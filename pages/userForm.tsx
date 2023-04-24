import InputField from "./inputField"
import closeIcon from '../assets/images/close.svg';
import Image from 'next/image'

export default function UserForm() {
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg w-[100%]">
                        <div className="bg-slate-200 text-black px-6 py-3 flex justify-between">
                            <span>Update Details</span>

                            <span className="cursor-pointer">
                                <Image src={closeIcon} alt='Close'/>
                            </span>
                        </div>
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">   
                            <form>
                                <div className="grid gap-4 mb-4 md:grid-cols-2">
                                    <InputField placeholder="Email" type="email" required={true}/>
                                    <InputField placeholder="Username" required={true}/>
                                </div>

                                <div className="grid gap-4 mb-6 md:grid-cols-3">
                                    <InputField placeholder="Street"/>
                                    <InputField placeholder="Postal Code"/>
                                    <InputField placeholder="Country Code"/>
                                </div>
                                <div className="text-right">
                                    <button type="submit" className="text-white bg-slate-600 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
function useState(arg0: boolean): [any, any] {
    throw new Error("Function not implemented.");
}

