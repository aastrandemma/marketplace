import React from 'react';
import AdvertisementCard from './AdvertisementCard';
import { advertisementsData } from '../advertisementsData';

const AdvertisementList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {advertisementsData.map(advertisement => (
        <AdvertisementCard key={advertisement.id} advertisement={advertisement} />
      ))}
    </div>
  );
};

export default AdvertisementList;