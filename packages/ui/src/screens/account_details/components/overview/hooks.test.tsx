import { act, cleanup, renderHook } from '@testing-library/react';
import { useOverview } from '@/screens/account_details/components/overview/hooks';

const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-i18next', () => ({
  ...jest.requireActual('next-i18next'),
  useTranslation() {
    return mockI18n;
  },
}));

jest.mock('react-toastify', () => ({
  toast: jest.fn(),
}));

jest.mock('copy-to-clipboard', () => ({
  copy: jest.fn(),
}));

describe('hook: useOverview', () => {
  test('handles open correctly', () => {
    const { result } = renderHook(() => useOverview());
    expect(result.current.open).toBe(false);

    act(() => result.current.handleOpen());
    expect(result.current.open).toBe(true);
  });

  test('handles close correctly', () => {
    const { result } = renderHook(() => useOverview());
    expect(result.current.open).toBe(false);

    act(() => result.current.handleOpen());
    expect(result.current.open).toBe(true);

    act(() => result.current.handleClose());
    expect(result.current.open).toBe(false);
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
