import React, { Component } from 'react';
import ProductDetailView from '../components/ProductDetailView';
import api from '../api';

export default class ProductDetail extends Component {
  // prop을 받으면 설계도가 필요... static...
  static defaultProps = {
    // 표시해주어야 하는 상품의 id
    productId: null,
  };
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      id: null,
      title: '',
      description: '',
      mainImgUrl: '',
      detailImgUrls: [],
    };
  }

  async componentDidMount() {
    const { productId } = this.props;
    const { data: product } = await api.get(`/products/${productId}`);
    this.setState({
      // 객체가 받아와지는 것을 전체 다 집어넣는 것
      ...product,
      loading: false,
    });
  }

  render() {
    // state에 있는 것 전부에 넣고 싶으면 {...this.state}
    // pc와 cc의 형태가 똑같기 때문에 가능

    return (
      <div>
        <ProductDetailView {...this.state} />
      </div>
    );
  }
}
