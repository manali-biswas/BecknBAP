type Address = {
    name: string;
    mobile: string,
    building: string;
    landmark: string;
    address: string;
};

const useAddress = () => {

  const getBillngAddress = (): Address => {
    try {
      let address: Address = JSON.parse(localStorage.getItem('billing_address'));
      if (!address) {
        address = {
          name: '',
          mobile: '',
          building: '',
          landmark: '',
          address: ''
        };
      }
      return address;
    } catch (error) {
      return {
        name: '',
        mobile: '',
        building: '',
        landmark: '',
        address: ''
      };
    }
  };

  const getShippingAddress = (): Address => {
    try {
      let address: Address = JSON.parse(localStorage.getItem('shipping_address'));
      if (!address) {
        address = {
          name: '',
          mobile: '',
          building: '',
          landmark: '',
          address: ''
        };
      }
      return address;
    } catch (error) {
      return {
        name: '',
        mobile: '',
        building: '',
        landmark: '',
        address: ''
      };
    }
  };

  const setBillingAddress = (address: Address) => {

    localStorage.setItem('billing_address', JSON.stringify(address));
  };

  const setShippingAddress = (address: Address) => {

    localStorage.setItem('shipping_address', JSON.stringify(address));
  };

  return {
    getBillngAddress,
    getShippingAddress,
    setBillingAddress,
    setShippingAddress
  };
};

export default useAddress;