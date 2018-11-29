import React, { Component } from 'react';
import withLoading from '../hoc/withLoading';

class ProductDetailView extends Component {
  static defaultProps = {
    id: null,
    title: '',
    description: '',
    mainImgUrl: '',
    detailImgUrls: [],
    options: [
      // {
      //   "id": 1,
      //   "productId": 1,
      //   "title": "Medium",
      //   "price": 30000
      // }
    ],
  };

  constructor(props) {
    super(props);

    // 장바구니에 정보 전송 시, option의 id값이 필요하기 때문에
    this.state = {
      quantity: 1,
      selectedOptionId: '',
    };
  }

  handleOptionChange(e) {
    this.setState({
      selectedOptionId: parseInt(e.target.value),
      quantity: 1,
    });
  }

  handleQuantityChange(e) {
    this.setState({
      quantity: parseInt(e.target.value),
    });
  }

  render() {
    const {
      id,
      title,
      description,
      mainImgUrl,
      detailImgUrls,
      options,
    } = this.props;

    const { quantity, selectedOptionId } = this.state;
    const selectedOption = options.find(o => o.id === selectedOptionId);
    // selectedOption이 있으면 &&의 뒤가 실행되고 없으면 &&의 앞인 falsy(undefined)가 반환된다.
    const totalPrice = selectedOption && selectedOption.price * quantity;

    return (
      <div>
        <select
          value={selectedOptionId}
          onChange={e => this.handleOptionChange(e)}
          required
        >
          <option disabled value="">
            옵션을 선택하세요
          </option>
          {options.map(o => (
            <option key={o.id} value={o.id}>
              {o.title}
            </option>
          ))}
        </select>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={e => this.handleQuantityChange(e)}
        />
        <div>총 가격: {totalPrice}</div>

        <div>{id}</div>
        <div>{title}</div>
        <div>{description}</div>
        <img src={mainImgUrl} alt="title" />
        {detailImgUrls.map(url => (
          <img key={url} src={url} alt={title} />
        ))}
      </div>
    );
  }
}

export default withLoading(ProductDetailView);
