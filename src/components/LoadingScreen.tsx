import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LOADER_DURATION = 3500;

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const startTime = Date.now();

    const interval = window.setInterval(() => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min(
        Math.floor((elapsed / LOADER_DURATION) * 100),
        100
      );

      setProgress(nextProgress);

      if (nextProgress >= 100) {
        window.clearInterval(interval);

        window.setTimeout(() => {
          setExiting(true);

          window.setTimeout(() => {
            onComplete();
          }, 700);
        }, 400);
      }
    }, 30);

    return () => {
      window.clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div
      className={`loading-screen ${exiting ? 'loading-screen--exit' : ''}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="loading-content">

        <div className="ramen-animation" aria-hidden="true">
          <div className="steam steam-one" />
          <div className="steam steam-two" />
          <div className="steam steam-three" />

          <div className="food-particle particle-one" />
          <div className="food-particle particle-two" />
          <div className="food-particle particle-three" />

          <div className="pan-group">
            <div className="pan-handle" />
            <div className="pan">
              <div className="pan-inner" />
            </div>
          </div>
        </div>

        <div className="loading-text">
          COOKING YOUR RAMEN... {progress}%
        </div>

        <div className="progress-track">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>
    </div>
  );
};

export default LoadingScreen;