import React, { useEffect, useState } from "react";

const PacmanWithGhost = () => {
  // Start Pac-Man and ghost in the bottom-left corner
  const [pacmanPosition, setPacmanPosition] = useState({
    top: window.innerHeight - 60,
    left: 0,
  });
  const [ghostPosition, setGhostPosition] = useState({
    top: window.innerHeight - 60,
    left: 75,
  });

  useEffect(() => {
    const pacmanInterval = setInterval(() => {
      setPacmanPosition((prev) => {
        let newLeft = prev.left;
        const screenWidth = window.innerWidth; // Full screen width

        // Move Pac-Man to the right and reset to the left when off-screen
        if (newLeft > screenWidth) {
          newLeft = -60; // Reset to just off the left-hand side
        } else {
          newLeft += 3; // Movement speed
        }

        return { ...prev, left: newLeft };
      });
    }, 50);

    return () => clearInterval(pacmanInterval);
  }, []);

  useEffect(() => {
    const ghostInterval = setInterval(() => {
      setGhostPosition((prev) => {
        let newLeft = prev.left;
        const screenWidth = window.innerWidth; // Full screen width

        // Move Ghost to the right and reset to the left when off-screen
        if (newLeft > screenWidth) {
          newLeft = -60; // Reset to just off the left-hand side
        } else {
          newLeft += 3; // Movement speed
        }

        return { ...prev, left: newLeft };
      });
    }, 50);

    return () => clearInterval(ghostInterval);
  }, []);

  return (
    <div>
      {/* Pac-Man */}
      <div
        className="absolute z-[51]"
        style={{
          top: `${pacmanPosition.top}px`,
          left: `${pacmanPosition.left}px`,
        }}
      >
        <img
          src="/XOsf.gif"
          alt="Pac-Man"
          className="fixed h-12 w-12"
        />
      </div>

      {/* Ghost */}
      <div
        className="absolute z-[51]"
        style={{
          top: `${ghostPosition.top}px`,
          left: `${ghostPosition.left}px`,
        }}
      >
        <img
          src="/iHG.gif"
          alt="Ghost"
          className="fixed h-12 w-12"
        />
      </div>
    </div>
  );
};

export default PacmanWithGhost;
