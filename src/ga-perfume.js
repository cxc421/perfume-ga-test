import ReactGA from "react-ga";
import Perfume from "perfume.js";

const analyticsTracker = ({ metricName, data, duration }) => {
  // Metricts which want to collected
  const METRICS = ["cls", "fid", "lcp"];

  if (METRICS.includes(metricName)) {
    const duration = Math.round(Number(data));

    ReactGA.timing({
      category: "Performance by Perfume (Timing)",
      variable: metricName,
      value: duration, //ms
    });
  }
};

new Perfume({
  firstPaint: true,
  firstContentfulPaint: true,
  firstInputDelay: true,
  timeToInteractive: true,
  logging: true,
  googleAnalytics: {
    enable: true,
    timingVar: "userId",
  },
  analyticsTracker,
});

function initGA() {
  ReactGA.initialize("G-JFQZZMZWJV", {
    gaOptions: {
      userId: "Chris",
    },
  });
}

export { initGA };
