import React, { useContext } from "react";
import { toast } from "react-toastify";
export const ToastTypes = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  INFO: "INFO",
};

const ToastContext = React.createContext();

export default function ToastProvider({ children }) {
  const callToast = (type, msg) => {
    switch (type) {
      case ToastTypes.SUCCESS: {
        return toast.success(msg);
      }
      case ToastTypes.ERROR: {
        return toast.error(msg);
      }
      case ToastTypes.INFO: {
        return toast.info(msg);
      }
      default: {
        return toast(msg);
      }
    }
  };
  const value = { callToast: callToast };
  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
