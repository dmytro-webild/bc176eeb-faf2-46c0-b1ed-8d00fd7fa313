"use client";

import { useState } from 'react';
import { ThemeProvider } from '@/providers/themeProvider/ThemeProvider';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ThemeProvider>
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-[var(--card)] p-8 rounded-[var(--border-radius)] border border-[var(--accent)]">
          <h1 className="text-3xl font-bold mb-6 text-[var(--foreground)]">Customer Login</h1>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg border border-[var(--accent)]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg border border-[var(--accent)]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full py-3 bg-[var(--primary-cta)] text-[var(--primary-cta-text)] font-semibold rounded-lg">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
}