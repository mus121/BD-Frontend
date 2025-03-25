'use client';

import React from 'react';
import BusinessUnitSideViewCardWrapper from '../sidebars/BusinessUnitSideViewCard/BusinessUnitSideViewCardWrapper';
import CompanySideViewCardWrapper from '../sidebars/CompanySideViewCard/CompanySideViewCardWrapper';
import ProfileSideViewCardWrapper from '../sidebars/ProfileSideViewCard/ProfileSideViewCardWrapper';
import ProductSideViewCardWrapper from '../sidebars/ProductSideViewCard/ProductSideViewCardWrapper';

function MultiSidebar() {
  const handleViewAssignment = (assignmentId: number) => {
    window.open(
      `${process.env.QLU2_FRONTEND_URL}/assignments/${assignmentId}/dashboard/people`,
      '_blank',
      'noreferrer',
    );
  };

  return (
    <div>
      <ProfileSideViewCardWrapper handleViewAssignment={handleViewAssignment} />
    </div>
  );
}

export default MultiSidebar;
