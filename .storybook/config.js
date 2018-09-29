import { configure } from '@storybook/react';

import "bootstrap/dist/css/bootstrap.min.css"

import '../src/stylus/global-styles';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("../src/", true, /stories\.jsx?$/));
}

configure(loadStories, module);