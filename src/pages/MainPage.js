import React from 'react';

import NavBarMainContainer from '../containers/NavBarMainContainer';
import MainLayout from '../components/MainLayout';

export default function MainPage() {
  return (
    <React.Fragment>
      <div>
        <div className="back">
          <video
            className="bckgd-video"
            src="https://cdn.glitch.com/f41b492f-b6c5-470c-b7e7-586981c597cf%2Fsample.mp4?1530698928410"
            autoPlay="autoPlay"
            loop="loop"
            preload="auto"
            muted="true"
          />
        </div>
        <div class="txt" contenteditable="true">
          Mood Seller
        </div>
      </div>
      <NavBarMainContainer />
      <MainLayout />
    </React.Fragment>
  );
}
