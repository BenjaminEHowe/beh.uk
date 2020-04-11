# Blank Jekyll Site [![Netlify Status](https://api.netlify.com/api/v1/badges/958ce273-2362-470a-9302-43c8a382f9f3/deploy-status)](https://app.netlify.com/sites/jekyll-blank/deploys)

This repository contains an (almost) completely blank [Jekyll](https://jekyllrb.com/) website, which has been deployed to [Netlify](https://www.netlify.com/) (https://jekyll-blank.beh.uk/) and [GitHub Pages](https://pages.github.com/) (https://benjaminehowe.github.io/jekyll-blank/). It's is mostly for my own reference, but I've made it public in case anyone else on the internet finds it useful! GitHub allows you to easily [create a new repository using this one as a template](https://github.com/BenjaminEHowe/jekyll-blank/generate).

## What's the point?

The first time I created a Jekyll site I used the command `jekyll new myblog`, which gave me a basic blog-style website using the [minima theme](https://github.com/jekyll/minima). That's great if you want to create a blog, but if not there's some work to do (and having the [gem-based theme](https://jekyllrb.com/docs/themes/#understanding-gem-based-themes) code hidden makes it harder to see what's going on). I then tried `jekyll new myblog --blank`, but even with [the enhanced `--blank` scafolding](https://github.com/jekyll/jekyll/pull/7310) it wasn't as quick to get started as I'd like; I still needed to set up Git, create a [Gemfile](https://bundler.io/gemfile.html), set up Netlify, etc. This repository streamlines this process, as well as acting as documentation for myself!

## I've created a new repository - what needs changing?

Assuming you've already [installed Ruby and Jekyll](https://jekyllrb.com/docs/step-by-step/01-setup/):

- [ ] update `_config.yml`
- [ ] double check my `netlify.toml` defaults make sense for you (or remove `netlify.toml` completely if you're not using Netlify)
- [ ] And finally, change this README file

Once you've done this, you're good to go, and you can start [customising the liquid](https://jekyllrb.com/docs/step-by-step/02-liquid/) behind the (minimal) theme. You can preview your Jekyll site locally by running `bundle exec jekyll serve` (and navigating to http://127.0.0.1:4000), and then commit your changes to git.
