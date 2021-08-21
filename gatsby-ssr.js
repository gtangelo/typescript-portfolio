const React = require('react');
// source: https://dev.to/bartosjiri/creating-a-preloader-for-gatsby-site-3kh1
exports.onRenderBody = ({
  setPreBodyComponents,
  setBodyAttributes,
  setHeadComponents,
  setPostBodyComponents,
}) => {
  setPreBodyComponents([
    <div id="preloader">
      <div id="box" style={{ height: '100px' }} />
      <div className="preloader_animation"></div>
    </div>,
  ]);
  setBodyAttributes({
    className: 'preloader_active',
  });
  setHeadComponents([
    <link as="script" rel="preload" href="/scripts/preloader.js" />,
    <noscript>
      <link rel="stylesheet" href="/styles/noscript.css" />
    </noscript>,
  ]);
  // ...
  setPostBodyComponents([<script src="/scripts/preloader.js" />]);
};
