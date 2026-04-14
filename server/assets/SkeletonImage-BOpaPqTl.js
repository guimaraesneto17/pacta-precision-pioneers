import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-CPuAT7SN.js";
function SkeletonImage({ className, skeletonClassName, onLoad, ...props }) {
  const [loaded, setLoaded] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full", children: [
    !loaded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-muted animate-pulse ${skeletonClassName ?? ""}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        ...props,
        className: `${className ?? ""} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`,
        onLoad: (e) => {
          setLoaded(true);
          onLoad?.(e);
        }
      }
    )
  ] });
}
export {
  SkeletonImage as S
};
