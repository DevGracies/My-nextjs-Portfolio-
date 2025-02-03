// "use client";
// import { cn } from "@/lib/utils";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import React, { useMemo, useRef } from "react";
// import * as THREE from "three";

// export const CanvasRevealEffect = ({
//   animationSpeed = 0.4,
//   opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
//   colors = [[0, 255, 255]],
//   containerClassName,
//   dotSize,
//   showGradient = true,
// }) => {
//   return (
//     <div className={cn("h-full relative bg-white w-full", containerClassName)}>
//       <div className="h-full w-full">
//         <DotMatrix
//           colors={colors ?? [[0, 255, 255]]}
//           dotSize={dotSize ?? 3}
//           opacities={
//             opacities ?? [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1]
//           }
//           shader={`
//               float animation_speed_factor = ${animationSpeed.toFixed(1)};
//               float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.01 + (random(st2) * 0.15);
//               opacity *= step(intro_offset, u_time * animation_speed_factor);
//               opacity *= clamp((1.0 - step(intro_offset + 0.1, u_time * animation_speed_factor)) * 1.25, 1.0, 1.25);
//             `}
//           center={["x", "y"]}
//         />
//       </div>
//       {showGradient && (
//         <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
//       )}
//     </div>
//   );
// };

// const DotMatrix = ({
//   colors = [[0, 0, 0]],
//   opacities = [0.04, 0.04, 0.04, 0.04, 0.04, 0.08, 0.08, 0.08, 0.08, 0.14],
//   totalSize = 4,
//   dotSize = 2,
//   shader = "",
//   center = ["x", "y"],
// }) => {
//   const uniforms = useMemo(() => {
//     let colorsArray = new Array(6).fill(colors[0]);
//     if (colors.length === 2) {
//       colorsArray = [...colors.slice(0, 3), ...colors.slice(1, 3)];
//     } else if (colors.length === 3) {
//       colorsArray = [...colors.slice(0, 2), ...colors.slice(1, 3)];
//     }

//     return {
//       u_colors: { value: colorsArray.map(color => color.map(c => c / 255)) },
//       u_opacities: { value: opacities },
//       u_total_size: { value: totalSize },
//       u_dot_size: { value: dotSize },
//     };
//   }, [colors, opacities, totalSize, dotSize]);

//   return <Shader source={shader} uniforms={uniforms} maxFps={60} />;
// };

// const Shader = ({ source, uniforms, maxFps = 60 }) => {
//   return (
//     <Canvas className="absolute inset-0 h-full w-full">
//       <ShaderMaterial source={source} uniforms={uniforms} maxFps={maxFps} />
//     </Canvas>
//   );
// };

// const ShaderMaterial = ({ source, uniforms, maxFps = 60 }) => {
//   const { size } = useThree();
//   const ref = useRef();
//   let lastFrameTime = 0;

//   useFrame(({ clock }) => {
//     if (!ref.current) return;
//     const timestamp = clock.getElapsedTime();
//     if (timestamp - lastFrameTime < 1 / maxFps) return;
//     lastFrameTime = timestamp;
//     ref.current.material.uniforms.u_time.value = timestamp;
//   });

//   const getUniforms = () => {
//     const preparedUniforms = {};
//     Object.keys(uniforms).forEach(key => {
//       preparedUniforms[key] = { value: uniforms[key].value };
//     });
//     preparedUniforms["u_time"] = { value: 0 };
//     preparedUniforms["u_resolution"] = {
//       value: new THREE.Vector2(size.width * 2, size.height * 2),
//     };
//     return preparedUniforms;
//   };

//   const material = useMemo(() => new THREE.ShaderMaterial({
//     vertexShader: `
//       precision mediump float;
//       in vec2 coordinates;
//       uniform vec2 u_resolution;
//       out vec2 fragCoord;
//       void main(){
//         vec2 pos = position.xy;
//         gl_Position = vec4(pos, 0.0, 1.0);
//         fragCoord = (pos + vec2(1.0)) * 0.5 * u_resolution;
//         fragCoord.y = u_resolution.y - fragCoord.y;
//       }
//     `,
//     fragmentShader: source,
//     uniforms: getUniforms(),
//     blending: THREE.CustomBlending,
//   }), [size.width, size.height, source]);

//   return (
//     <mesh ref={ref}>
//       <planeGeometry args={[2, 2]} />
//       <primitive object={material} attach="material" />
//     </mesh>
//   );
// };
