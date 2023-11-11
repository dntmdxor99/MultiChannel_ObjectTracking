import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import PageLayout from '../components/PageLayout';
import Header from '../components/Header';
// import homeImage from '../assets/img/home-image.png'

const Frame = styled.div`
  width: 100vw;
  height: 100vh;
`

const MainPage = () => {
    return (
        <PageLayout>
            <Header>
              <div className='menu'>
                <div className='menu-bar'>
                  <h4 className='menu-bar-item'>7팀</h4>
                  <h4 className='menu-bar-item'>이상행동</h4>
                  <h4 className='menu-bar-item'>CCTV</h4>
                  <h4 className='menu-bar-item'>문의하기</h4>
                </div>
              </div>
            </Header>
            <Frame>
              <div className='home'>
                <div className='home-main'>
                  <h1 className='home-main-title'>
                    다채널 CCTV
                    <br />
                    이상행동 감지 및 추적
                  </h1>
                </div>
                {/* <div className='home-image'>
                  <img className='home-image-proto' alt='decoration' src={homeImage} />
                </div> */}
              </div> 
            </Frame>
        </PageLayout>
    )
};

export default MainPage;