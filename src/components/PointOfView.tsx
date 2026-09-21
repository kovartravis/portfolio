import React from 'react';
import { POINT_OF_VIEW } from '../data/resumeData';

export const PointOfView: React.FC = () => {
  return (
    <section id="point-of-view" className="py-12 sm:py-16 border-t border-stone-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          Point of View
        </h2>
        <p className="mt-5 text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl">
          {POINT_OF_VIEW}
        </p>
      </div>
    </section>
  );
};
