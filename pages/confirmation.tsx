import closeIcon from '../assets/images/close.svg';
import Image from 'next/image'

interface ConfirmationFace {
	title?: string;
	discription?: string;
	setRemove: Function;
}

export default function Confirmation(
    {
        title='',
        discription='',
        setRemove
    } : ConfirmationFace
) {
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg w-[100%]">
                    <div className="bg-slate-200 text-black px-6 py-3 flex justify-between">
                        <span>{title}</span>

                        <span className="cursor-pointer" onClick={()=>setRemove(false)}>
                            <Image src={closeIcon} alt='Close'/>
                        </span>
                    </div>
                    <div className="bg-white text-center px-4 py-5">   
                        <p className='mb-4'>{discription}</p>

                        <span onClick={()=>setRemove(false)} className="inline-block bg-red-500 hover:bg-red-700 text-white py-2 px-6 rounded cursor-pointer">Yes</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
