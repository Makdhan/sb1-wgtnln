import React from 'react';
import { Bike } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Bike className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">QreQ</span>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-500 hover:text-gray-900">Features</a>
              <a href="#how-it-works" className="text-gray-500 hover:text-gray-900">How It Works</a>
              <a href="#contact" className="text-gray-500 hover:text-gray-900">Contact</a>
            </div>
            <button className="ml-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}