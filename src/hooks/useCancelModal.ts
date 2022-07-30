import { useCallback, useEffect } from 'react';

type EventKey = { key: string }

const useCancelModal = (setState: (_b: boolean) => void) => {

  const onKeyPressed = useCallback(({ key }: EventKey) => {
    if (key === 'Escape') setState(false);
  }, [setState]);

  useEffect(() => {
    window.addEventListener('keydown', onKeyPressed);
    return () => window.removeEventListener('keydown', onKeyPressed);
  }, [onKeyPressed]);

  return onKeyPressed;
};

export default useCancelModal;