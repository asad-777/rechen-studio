'use client';

import React from 'react';
import Link from 'next/link';
import { trackEvent } from '../../lib/analytics';

export default function TrackedLink({ href, action, actionData, className, children, ...props }) {
  const handleClick = () => {
    if (action) {
      trackEvent(action, actionData || {});
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
}
