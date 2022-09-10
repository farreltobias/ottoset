import React from 'react';

import { contacts } from '@utils/contacts';
import information from '@utils/infomation';

import { Link } from '@components/Link';
import { Caps } from '@components/Text/titles';

export const Contact: React.FC = () => {
  const phoneRegex =
    /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/;

  const aux = contacts.map(({ type, number, link }) => {
    const phoneNumber = number.replace(/\+55/g, '');

    const [_, ddd, num1, num2] = phoneRegex.exec(phoneNumber) || [];
    let phone = `${num1}-${num2}`;

    if (ddd) {
      phone = `(${ddd}) ${phone}`;
    }

    return {
      type,
      link,
      number: phone,
    };
  });

  return (
    <div className="flex">
      {React.Children.toArray(
        aux.map(({ type, number, link }, index) => {
          return (
            <>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <span className="hidden lg:block">
                  <Caps>{type}:</Caps>
                </span>
                <span className="text-sm pl-1 font-title">{number}</span>
              </a>
              {index !== aux.length - 1 && (
                <span className="flex items-center px-1">
                  <span className="text-sm font-title font-bold">|</span>
                </span>
              )}
            </>
          );
        })
      )}
      <Link
        href={`mailto:${information.email}`}
        className="hidden lg:block ml-6 font-title font-normal p-0"
      >
        {information.email}
      </Link>
    </div>
  );
};
