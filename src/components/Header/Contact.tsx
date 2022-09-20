import React from 'react';

import { contacts } from '@utils/contacts';
import information from '@utils/infomation';

import { Link } from '@components/Link';
import { Title } from '@components/Text/titles';
import { formatPhoneNumber } from '@utils/formatPhoneNumber';

export const Contact: React.FC = () => {
  const contactInformation = contacts
    .filter(({ onlyFooter }) => !onlyFooter)
    .map(({ type, number, link }) => ({
      type,
      number: formatPhoneNumber(number || ''),
      link,
    }));

  return (
    <div className="flex">
      {React.Children.toArray(
        contactInformation.map(({ type, number, link }, index) => {
          return (
            <>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <span className="hidden lg:block">
                  <Title
                    as="span"
                    variant="caps"
                    className="text-sm xl:text-base"
                  >
                    {type}:
                  </Title>
                </span>
                <span className="text-xs sm:text-sm pl-1 font-title">
                  {number}
                </span>
              </a>
              {index !== contactInformation.length - 1 && (
                <span className="flex items-center px-1">
                  <span className="text-xs sm:text-sm font-title font-bold">
                    |
                  </span>
                </span>
              )}
            </>
          );
        })
      )}
      <Link
        href={`mailto:${information.email}`}
        className="hidden lg:block ml-6 font-title font-normal p-0 text-sm xl:text-base"
      >
        {information.email}
      </Link>
    </div>
  );
};
