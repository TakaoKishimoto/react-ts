import { useEffect, useState } from 'react';

export const useTimer = (maxCount: number): [number, () => void] => {
  const [timeLeft, setTimeLeft] = useState(maxCount);
  const tick = (): void => setTimeLeft((t) => t - 1);
  const reset = (): void => setTimeLeft(maxCount);

  // Tried add stopwatch but gave up
  // const [running, setRunning] = useState(true);
  // useEffect(() => {
  //   running ? setRunning(false) : setRunning(true);
  // }, [running]);

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) setTimeLeft(maxCount);
  }, [timeLeft, maxCount]);

  return [timeLeft, reset];
};
