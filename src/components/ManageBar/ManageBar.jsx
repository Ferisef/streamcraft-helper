import React from 'react';
import TheatreMode from './TheatreMode';
import HideContributionGuard from './HideContributionGuard';
import HideLikesAnimation from './HideLikesAnimation';
import LikesClicker from './LikesClicker';
import ChestClicker from './ChestClicker';

const css = {
  textAlign: 'left',
};

const ManageBar = () => (
  <div className="manage-bar" style={{ userSelect: 'none' }}>
    <h4>StreamCraft Settings</h4>
    <div className="manage-list" style={css}>
      <TheatreMode />
      <HideContributionGuard />
      <HideLikesAnimation />
    </div>
    <h4>Clickers</h4>
    <div className="manage-list" style={css}>
      <LikesClicker />
      <ChestClicker />
    </div>
  </div>
);

export default ManageBar;
