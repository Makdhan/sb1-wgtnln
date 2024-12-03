import React from 'react';
import { Bike, QrCode, CreditCard, Check } from 'lucide-react';

const steps = [
  {
    id: 1,
    name: 'Park Your Bike',
    description: 'Find a spot at any QreQ enabled parking station',
    icon: Bike,
  },
  {
    id: 2,
    name: 'Scan QR Code',
    description: 'Use your phone to scan the parking spot QR code',
    icon: QrCode,
  },
  {
    id: 3,
    name: 'Choose Payment',
    description: 'Select your preferred payment method - online or offline',
    icon: CreditCard,
  },
  {
    id: 4,
    name: 'Get Digital Receipt',
    description: 'Receive your digital parking ticket instantly',
    icon: Check,
  },
];

export function HowItWorks() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Process</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">How It Works</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Four simple steps to park your bike with QreQ
          </p>
        </div>

        <div className="mt-20">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-between">
              {steps.map((step) => (
                <div key={step.id} className="relative flex flex-col items-center">
                  <div className="rounded-full bg-white border-2 border-blue-600 p-4">
                    <step.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-lg font-medium text-gray-900">{step.name}</h3>
                    <p className="mt-2 text-sm text-gray-500 max-w-[200px]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}