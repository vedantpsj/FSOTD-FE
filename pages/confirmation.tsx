import { USER } from "@/types/user";
import closeIcon from "../assets/images/close.svg";
import Image from "next/image";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  MouseEventHandler,
  useState,
} from "react";
import Loader from "@/components/loader";
import LoadingDots from "@/components/loadingDots";

interface ConfirmationFace {
  title?: string;
  description?: string;
  toggleConfirmationModal: Function;
  onConfirmAction: any;
}

export default function Confirmation({
  title = "",
  description = "",
  toggleConfirmationModal,
  onConfirmAction,
}: ConfirmationFace) {
  const [loading, setLoading] = useState(false);
  const onConfirmation = async () => {
    setLoading(true);
    try {
      await onConfirmAction();
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
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
              <span>{title}</span>

              <span
                className={loading ? 'pointer-events-none opacity-20': 'cursor-pointer'}
                onClick={() => toggleConfirmationModal(false)}
              >
                <Image src={closeIcon} alt="Close" />
              </span>
            </div>
            <div className="bg-white text-center px-4 py-5">
              <p className="mb-4">{description}</p>

              <button type="button" disabled={loading}
                onClick={onConfirmation}
                className="inline-block bg-red-500 hover:bg-red-700 text-white py-2 px-6 rounded cursor-pointer"
              >
                Yes

                {loading && <LoadingDots/>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
