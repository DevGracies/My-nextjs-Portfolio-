"use client";

import React, { useState } from "react";

export function DropdownMenu({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        className="px-4 py-2 rounded-full hover:bg-white hover:text-black-100 bg-black text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
          {children}
        </div>
      )}
    </div>
  );
}

export function DropdownMenuTrigger({ asChild, children }) {
  return <div>{children}</div>;
}

export function DropdownMenuContent({ children }) {
  return <div className="py-1">{children}</div>;
}

export function DropdownMenuItem({ children, onClick }) {
  return (
    <button
      className="w-full px-4 py-2 text-left hover:bg-gray-100"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
