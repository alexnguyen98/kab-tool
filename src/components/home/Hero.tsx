import React from 'react';
import Section from '../common/Section';
import Text from '../common/Text';

const Hero: React.FC = () => (
  <Section className="bg-amber-200 relative overflow-hidden">
    <div className="min-h-2xl pb-10 pt-20 mt-10 md:mt-0 md:pt-40 flex flex-col-reverse md:flex-row items-center relative z-10">
      <div className="md:my-auto order-2 md:order-1">
        <Text variant="heading" className="text-red-500">
          Marimos, assemble!
        </Text>
        <Text className="max-w-lg text-red-400">
          These rare fluffy moss balls reside in a number of lakes and rivers.
          They've been recognised as a Natural Treasure in Japan, where they
          were first discovered.
        </Text>
        <Text className="max-w-lg text-red-400 pt-5">
          This endangered species are now coming to you on the blockchain!
        </Text>
      </div>
      <div className="pt-20 md:pt-0 md:ml-20 w-80 md:order-2">
        <img
          src="/marimos/marimo_1.gif"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </Section>
);

export default Hero;
