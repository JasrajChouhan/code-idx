import { Card } from 'antd';
import React from 'react';

import { BackButton } from '../atoms/back-button';
import { CardHeader } from '../atoms/card-header';
import { Social } from './social';

interface CardWrapperProps {
  children: React.ReactNode;
  showSocial?: boolean;
  headerLabel: string;
  backButtonHref: string;
  backButtonLabel: string;
}

// Main CardWrapper Component
const CardWrapper = ({
  children,
  showSocial,
  headerLabel,
  backButtonHref,
  backButtonLabel,
}: CardWrapperProps) => {
  return (
    <Card
      className="w-[400px] shadow-md"
      style={{
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '16px',
      }}
    >
      <CardHeader headerLabel={headerLabel} />
      <div className="mb-4">{children}</div>
      {showSocial && <Social />}
      <div className="mt-4 ml-[-15px]">
        <BackButton
          backButtonLabel={backButtonLabel}
          backButtonHref={backButtonHref}
        />
      </div>
    </Card>
  );
};

export default CardWrapper;
