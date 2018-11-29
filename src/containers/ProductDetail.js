import React, { Component } from 'react';
import ProductDetailView from '../components/ProductDetailView';

export default class ProductDetail extends Component {
  render() {
    const product = {
      id: 1,
      title: '자켓',
      description: '따뜻',
      mainImgUrl: '',
      detailImgUrls: [''],
    };
    return (
      <div>
        <ProductDetailView {...product} />
      </div>
    );
  }
}
