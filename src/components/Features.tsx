import React from 'react';
import { QrCode, CreditCard, Clock, Leaf } from 'lucide-react';

const features = [
  {
    name: 'Digital QR Tickets',
    description: 'Instantly receive digital parking tickets through QR codes',
    icon: QrCode,
  },
  {
    name: 'Flexible Payments',
    description: 'Choose between online and offline payment methods',
    icon: CreditCard,
  },
  {
    name: 'Quick Process',
    description: 'Park your bike and get your ticket in under a minute',
    icon: Clock,
  },
  {
    name: 'Eco-Friendly',
    description: 'Paperless system reducing environmental impact',
    icon: Leaf,
  },
];

export function Features() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Smart Parking Made Simple
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Experience the future of bike parking with our innovative digital solutions.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500 text-center">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}