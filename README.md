# drivven-assets

Static assets for drivven.ca.

- `tokens.css`: site-wide design tokens (radii, type sizes, colours, spacing). Rule order matters.

The site loads this file through jsDelivr, pinned to one exact commit and checked with an integrity hash.
Editing the file here does not change the site. To ship a change: commit, then update the commit id
and the `sha384` hash in the Webflow `dvload` script, and publish.
