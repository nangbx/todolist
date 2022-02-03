import { toast } from 'react-toastify';

const NotiSucess = (mess) => {
    toast.success(`${mess}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}

const NotiWarning = (mess) => {
    toast.warn(`${mess}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}

export {
    NotiSucess,
    NotiWarning
}