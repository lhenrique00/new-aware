// components/AnimatedBox.tsx
import React from "react";
import { useSpring, animated } from "@react-spring/web";
import styled from "styled-components";

interface AnimatedBoxProps {
  children: React.ReactNode;
}

const StyledAnimatedDiv = styled(animated.div)`
  background-color: #e0f7fa;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const AnimatedBox: React.FC<AnimatedBoxProps> = ({ children }) => {
  const styles = useSpring({
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0px,0)" },
    config: { tension: 120, friction: 14 },
  });

  return <StyledAnimatedDiv style={styles}>{children}</StyledAnimatedDiv>;
};

export default AnimatedBox;
