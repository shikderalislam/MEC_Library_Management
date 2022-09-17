import { toast } from 'react-toastify';

class ToastService {
//   defaultToastConfig
//   constructor() {
//     this.defaultToastConfig = {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: true,
//       closeOnClick: false,
//       pauseOnHover: false,
//       draggable: false,
//       progress: undefined,
//     }
//   }

//   config(options)  {    
//     return {...this.defaultToastConfig, ...options }
//   }

  success(message) {
    toast.success(message)
  }

  error(message) {
    toast.error(message)
  }

  warning(message) {
    toast.warning(message)
  }

  info(message) {
    toast.info(message)
  }
  
}

export default new ToastService();