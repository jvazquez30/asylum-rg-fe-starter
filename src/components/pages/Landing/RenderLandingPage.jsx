import React from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      {/* Graphs Section: Add code here for the graphs section for your first ticket */}
      {/* <div className="graphs-section"> */}
      <div className='graphs-section'>
        <div className='graphs-section-ind'>
          <img src={GrantRatesByOfficeImg} alt='Grant Rates By Office' className='imp-pics1' />
          <p>Search Grant Rates By Office</p>
        </div>
        <div className='graphs-section-ind'>
          <img src={GrantRatesByNationalityImg} alt='Grants By Nationality' className='imp-pics2' />
          <p>Search Grants Rates By Nationality</p>
        </div>
        <div className='graphs-section-ind'>
          <img src={GrantRatesOverTimeImg} alt='Grant Rates Over Time' className='imp-pics3' />
          <p>Search Grants Rates Over Time</p>
        </div>
      </div>

      <div className="view-more-data-btn-container">
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
        >
          View the Data
        </Button>
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}

        >
          Download the  Data
        </Button>
      </div>

      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>
      <div>
        {/* Bottom Section: Add code here for the graphs section for your first ticket */}
        {/* <div className="bottom-section">*/}

        <div className='"bottom-section'>
          <div className='bottom-section-text'>
            <h1 className='title-sys'>Systemic Disparity Insights</h1>
            <div className='bottom-section-stats'>
              <div className='bottom-stats'>
                <h1 className='bottom-section-headers'> 36%</h1>
                  <p>By the end of the Trump Administration, the average asylum office grant rate had fallen 36 percent
                    from and average of 44 percent in fiscal year 2016 to 28 percent in fiscal year 2020
                  </p>
              </div>
              <div className='bottom-stats'>
                <h2 className='bottom-section-headers'> 5%</h2>
                  <p>The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.</p>
              </div>
              <div className='bottom-stats'>
                <h3 className='bottom-section-headers'> 6x Lower</h3>
                  <p>Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was six time lower
                    tham the San Francisco asylum office.
                  </p>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom-read-more'>

        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
        >
          Read More
        </Button>
        </div>
        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
