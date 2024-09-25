import React from 'react';

const SplitName = ({ host }) => {

  const [firstName, lastName] = host.name.split(" ");

  return (
    <div className="Housing__Container__SellerProfil__Names">
      <span>{firstName}</span>
      <span>{lastName}</span>
    </div>
  );
};

export default SplitName;