import productDetail from '../../pages/productDetailPage';

describe('Product Details', () => {
  it('TC 10: should display product details including image, information, price, etc.', () => {
    const productSlug = 'narrow-hinged-bangle';
    const expectedProductName = 'Narrow Hinged Bangle';
    const expectedPrice = '$ 450.00';

    productDetail.visitProductPage(productSlug);

    productDetail.verifyProductDetails(expectedProductName, expectedPrice);
  });

  it('TC 11: should display product reviews', () => {
    const productSlug = 'narrow-hinged-bangle';

    productDetail.visitProductPage(productSlug);

    productDetail.verifyProductReviews();
  });
});
