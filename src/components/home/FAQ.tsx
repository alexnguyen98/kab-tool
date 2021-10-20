import React from 'react';
import Section from '../common/Section';
import Accordion from '../common/Accordion';
import Text from '../common/Text';

const FAQ: React.FC = () => (
  <Section className="bg-yellow-200 spacer wave2" id="faq">
    <div className="pt-60 md:pt-80 pb-20 flex flex-col items-center">
      <Text variant="sectionHeading">Frequently Asked Questions</Text>
      <Accordion
        header="How many Marimos will be minted?!"
        body="Only 999 Marimos will ever be minted and released in our collection!
          The cute moss balls will be released in batches of certain sizes.
          (TBD)"
      />
      <Accordion
        header="When are you dropping the collection?"
        body="Our CGI Artists and Designers are putting finishing touches on our
        fluff balls. You know, brushing their moss hair, hydrating them,
        etc... Leave your email with us and you'll be the first one to know
        when all the Marimos will drop!"
      />
      <Accordion
        header="Where will I be able to buy a Marimo?"
        body="On OpenSea! We'll send you an email containing the detailed
        instructions on how to get your own Marimo once the release date
        closely approaches!"
      />
      <Accordion
        header="Why should I buy one?"
        body="Royalties from OpenSea will be shared with holders of Gen Zero Marimos
        (1st batch drop) as rewards. A snapshot of all holders will be taken
        on a certain date, so you should hurry if you want to participate!"
      />
      <Accordion
        header="What about the price?!"
        body="Each and every single Marimo will be minted for 0.05 ETH, and we swore an oath to never increase the price in terms of ETH."
      />
    </div>
  </Section>
);

export default FAQ;
