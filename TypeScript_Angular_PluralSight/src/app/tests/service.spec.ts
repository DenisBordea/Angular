import { ProductService } from "../services/product.service";

describe('Product service test', () => {
    let service: ProductService;
    it('#getProducts should return 3 values', () => {
      service = new ProductService();
      expect(service.getProducts().length).toBe(3);
    });
  });
