# [www.beh.uk](https://www.beh.uk)

Benjamin Howe's personal website, deployed to Cloudflare Pages. Originally generated from [the blank Jekyll template](https://github.com/BenjaminEHowe/jekyll-blank).

## Installation

Clone this repository in a convenient location.

To run Jekyll locally without Docker [install Ruby and Jekyll](https://jekyllrb.com/docs/step-by-step/01-setup/). Wrangler requires [Node.js](https://nodejs.org/) as unfortunately [the maintainers of Wrangler have decided against having an official container image for Wrangler](https://github.com/cloudflare/workers-sdk/issues/1316#issuecomment-1658608450).

## Usage

The easiest way to run Jekyll is using Docker:

- Windows (cmd): `docker run -it --rm -v %cd%:/app -w /app -p 127.0.0.1:4000:4000 ruby:3.3.1 sh -c "bundle install && bundle exec jekyll serve --force_polling -H 0.0.0.0"`
- macOS & Linux (bash): `docker run -it --rm -v "$PWD":/app -w /app -p 127.0.0.1:4000:4000 ruby:3.3.1 sh -c "bundle install && bundle exec jekyll serve -H 0.0.0.0"`

### Using Wrangler

To test some of the dynamic aspects of the website (e.g. [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/functions/)), it is necessary to use [Wrangler](https://developers.cloudflare.com/workers/wrangler/).

To set up a local database:

`npx wrangler@latest d1 execute beh-uk-forms --local --file=./sql/beh-uk-forms-schema.sql`

(note that Windows users will need to convert the line endings in the SQL file to `LF` to work around [a bug in `workerd`](https://github.com/cloudflare/workerd/issues/1300))

Run the appropriate commend for Jekyll (see above) _without_ the port forward and listen hostname, then also run:

`npx wrangler@latest pages dev --port 4000 _site`

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
