import React, { Component, PropTypes } from 'react';
import numeral from 'numeral';

let featuredProducts = [
  { heading: "Lowest Repayments", amount: 3248, term: "month", lender: { code: "Loan_Market_GO", name: "Loan Market GO", logo: "https://robie-production-assets.s3.amazonaws.com/uploads/thumb_LoanMarketGO_logo.png" }, name: "Fixed 2 Year Combo", rates: [ { percentage: 0.0404, label: "Fixed" }, { percentage: 0.0417, label: "Comparision" } ], link: "#" },
  { heading: "Smart Features", amount: 3272, term: "month", lender: { code: "Heritage_Bank", name: "Heritage Bank", logo: "https://robie-production-assets.s3.amazonaws.com/uploads/thumb_Heritage_Bank_logo_1-3.png" }, name: "Home Advantage 2 Years Fixed", rates: [ { percentage: 0.0399, label: "Fixed" }, { percentage: 0.0513, label: "Comparision" } ], link: "#" },
  { heading: "Major Lender", amount: 3331, term: "month", lender: { code: "NAB", name: "NAB", logo: "https://robie-production-assets.s3.amazonaws.com/uploads/thumb_National_Australia_Bank_logo_1-3.png" }, name: "NAB Home Plus Standard 2 Yr Fixed Rate", rates: [ { percentage: 0.0419, label: "Fixed" }, { percentage: 0.0460, label: "Comparision" } ], link: "#" }
]

class FeaturedProducts extends Component {
  renderProductRate(rate) {
    return (
      <div key={rate.label} className="FeaturedProducts__rate" aria-label={ numeral(rate.percentage).format('0.00%') + " Per Annum " + rate.label}>
        <div className="FeaturedProducts__rate-percentage">{ numeral(rate.percentage).format('0.00%') }</div>
        <div className="FeaturedProducts__rate-label"><span className="FeaturedProducts__label-fallback">Per Annum </span>{rate.label}</div>
      </div>
    )
  }
  renderProduct(product) {
    return (
      <li key={product.lender.code} className="FeaturedProducts__product">
        <h4 className="FeaturedProducts__heading">{product.heading}</h4>
        <a  href={product.link} className="FeaturedProducts__link">
          <div className="FeatureProducts__content">
            <div className="FeaturedProducts__repayment">
              <div className="FeaturedProducts__repayment-amount"><span className="$">$</span>{ numeral(product.amount).format('0,0') }</div>
              <div className="FeaturedProducts__repayment-term">per {product.term}<sup>*</sup></div>
            </div>
            <img className="FeaturedProducts__lender-logo" alt={product.lender.name} src={product.lender.logo}/>
            <div className="FeaturedProducts__product-name">{product.name}</div>
          </div>
          <div className="FeaturedProducts__rates">{ product.rates.map(rate => this.renderProductRate(rate)) }</div>
        </a>
      </li>
    )
  }
  render() {
    return (
      <section className="FeaturedProducts__root">
        <ol className="FeaturedProducts__list">{ featuredProducts.map(product => this.renderProduct(product)) }</ol>
      </section>
    );
  }
}

export default FeaturedProducts;
