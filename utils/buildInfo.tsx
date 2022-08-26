import childProcess from 'child_process';

// Inspired by: https://www.aleksandrhovhannisyan.com/blog/eleventy-build-info/

export function getBuildInfo() {
  const latestGitCommitHash = childProcess.execSync('git rev-parse --short HEAD').toString().trim();

  const now = new Date();
  const timeZone = 'UTC';
  const buildTime = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone
  }).format(now);

  return {
    hash: latestGitCommitHash,
    time: {
      raw: now.toISOString(),
      formatted: `${buildTime} ${timeZone}`
    }
  };
}
