# [www.beh.uk](https://www.beh.uk)

Benjamin Howe's personal website, deployed to Cloudflare Pages. Originally generated from [the blank Jekyll template](https://github.com/BenjaminEHowe/jekyll-blank).

## Installation

Clone this repository in a convenient location.

To run locally without Docker [install Ruby and Jekyll](https://jekyllrb.com/docs/step-by-step/01-setup/).

## Usage

Install gems using `bundle install` and then run `bundle exec jekyll serve` and navigate to http://127.0.0.1:4000.

### Using Docker

- Windows (cmd): `docker run -it --rm -v %cd%:/app -w /app -p 127.0.0.1:4000:4000 ruby:3.3.1 sh -c "bundle install && bundle exec jekyll serve --force_polling -H 0.0.0.0"`
- macOS & Linux (bash): `docker run -it --rm -v "$PWD":/app -w /app -p 127.0.0.1:4000:4000 ruby:3.3.1 sh -c "bundle install && bundle exec jekyll serve -H 0.0.0.0"`

## Tests

Sadly there aren't any, yet, at least. I plan to fix this!

## Contributing

I don't expect anyone else to contribute to my website, but if you'd like to then feel free to submit a pull request.

## License & Credits

The code powering my website is licensed under the [MIT license](https://choosealicense.com/licenses/mit/). You can do whatever you want with the code, provided you include the "MIT License" copyright notice in the LICENSES file. That being said, please don't copy my website design verbatim -- while I can't legally prevent you from doing so, it's bad taste (changing the image and colour scheme is easy!).

The words within this repository (contained within `*.md` files) are licesed under the [Creative Commons Attribution-ShareAlike 4.0 International license ("CC BY-SA")](https://creativecommons.org/licenses/by-sa/4.0/). You can share, copy, or adapt the pages and blog posts, provided you attribute and (if you remix, transform, or build upon the them, you must distribute your contributions under the CC BY-SA license). You may not prevent others (using legal, technical, or any other methods) from doing anything the license permits.

Please assume all other files aren't licensed for re-use. If you'd like to re-use any other files, please [contact me via my website](https://www.beh.uk/contact). Thank you!

Credits:
* ThinkPad background image from [Pixabay](https://pixabay.com/en/laptop-keyboard-notebook-trackpoint-1864126/), obtained prior to the [Pixabay license change](https://www.24zero.net/pixabay-license-change-no-longer-a-cc0-license/).
* Social icons from [Font Awesome](https://fontawesome.com/).
