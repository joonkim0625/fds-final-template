import React, { Component } from 'react';
import withLoading from '../hoc/withLoading';
import { Link } from 'react-router-dom';

class ProductListView extends Component {
  // 컴포넌트 설정 시...
  static defaultProps = {
    // 서버로부터 받아온 상품 목록
    products: [
      // {
      //   id: 1,
      //   title: '자켓',
      //   imgURL: '...'
      // }
    ],
  };
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map(p => (
          <div key={p.id}>
            <div>{p.id}</div>
            {/* template 리터럴을 사용하려면 {``} */}
            <Link to={`/product/${p.id}`}>{p.title}</Link>
            {/* 문자열을 두르는 실수를 하지 마라... */}
            <img src={p.imgURL} alt={p.title} />
          </div>
        ))}
      </div>
    );
  }
}

export default withLoading(ProductListView);
