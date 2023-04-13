import axios from 'axios';

class HTTPServices {
  service = null;
  constructor() {
    this.service = axios.create({
      // eslint-disable-next-line no-undef
      baseURL: import.meta.env.VITE_API_URL
    });
    this.service.interceptors.response.use(this.handleSuccess, this.handleError);
  }

  sendRequest = (config) => {
    return this.service.request(config);
  };

  handleSuccess = (res) => {
    return res;
  };

  handleError = (e) => {
    // if (!e.response) {
    //   return {
    //     data: {
    //       success: false,
    //       message: "Network Failure",
    //     },
    //   };
    // }

    switch (e.response.status) {
      case 404:
        if (!e.response.message) {
          localStorage.clear();
          window.location.replace('/not-found');
        }
        break;
      default:
        throw e;
    }
  };
}

export default HTTPServices;
