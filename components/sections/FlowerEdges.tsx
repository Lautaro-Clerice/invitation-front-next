import { motion, useInView } from "framer-motion";

interface FlowerConfig {
  image: string;
  top: string;
  left: string;
  size: number;
  opacity: number;
  rotate: number;
  zIndex: number;
  delay: number;
  offsetX?: number;
  offsetY?: number;
}

interface FlowerEdgesProps {
  sectionRef: React.RefObject<HTMLElement>;
  side: "left" | "right" | "center" | "top";
  flowers: FlowerConfig[];
  top?: string;
}

export const FlowerEdges = ({
  sectionRef,
  side,
  flowers,
  top,
}: FlowerEdgesProps) => {
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.5,
  });

  return (
    <>
      {flowers.map((flower, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            x:
              side === "center"
                ? 0
                : side === "left"
                ? -100
                : side === "right"
                ? 100
                : 0,
            y: side === "top" ? -100 : side === "center" ? 0 : 0,
            scale: side === "center" ? 0.1 : 0.8,
          }}
          animate={
            isInView
              ? {
                  opacity: flower.opacity,
                  x:
                    side === "center" && flower.offsetX !== undefined
                      ? flower.offsetX
                      : 0,
                  y:
                    side === "center" && flower.offsetY !== undefined
                      ? flower.offsetY
                      : side === "top"
                      ? 0
                      : 0,
                  scale: 1,
                }
              : {
                  opacity: 0,
                  x:
                    side === "center"
                      ? 0
                      : side === "left"
                      ? -100
                      : side === "right"
                      ? 100
                      : 0,
                  y: side === "top" ? -100 : side === "center" ? 0 : 0,
                  scale: side === "center" ? 0.1 : 0.8,
                }
          }
          transition={{
            duration: 0.8,
            delay: flower.delay,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            ...(side === "center"
              ? {
                  left: flower.left,
                  top: top ?? flower.top,
                  ...(flower.offsetX === undefined &&
                    flower.offsetY === undefined && {
                      transform: `translateX(-50%) translateY(-50%)`,
                    }),
                }
              : side === "top"
              ? { top: top ?? flower.top, left: flower.left }
              : { [side]: parseInt(flower.left), top: top ?? flower.top }),
            zIndex: flower.zIndex,
          }}
          className="pointer-events-none lg:block"
          aria-hidden="true"
          role="img"
        >
          <motion.img
            src={flower.image}
            alt=""
            animate={
              isInView
                ? {
                    rotate: [
                      flower.rotate,
                      flower.rotate,
                      flower.rotate + 3,
                      flower.rotate,
                      flower.rotate - 3,
                      flower.rotate,
                      flower.rotate,
                    ],
                  }
                : { rotate: flower.rotate }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            style={{
              width: `${flower.size}px`,
              height: `${flower.size}px`,
              rotate: `${flower.rotate}deg`,
              filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))",
            }}
            className="object-contain"
          />
        </motion.div>
      ))}
    </>
  );
};
