import React from 'react';

const SettingsIcon = () => (
  <svg width="71" height="71" viewBox="0 0 71 71"
fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<path d="M10.5 13H10.2147L10.0695 13.2456L3.56954 24.2456L3.41923 24.5L3.56954 24.7544L9.90303 35.4726L3.59466 44.2073L3.41417 44.4572L3.55639 44.7307L10.0564 57.2307L10.1964 57.5H10.5H22.2674L30.1175 66.8221L30.2674 67H30.5H43.5H43.7883L43.9327 66.7505L49.3182 57.4484L59.5936 55.4912L59.8095 55.45L59.9251 55.2632L66.4251 44.7632L66.6013 44.4786L66.4053 44.2073L60.097 35.4726L66.4305 24.7544L66.5808 24.5L66.4305 24.2456L59.9305 13.2456L59.7853 13H59.5H49.2883L43.9327 3.74948L43.7883 3.5H43.5H27.5H27.1981L27.0575 3.76713L22.1981 13H10.5Z" fill="#FDF851" stroke="#FDF851"/>
<rect width="71" height="71" fill="url(#settingsIcon)"/>
<defs>
<pattern id="settingsIcon" patternContentUnits="objectBoundingBox" width="1"
height="1">
<use xlinkHref="#image0_16_220" transform="scale(0.00195312)"/>
</pattern>
<image id="image0_16_220" width="512" height="512"
xlinkHref="data:image/png;base64,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"/>
</defs>
</svg>

  );

export default SettingsIcon;