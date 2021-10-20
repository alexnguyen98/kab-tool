import React from 'react';

const Footer: React.FC = () => (
  <footer className="flex flex-col pt-12 pb-5 bg-green-1 border-t border-green-100">
    <div className="mx-auto text-center">
      <div>The Marimos Club</div>
      <div className="text-sm text-accent-5">
        Copyright &copy; Electric Love 2021
      </div>
    </div>
    <ul className="mx-auto flex items-center space-x-8 mt-8">
      <li>
        <a href="#whatIsIt">About</a>
      </li>
      <li>
        <a href="#faq">FAQ</a>
      </li>
      <li>
        <a href="https://twitter.com/MarimosNFT">Twitter</a>
      </li>
    </ul>
    <div className="mt-12 p-2 flex items-center justify-center">
      <a href="mailto:hello@marimos.club" className="text-accent-5 text-sm">
        hello@marimos.club
      </a>
    </div>
  </footer>
);

export default Footer;
