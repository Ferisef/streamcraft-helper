import React from 'react';
import TheatreModeBtn from './TheatreModeBtn';
import HideContributionGuardBtn from './HideContributionGuardBtn';
import HideLikesAnimationBtn from './HideLikesAnimationBtn';
import AutoLikesBtn from './AutoLikesBtn';
import AutoOpenChestBtn from './AutoOpenChestBtn';

const ManageBar = () => (
  <div className="manage-bar" style={{ userSelect: 'none' }}>
    <h4>StreamCraft Settings</h4>
    <div className="manage-list">
      <TheatreModeBtn />
      <HideContributionGuardBtn />
      <HideLikesAnimationBtn />
    </div>
    <h4>Clickers</h4>
    <div className="manage-list">
      <AutoLikesBtn />
      <AutoOpenChestBtn />
    </div>
  </div>
);

export default ManageBar;
