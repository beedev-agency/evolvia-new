export const useAnimation = () => {
    const leftVariants = {
      offscreen: {
        x: -900,
      },
      onscreen: {
        x: 0,
        rotate: 0,
        transition: {
          type: "spring",
          bounce: 0.2,
          duration: 0.8,
        },
      },
    };
  
    const rightVariants = {
      offscreen: {
        x: 900,
      },
      onscreen: {
        x: 0,
        rotate: 0,
        transition: {
          type: "spring",
          bounce: 0.2,
          duration: 0.8,
        },
      },
    };
  
    const downVariants = {
      offscreen: {
        y: 500,
      },
      onscreen: {
        y: 0,
        rotate: 0,
        transition: {
          type: "spring",
          bounce: 0.2,
          duration: 0.8,
        },
      },
    };
    
    const lineAnimation = {
      offscreen: {
        width: 0,
      },
      onscreen: {
        width: "100%",
        transition: {
          type: "spring",
          duration: 0.8,
          delay: 0.5,
        },
      },
    };
  
    const opacityVariations = {
      offscreen: {
        opacity: 0,
      },
      onscreen: {
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          delay: 0.3,
        },
      },
    };
  
    const oneByOneVariations = {
      offscreen: { opacity: 0 },
      onscreen: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: .5,
          staggerDirection: 1,
          duration: .5,
          delay: 0.3,
        },
      },
    };
  
    const itemVariations = {
      offscreen: { opacity: 0 },
      onscreen: { opacity: 1 },
    };
  
    return {
      leftVariants,
      rightVariants,
      downVariants,
      lineAnimation,
      opacityVariations,
      oneByOneVariations,
      itemVariations,
    };
  };
  