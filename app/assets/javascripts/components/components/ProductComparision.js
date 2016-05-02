import React, { Component, PropTypes } from 'react';
import numeral from 'numeral';

let products = [
  {
    amount: 3248,
    term: 'month',
    lender: {
      name: "Heritage Bank",
      code: "Heritage_Bank",
      logo: "https://robie-production-assets.s3.amazonaws.com/uploads/thumb_Heritage_Bank_logo_1-3.png"
    },
    name: "2 Year Fixed Rate",
    rates: [
      { percentage: 0.0399, label: "Fixed" },
      { percentage: 0.0513, label: "Comparision" }
    ],
    link: "#",
    features: [
      { 'Offset Account' : true },
      { 'Redraw Available' : true },
      { 'Credit Card' : true },
      { 'Borrow up to 95%' : true }
    ]
  }
]

class ProductComparision extends Component {
  render() {
    return (
      <section className="ProductComparision__root">
        <header className="ProductComparision__header">
          <div className="ProductComparision__lender">Lender</div>
          <div className="ProductComparision__product-details">Description</div>
          <div className="ProductComparision__rates">
            <div className="ProductComparision__rate">Interest</div>
            <div className="ProductComparision__rate">Comparision</div>
          </div>
          <div className="ProductComparision__repayment">Repayment</div>
        </header>
        <ol className="ProductComparision__products-list">
          <li className="ProductComparision__product">
            <div className="ProductComparision__lender">
              <img className="ProductComparision__lender-logo" alt={products[0].lender.name} src={products[0].lender.logo}/>
              <div className="ProductComparision__lender-name">{products[0].lender.name}</div>
            </div>
            <div className="ProductComparision__product-details">
              <div className="ProductComparision__product-name">{products[0].name}</div>
              <ul className="ProductComparision__features-list">
                { products[0].features.map(feature =>
                  <li key={ Object.keys(feature) } className="ProductComparision__feature">{ Object.keys(feature) }</li>
                )}
              </ul>
            </div>
            <div className="ProductComparision__rates">
              { products[0].rates.map(rate =>
                <div key={rate.label} className="ProductComparision__rate">
                  <div className="ProductComparision__rate-percentage">{ numeral(rate.percentage).format('0.00%') }</div>
                  <div className="ProductComparision__rate-label"><span className="ProductComparision__label-fallback">Per Annum </span>{rate.label}</div>
                </div>
              )}
            </div>
            <div className="ProductComparision__repayment">
              <div className="ProductComparision__repayment-amount"><span className="$">$</span>{ numeral(products[0].amount).format('0,0') }</div>
              <div className="ProductComparision__repayment-term">per {products[0].term}<sup>*</sup></div>
            </div>
          </li>
        </ol>
      </section>
    );
  }
}

export default ProductComparision;
