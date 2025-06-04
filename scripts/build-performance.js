#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const PERFORMANCE_LOG = path.join(__dirname, '..', 'build-performance.json');

function runBuild(command, label) {
  console.log(`\n🚀 Running ${label}...`);
  const startTime = Date.now();
  
  try {
    // Clean build directory first
    execSync('rm -rf .next', { stdio: 'inherit' });
    
    // Run the build
    execSync(command, { stdio: 'inherit' });
    
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    console.log(`✅ ${label} completed in ${(duration / 1000).toFixed(2)}s`);
    return { success: true, duration, timestamp: new Date().toISOString() };
  } catch (error) {
    console.error(`❌ ${label} failed:`, error.message);
    return { success: false, duration: 0, timestamp: new Date().toISOString(), error: error.message };
  }
}

function loadPerformanceHistory() {
  try {
    if (fs.existsSync(PERFORMANCE_LOG)) {
      return JSON.parse(fs.readFileSync(PERFORMANCE_LOG, 'utf8'));
    }
  } catch (error) {
    console.warn('Could not load performance history:', error.message);
  }
  return { builds: [] };
}

function savePerformanceHistory(data) {
  try {
    fs.writeFileSync(PERFORMANCE_LOG, JSON.stringify(data, null, 2));
  } catch (error) {
    console.warn('Could not save performance history:', error.message);
  }
}

function displayComparison(turbopackResult, webpackResult) {
  if (turbopackResult.success && webpackResult.success) {
    const improvement = ((webpackResult.duration - turbopackResult.duration) / webpackResult.duration) * 100;
    console.log(`\n📊 Performance Comparison:`);
    console.log(`   Turbopack: ${(turbopackResult.duration / 1000).toFixed(2)}s`);
    console.log(`   Webpack:   ${(webpackResult.duration / 1000).toFixed(2)}s`);
    
    if (improvement > 0) {
      console.log(`   🎉 Turbopack is ${improvement.toFixed(1)}% faster!`);
    } else {
      console.log(`   ⚠️  Webpack is ${Math.abs(improvement).toFixed(1)}% faster`);
    }
  }
}

async function main() {
  const args = process.argv.slice(2);
  const mode = args[0] || 'both';

  console.log('🔧 Teroka Digital Build Performance Monitor');
  console.log('==========================================');

  let turbopackResult, webpackResult;

  if (mode === 'turbo' || mode === 'both') {
    turbopackResult = runBuild('npm run build', 'Turbopack Build');
  }

  if (mode === 'webpack' || mode === 'both') {
    // First install a webpack fallback if needed
    webpackResult = runBuild('TURBOPACK=0 npm run build', 'Webpack Build');
  }

  // Save results
  const history = loadPerformanceHistory();
  const buildData = {
    timestamp: new Date().toISOString(),
    turbopack: turbopackResult,
    webpack: webpackResult,
  };

  history.builds.push(buildData);

  // Keep only last 10 builds
  if (history.builds.length > 10) {
    history.builds = history.builds.slice(-10);
  }

  savePerformanceHistory(history);

  // Display comparison
  if (turbopackResult && webpackResult) {
    displayComparison(turbopackResult, webpackResult);
  }

  console.log(`\n📝 Performance data saved to: ${PERFORMANCE_LOG}`);
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { runBuild, loadPerformanceHistory, savePerformanceHistory }; 