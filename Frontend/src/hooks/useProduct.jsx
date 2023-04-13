import { useEffect, useState } from 'react';
import { productService } from '../service';
import { useParams } from 'react-router-dom';

const useProduct = (formik) => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      productService.getProduct(id).then(({ data }) => {
        const { sku, quantity, images, productName, productDescription } = data;
        setData(data);
        console.log(data);
        formik.setFieldValue('sku', sku);
        formik.setFieldValue('qty', quantity);
        formik.setFieldValue('productName', productName);
        formik.setFieldValue('description', productDescription);
        formik.setFieldValue('image', images);
      });
    }
  }, []);
  return data;
};

export default useProduct;
