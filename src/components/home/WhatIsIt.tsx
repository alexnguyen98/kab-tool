import React from 'react';
import Section from '../common/Section';
import Text from '../common/Text';

const WhatIsIt: React.FC = () => (
  <>
    <Section className="bg-red-400 spacer wave1" id="whatIsIt">
      <div className="flex flex-col-reverse md:flex-row items-center pt-40 md:pt-80 pb-20">
        <div className="flex-1 pt-20 md:pt-0">
          <img
            src="/marimos/marimo_3.gif"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-2 md:my-auto md:ml-auto md:pl-20">
          <Text
            variant="sectionHeading"
            className="inline-block text-amber-100"
          >
            Warm and fuzzy. And here to stay. On OpenSea. 🌊
          </Text>
          <Text className="max-w-lg text-amber-200">
            Buy it. Keep it. Trade it. This is the world's fluffiest NFT
            collection and only 999 Marimos will ever be minted! Each Marimo is
            uniquely crafted, designed and rendered. By hand. ✍️
          </Text>
        </div>
      </div>
    </Section>
  </>
);

export default WhatIsIt;
