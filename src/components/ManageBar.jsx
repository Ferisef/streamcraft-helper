import React from 'react';
import TheatreMode from './TheatreMode';
import HideContributionGuard from './HideContributionGuard';
import HideLikesAnimation from './HideLikeAnimation';
import AutoLikes from './AutoLike';
import AutoOpenChest from './AutoOpenChest';

const ManageBar = () => (
  <div className="manage-bar" style={{ userSelect: 'none' }}>
    <h4>StreamCraft Settings</h4>
    <div className="manage-list">
      <TheatreMode />
      <HideContributionGuard />
      <HideLikesAnimation />
    </div>
    <h4>Clickers</h4>
    <div className="manage-list">
      <AutoLikes />
      <AutoOpenChest />
    </div>
  </div>
);

export default ManageBar;
