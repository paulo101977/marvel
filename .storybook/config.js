import { configure } from '@storybook/react';

import '../src/stylus/global-styles';

import "bootstrap/dist/css/bootstrap.min.css";

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("../src/", true, /stories\.jsx?$/));
}

configure(loadStories, module);