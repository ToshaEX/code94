import HTTPServices from './HTTPServices';

class ProductService extends HTTPServices {
  async getAllProducts() {
    return await this.sendRequest({
      method: 'GET',
      url: '/products',
      responseType: 'json'
    });
  }

  async getProduct(id) {
    return await this.sendRequest({
      method: 'GET',
      url: `/products/${id}`,
      responseType: 'json'
    });
  }

  async deleteProducts(id) {
    return await this.sendRequest({
      method: 'DELETE',
      url: `/products/${id}`,
      responseType: 'json'
    });
  }

  async createProduct(payload) {
    return await this.sendRequest({
      method: 'POST',
      url: `/products`,
      data: payload,
      responseType: 'json'
    });
  }
}

export const productService = new ProductService();
