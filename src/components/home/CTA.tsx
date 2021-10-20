import React from 'react';
import dynamic from 'next/dynamic';
import Section from '../common/Section';
import Text from '../common/Text';

const Typeform = dynamic(() => import('./Typeform'), {
  ssr: false,
});

const CTA: React.FC = () => (
  <Section className="bg-green-1 spacer wave3">
    <div className="flex flex-col md:flex-row items-center pt-40 md:pt-60">
      <div className="mt-20 md:my-auto">
        <Text variant="sectionHeading" className="text-green-2">
          Join our Tribe
        </Text>
        <Text variant="small" className="max-w-lg">
          Hokkaido's indigenous Ainu have been celebrating these fully balls
          since the 1950s. In October every year the city lights up with torch
          parades and the traditional tribal rituals brings a magical feeling.
        </Text>
        <div className="mt-10 font-bold text-2xl">
          Join our NFT tribe and let's celebrate the Marimos!
        </div>
      </div>
      <div className="w-80 md:ml-auto">
        <img
          src="/marimos/marimo_2.gif"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <Typeform />
  </Section>
);

export default CTA;
