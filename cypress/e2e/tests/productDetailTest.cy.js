import productDetail from '../../pages/productDetailPage';

describe('Product Details', () => {
  it('should display product details including image, information, price, etc.', () => {
    const productSlug = 'narrow-hinged-bangle';
    const expectedProductName = 'Narrow Hinged Bangle';
    const expectedPrice = '$ 450.00';

    productDetail.visitProductPage(productSlug);

    productDetail.verifyProductDetails(expectedProductName, expectedPrice);

    productDetail.verifyProductReviews();
  });
});
