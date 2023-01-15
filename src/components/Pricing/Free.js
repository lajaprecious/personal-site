import { useState, React } from 'react';
import '../../static/css/pricing/pricing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Free = () => {
  const [over, onHover] = useState(false);

  const pricingTable = [
    {
      mode: 'WEBSITE DEVELOPMENT',
      price: '300$',
      user: '4 Pages or more',
      storage: 'Unlimited Revision',
      projectsPublic: 'Responsive design & Content Upload',
      access: 'Plugins/extensions installation',
      projectsPrivate: 'E-commerce functionality',
      phoneSupport: 'Payment processing',
      domain: 'Hosting setup',
      reports: 'Express delivery',
    },
  ];

  const [initialPricingTable] = useState(pricingTable);
  // const [initialPricingTable, updatedPriceTable] = useState(pricingTable);

  const innerDiv = {
    backgroundColor: 'white',
    borderRadius: '15px',
    width: '400px',
    height: '580px',
    margin: '50px 0px',
    justifyContent: 'center',
  };

  if (over) {
    innerDiv.margin = '20px 0px';
  }
  return (
    <div style={innerDiv}>
      {initialPricingTable.map((data) => (
        <div
          onMouseOver={() => onHover(true)}
          onFocus={() => onHover(true)}
          onMouseOut={() => onHover(false)}
          onBlur={() => onHover(false)}
        >
          <h5 className="mode">{data.mode}</h5>
          <h6 className="price">
            {data.price} <span className="month">/gig</span>
          </h6>
          <hr />
          <ul className="ulItems">
            <li>
              <span style={{ marginRight: '0.7rem' }}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              {data.user}{' '}
            </li>
            <li>
              <span style={{ marginRight: '0.7rem' }}>
                <FontAwesomeIcon icon={faCheck} />
              </span>{' '}
              {data.storage}
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
            <li className="text-muted">   <span style={{ marginRight: '0.7rem' }}><FontAwesomeIcon icon={faCheck} /> </span>{data.projectsPrivate}</li>
            <li className="text-muted">   <span style={{ marginRight: '0.7rem' }}><FontAwesomeIcon icon={faCheck} /> </span>{data.phoneSupport}</li>
            <li className="text-muted">   <span style={{ marginRight: '0.7rem' }}><FontAwesomeIcon icon={faCheck} /> </span>{data.domain}</li>
            <li className="text-muted">   <span style={{ marginRight: '0.7rem' }}><FontAwesomeIcon icon={faCheck} /> </span>{data.reports}</li>
          </ul>

          <Link to="/contact" className="button btn btn-primary btnStyle">ORDER</Link>
        </div>
      ))}
    </div>
  );
};

export default Free;
