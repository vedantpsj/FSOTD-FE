interface InputInterFace {
  label?: string;
  type?: "text" | "email" | "number";
  placeholder?: string;
  required?: boolean;
  formRegister: any;
  message?: string;
}

export default function InputField({
  label = "",
  type = "text",
  placeholder = "",
  required = false,
  formRegister,
  message,
}: InputInterFace) {
  return (
    <div className="input-field">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
      )}
      <input
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none focus:border-gray-500"
        placeholder={placeholder}
        required={required}
        {...formRegister}
      />
        <span className="text-[10px] text-red-500 block mt-1">{message}</span>
    </div>
  );
}
