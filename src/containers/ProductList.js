import React, { Component } from 'react';
import ProductListView from '../components/ProductListView';
import api from '../api';

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      products: [],
    };
  }

  async componentDidMount() {
    const { category } = this.props;
    const { data: products } = await api.get('/products', {
      params: {
        category,
      },
    });
    this.setState({
      products,
      loading: false,
    });
  }

  render() {
    const { products, loading } = this.state;
    // 객체를 바로 반환하고 싶어 p=> ({}) 식의 작성
    const productsList = products.map(p => ({
      title: p.title,
      id: p.id,
      imgURL: p.mainImgUrl,
    }));
    return <ProductListView products={productsList} loading={loading} />;
  }
}
