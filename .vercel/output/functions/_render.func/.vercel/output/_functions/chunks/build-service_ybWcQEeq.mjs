function isESMImportedImage(src) {
  return typeof src === "object";
}
const qualityTable = {
  low: 25,
  mid: 50,
  high: 80,
  max: 100
};
function sharedValidateOptions(options, serviceConfig, mode) {
  const vercelImageOptions = serviceConfig;
  if (mode === "development" && (!vercelImageOptions.sizes || vercelImageOptions.sizes.length === 0)) {
    throw new Error("Vercel Image Optimization requires at least one size to be configured.");
  }
  const configuredWidths = vercelImageOptions.sizes.sort((a, b) => a - b);
  if (!options.width) {
    const src = options.src;
    if (isESMImportedImage(src)) {
      const nearestWidth = configuredWidths.reduce((prev, curr) => {
        return Math.abs(curr - src.width) < Math.abs(prev - src.width) ? curr : prev;
      });
      options.inputtedWidth = src.width;
      options.width = nearestWidth;
    } else {
      throw new Error(`Missing \`width\` parameter for remote image ${options.src}`);
    }
  } else {
    if (!configuredWidths.includes(options.width)) {
      const nearestWidth = configuredWidths.reduce((prev, curr) => {
        return Math.abs(curr - options.width) < Math.abs(prev - options.width) ? curr : prev;
      });
      options.inputtedWidth = options.width;
      options.width = nearestWidth;
    }
  }
  if (options.quality && typeof options.quality === "string") {
    options.quality = options.quality in qualityTable ? qualityTable[options.quality] : void 0;
  }
  if (!options.quality) {
    options.quality = 100;
  }
  return options;
}

const service = {
  validateOptions: (options, serviceOptions) => sharedValidateOptions(options, serviceOptions.service.config, "production"),
  getHTMLAttributes(options) {
    const { inputtedWidth, ...props } = options;
    if (inputtedWidth) {
      props.width = inputtedWidth;
    }
    let targetWidth = props.width;
    let targetHeight = props.height;
    if (isESMImportedImage(props.src)) {
      const aspectRatio = props.src.width / props.src.height;
      if (targetHeight && !targetWidth) {
        targetWidth = Math.round(targetHeight * aspectRatio);
      } else if (targetWidth && !targetHeight) {
        targetHeight = Math.round(targetWidth / aspectRatio);
      } else if (!targetWidth && !targetHeight) {
        targetWidth = props.src.width;
        targetHeight = props.src.height;
      }
    }
    const { src, width, height, format, quality, ...attributes } = props;
    return {
      ...attributes,
      width: targetWidth,
      height: targetHeight,
      loading: attributes.loading ?? "lazy",
      decoding: attributes.decoding ?? "async"
    };
  },
  getURL(options) {
    const fileSrc = isESMImportedImage(options.src) ? removeLeadingForwardSlash(options.src.src) : options.src;
    const searchParams = new URLSearchParams();
    searchParams.append("url", fileSrc);
    options.width && searchParams.append("w", options.width.toString());
    options.quality && searchParams.append("q", options.quality.toString());
    return "/_vercel/image?" + searchParams;
  }
};
function removeLeadingForwardSlash(path) {
  return path.startsWith("/") ? path.substring(1) : path;
}
var build_service_default = service;

export { build_service_default as default };
