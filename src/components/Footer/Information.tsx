import { Children } from 'react';

import { Text } from '@components/Texts';

import { address } from '@data/static/ottoset';
import { contacts } from '@data/contacts';
import { socials } from '@data/socials';

import { formatPhoneNumber } from '@utils/formatPhoneNumber';

export const Information = () => {
  const { street, number, neiboorhood, city, state, zipCode, link } = address;
  const addressString = `R. ${street}, ${number}. ${neiboorhood} - \n${city}, ${state} - ${zipCode}`;

  const contactInformation = contacts
    .map(({ Icon, number, link, email }) => ({
      Icon,
      number: number ? formatPhoneNumber(number) : null,
      email: email || null,
      link,
    }))
    .reverse();

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-center lg:text-start mb-4"
      >
        <Text variant="p4" className="whitespace-pre">
          {addressString}
        </Text>
      </a>
      {Children.toArray(
        contactInformation.map(({ Icon, link, number, email }) => (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center mb-2"
          >
            <Icon width={16} height={16} className="fill-secondary-900 mr-1" />
            <Text variant="p4">{number || email}</Text>
          </a>
        )),
      )}
      <ul className="flex lg:mt-2 mx-auto lg:mx-0">
        {Children.toArray(
          socials.map(({ Icon, href }) => (
            <li className="mx-3 lg:mr-6 lg:ml-0">
              <a href={href} target="_blank" rel="noreferrer">
                <Icon
                  width={24}
                  height={24}
                  className="child:fill-secondary-900"
                />
              </a>
            </li>
          )),
        )}
      </ul>
    </>
  );
};
