import { updateSystemInfo } from '@eeacms/volto-controlpanel/system';

const applyConfig = (config) => {
  const isServer = typeof __SERVER__ !== 'undefined' && __SERVER__;
  const runtimeEnv = isServer ? process.env : window.env;

  // Changelogs
  config.settings.changelogUrlPrefix =
    config.settings.changelogPrefix ||
    runtimeEnv?.RAZZLE_CHANGELOG_PREFIX ||
    'https://github.com/eea';

  config.settings.changelogUrlSuffix =
    config.settings.changelogSuffix ||
    runtimeEnv?.RAZZLE_CHANGELOG_SUFFIX ||
    'releases';

  config.settings.frontendVersion =
    config.settings.frontendVersion ||
    runtimeEnv?.RAZZLE_FRONTEND_VERSION ||
    '';

  config.settings.frontendName =
    config.settings.frontendName ||
    runtimeEnv?.RAZZLE_FRONTEND_NAME ||
    '';

  config.settings.backendVersion =
    config.settings.backendVersion || runtimeEnv?.RAZZLE_BACKEND_VERSION || '';

  config.settings.backendName =
    config.settings.backendName ||
    runtimeEnv?.RAZZLE_BACKEND_NAME ||
    'plone-backend';

  // Persist FRONTEND_VERSION on backend registry
  if (isServer) {
    updateSystemInfo(config);
  }

  return config;
};

export default applyConfig;
