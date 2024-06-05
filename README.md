# Perugia View

<picture>
	<img alt="Image of a cat viewing an Umbrian hillside." src="https://github.com/Jkwok0714/Imageview/blob/master/src/src/assets/DallE_Cat.png?raw=true">
</picture>

<details>
<summary>Background</summary>

## Background

Reviving the "React-ImageView" to experiment with packaging with the following goals:

- File system integration
- Working with menus and "native" bits
- Packaging
- A tool for family to use that doesn't blow up every 5 images

Currently, due to differing options available to the native side of the app, only supporting **MacOS** builds.

### Why another d^mn slideshow viewer?

Pretty silly and not that complicated of a project, right?

Being in a family that loves travel and photography, after family trips we always gathered around a screen to look at what photos we've captured. However, from proprietary photo viewers to third-party freeware solutions, the slideshow viewers would always run into problems; whether it's crashing arbitrarily or being unable to show certain file details while viewing.

Under no fantasy that this non-native solution built in spare time would surpass any native options out there, but 🤷‍♂️ it's something to tinker with.

### Project goals

Outside of experimenting with some of the items listed under general background, some of the product goals include:

- Simple to use: just drag a selection in and go
- Configure basic aspects of the viewing experience
- Being able to export a list of favorites; useful for saving photos to extract later

</details>

<details>
<summary>Set-up and build processes</summary>

## Setup + Build

Local development:

```bash
cd src
npm i
npm run dev
```

Will build with vite and with tauri:

```bash
npm run test-build
```

## Stack

Leverages some of these libraries:

- [Chakra](https://v2.chakra-ui.com/docs/components)
- [Tauri](https://tauri.app/v1/guides/)

Tauri was integrated after the fact. For more information on the Rust components, see [the docs](https://tauri.app/v1/guides/getting-started/setup/integrate).

</details>
