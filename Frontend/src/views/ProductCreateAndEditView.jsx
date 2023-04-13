import React, { useState } from 'react';
import { navigationWrapper } from '../wrapper';
import { TextFiled, TextArea, ImageUpload, PrimaryButton } from '../components';
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useProduct } from '../hooks';
import { routes } from '../routes';
import { productService } from '../service';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;
const TwoColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const handleCreate = async (values, helper, setIsSubmitting) => {
  setIsSubmitting(true);
  const { sku, qty, productName, description, images } = values;
  productService
    .createProduct({
      sku,
      quantity: qty,
      productName,
      images,
      productDescription: description
    })
    .then(() => setIsSubmitting(false))
    .catch(() => {
      console.log('User creation Fgailed');
      setIsSubmitting(false);
    });
};

const initialValues = {
  sku: '',
  qty: '',
  productName: '',
  description: '',
  images: ''
};

const ProductCreateAndEditView = () => {
  const { id } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formik = useFormik({
    initialValues: initialValues,
    // validateOnChange: false,
    onSubmit: async (values, helper) => {
      if (!id) {
        //handle Create product
        handleCreate(values, helper, setIsSubmitting);
        return;
      }
      //TODO:handle Update
    }
  });
  useProduct(formik);

  return (
    <Container>
      <TextFiled label={'SKU'} formik={formik} name={'sku'} />
      <TwoColumnContainer>
        <TextFiled label={'Name'} formik={formik} name={'productName'} />
        <TextFiled label={'QTY'} formik={formik} name={'qty'} />
      </TwoColumnContainer>
      <TextArea
        label={'Product Description'}
        name="description"
        description={'A small description about the product'}
        formik={formik}></TextArea>
      <ImageUpload
        label="Product images"
        description="JPEG, PNG, SVG or GIF(Maximum file size 50MB)"
        acceptFormats=".jpeg,.png,.svg,.gif"
        buttonLabel="Add images"
      />
      <ButtonContainer>
        <PrimaryButton
          label={id ? 'Edit Product' : 'Add product'}
          onClick={() => formik.handleSubmit()}
          isSubmitting={isSubmitting}
        />
      </ButtonContainer>
    </Container>
  );
};

export default navigationWrapper(
  ProductCreateAndEditView,
  () => 'PRODUCTS',
  (pathname) => (pathname === routes.PRODUCTS_ADD ? 'Add new product' : 'Edit products'),
  '10rem'
);
