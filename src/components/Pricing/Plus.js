import { useState, React } from 'react';
import '../../static/css/pricing/pricing.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Plus = () => {
  const [over, onHover] = useState(false);

  const pricingTable = [

    {
      mode: 'DATA SCIENCE',
      price: '$100',
      user: 'Data collection',
      storage: 'Data cleaning and manipulation',
      projectsPublic: 'Data visualization',
      access: 'Descriptive and exploratory data analysis',
      projectsPrivate: 'Hypothesis testing (parametric and non-parametric)',
      phoneSupport: 'Probability concepts',
      domain: 'Regression & Time series analysis',
      reports: 'Predictive modeling',
    },

  ];

  const [initialPricingTable] = useState(pricingTable);

  const innerDiv = {
    backgroundColor: 'white',
    borderRadius: '15px',
    width: '400px',
    height: '580px',
    margin: '50px 0px',
  };

  if (over) {
    innerDiv.margin = '20px 0px';
  }
  return (
    <div>
      {initialPricingTable.map((data) => (
        <div
          style={innerDiv}
          onMouseOver={() => onHover(true)}
          onFocus={() => onHover(true)}
          onMouseOut={() => onHover(false)}
          onBlur={() => onHover(false)}
        >
          <h5 className="mode">
            {data.mode}
          </h5>
          <h6 className="price">
            {data.price} <span className="month">/gig</span>
          </h6>
          <hr />
          <ul className="ulItems">
            <li>
              <span style={{ marginRight: '0.7rem' }}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <strong>{data.user}
              </strong>
            </li>
            <li>
              <span style={{ marginRight: '0.7rem' }}>
                <FontAwesomeIcon icon={faCheck} />
              </span>{data.storage}
            </li>
            <li>
              <span style={{ marginRight: '0.7rem' }}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              {data.projectsPublic}
            </li>
            <li>
              <span style={{ marginRight: '0.7rem' }}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              {data.access}
            </li>
            <li>
              <span style={{ marginRight: '0.7rem' }}>
                <FontAwesomeIcon icon={faCheck} />
              </span>{data.projectsPrivate}
            </li>
            <li>
              <span style={{ marginRight: '0.7rem' }}>
                <FontAwesomeIcon icon={faCheck} />
              </span>{data.phoneSupport}
            </li>
            <li>
              <span style={{ marginRight: '0.7rem' }}>
                <FontAwesomeIcon icon={faCheck} />
              </span>{data.domain}
            </li>
            <li className="text-muted">
              <span style={{ marginRight: '0.7rem' }}><FontAwesomeIcon icon={faCheck} />
              </span>
              {data.reports}
            </li>
          </ul>

          <Link to="/contact" className="button btn btn-primary btnStyle">ORDER</Link>
        </div>
      ))}
    </div>
  );
};

export default Plus;
