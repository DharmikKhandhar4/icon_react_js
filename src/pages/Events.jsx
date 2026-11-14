import React from 'react';
import Blogs from './Blogs';

export default function Events({ onNavigate }) {
  return <Blogs onNavigate={onNavigate} initialCategory="Event" />;
}

