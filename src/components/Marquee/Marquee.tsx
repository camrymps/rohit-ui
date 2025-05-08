import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

const scrollLeft = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const scrollRight = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const scrollUp = keyframes`
  0% { transform: translateY(100%); }
  100% { transform: translateY(-100%); }
`;

const scrollDown = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const wiggle = keyframes`
  0% { transform: translateX(100%) rotate(0deg); }
  25% { transform: translateX(75%) rotate(-2deg); }
  75% { transform: translateX(25%) rotate(2deg); }
  100% { transform: translateX(-100%) rotate(0deg); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateX(100%) translateY(0); }
  50% { transform: translateX(50%) translateY(-10px); }
`;

const colorChange = keyframes`
  0% { color: var(--win98-navy); }
  25% { color: var(--win98-hot-pink); }
  50% { color: var(--win98-green); }
  75% { color: var(--win98-purple); }
  100% { color: var(--win98-navy); }
`;

const MarqueeContainer = styled.div<{ $rohitMode: boolean }>`
  background: var(--win98-silver);
  border: 2px solid ${props => props.$rohitMode ? 'var(--win98-hot-pink)' : 'var(--win98-navy)'};
  padding: 8px;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
`;

const MarqueeContent = styled.div<{
  $speed: number;
  $direction: 'left' | 'right' | 'up' | 'down';
  $rohitMode: boolean;
  $isPaused: boolean;
}>`
  white-space: nowrap;
  position: absolute;
  animation: ${props => {
    if (props.$rohitMode) {
      return css`${wiggle} ${props.$speed}s linear infinite, ${colorChange} 2s infinite`;
    }
    switch (props.$direction) {
      case 'left':
        return css`${scrollLeft} ${props.$speed}s linear infinite`;
      case 'right':
        return css`${scrollRight} ${props.$speed}s linear infinite`;
      case 'up':
        return css`${scrollUp} ${props.$speed}s linear infinite`;
      case 'down':
        return css`${scrollDown} ${props.$speed}s linear infinite`;
    }
  }};
  animation-play-state: ${props => props.$isPaused ? 'paused' : 'running'};
`;

export interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  pauseOnHover?: boolean;
  className?: string;
  rohitMode?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = 20,
  direction = 'left',
  pauseOnHover = true,
  className,
  rohitMode = false,
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [rohitDirection, setRohitDirection] = useState(direction);
  const [rohitContent, setRohitContent] = useState(children);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rohitMode) {
      // Randomly change direction every 5-10 seconds
      const directionInterval = setInterval(() => {
        const directions: ('left' | 'right' | 'up' | 'down')[] = ['left', 'right', 'up', 'down'];
        setRohitDirection(directions[Math.floor(Math.random() * directions.length)]);
      }, Math.random() * 5000 + 5000);

      // Add random emojis every 3-7 seconds
      const emojiInterval = setInterval(() => {
        const emojis = ['✨', '🎉', '🌟', '💫', '🎈', '🎨', '🌈'];
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        setRohitContent(prev => {
          const content = React.Children.toArray(prev);
          const randomIndex = Math.floor(Math.random() * (content.length + 1));
          const newContent = [...content];
          newContent.splice(randomIndex, 0, randomEmoji);
          return newContent;
        });
      }, Math.random() * 4000 + 3000);

      return () => {
        clearInterval(directionInterval);
        clearInterval(emojiInterval);
      };
    }
  }, [rohitMode]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  return (
    <MarqueeContainer
      ref={containerRef}
      className={className}
      $rohitMode={rohitMode}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MarqueeContent
        $speed={speed}
        $direction={rohitMode ? rohitDirection : direction}
        $rohitMode={rohitMode}
        $isPaused={isPaused}
      >
        {rohitMode ? rohitContent : children}
      </MarqueeContent>
    </MarqueeContainer>
  );
}; 