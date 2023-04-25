interface InputInterFace {
    label?: string;
    type?: "text" | "email" | "number";
    placeholder?: string;
    required?: boolean;
    formRegister: any;
    message?: string;
    errors?: any;
    identifier?: string;
}

export default function InputField({
    label = "",
    type = "text",
    placeholder = "",
    required = false,
    formRegister,
    message,
    errors,
    identifier,
}: InputInterFace) {
    return (
        <div className="input-field">
            <div className="relative">
                <input
                    type={type}
                    id={label}
                    className="bg-gray-50 border border-gray-300 text-gray-900 bg-white text-sm rounded-lg block w-full p-2.5 outline-none focus:border-gray-500 appearance-none peer"
                    placeholder=" "
                    {...formRegister}
                />
                <label
                    htmlFor={label}
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/4 peer-placeholder-shown:top-1/3 peer-placeholder-shown:pt-[2px] peer-focus:pt-[0px] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                    {label}
                </label>
            </div>
            {message && identifier && errors[identifier] && (
                <span className="text-[10px] text-red-500 block mt-1">
                    {message}
                </span>
            )}
        </div>
    );
}
