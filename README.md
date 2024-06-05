# Perugia View

<picture>
	<img alt="Image of a cat viewing an Umbrian hillside." src="https://github.com/Jkwok0714/Imageview/blob/master/src/src/assets/DallE_Cat.png?raw=true">
</picture>

## Background

Reviving the React-ImageView to experiment with packaging with the following goals:

- File system integration
- Working with menus and "native" bits
- Packaging
- A tool for family to use that doesn't blow up every 5 images

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

To actuall build for "production":

```bash
npm run tauri build
```

## Stack

Leverages some of these libraries:

- [Chakra](https://v2.chakra-ui.com/docs/components)
- [Tauri](https://tauri.app/v1/guides/)
- [Tauri config](https://tauri.app/v1/api/config#configuration-structure)

Tauri was integrated after the fact. For more information on the Rust components, see [the docs](https://tauri.app/v1/guides/getting-started/setup/integrate).

</details>
