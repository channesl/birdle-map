import React from 'react';
import { Layout } from '@/components/Layout';
import { FilterPanel } from '@/features/filters/FilterPanel';
import { MapComponent } from '@/components/maps/MapComponent';

export function HomePage() {
  return (
    <Layout>
      <FilterPanel />
      <MapComponent />
      
    </Layout>
  );
}