import '@testing-library/jest-dom';
import { vi } from 'vitest';
import type React from 'react';

// Mock @tanstack/react-router
vi.mock('@tanstack/react-router', () => ({
  Link: ({ to, children, ...props }: { to: string; children: React.ReactNode } & Record<string, unknown>) => <a href={to} {...(props as Record<string, unknown>)}>{children}</a>,
  useNavigate: () => (vi.fn() as unknown as () => void),
  useParams: () => ({} as Record<string, string>),
  useSearch: () => ({} as Record<string, string>),
}));
