# BitGen

Cli Utility to quickly start new projects.

## Usage

To get started using BitGen just use the following command structure below:

```sh
$> npx bitgen [options] <path>
```

### Options

#### -r, --react

Using either of these flags will allow you to create a new React app.

```sh
$> npx bitgen -r <path>
```

or

```sh
$> npx bitgen --react <path>
```

#### -s, --svelte

Using either of these flags will allow you to create a new Svelte app.

```sh
$> npx bitgen -s <path>
```

or

```sh
$> npx bitgen --svelte <path>
```

#### -v, --vue

Using either of these flags will allow you to create a new Vue app.

```sh
$> npx bitgen -v <path>
```

or

```sh
$> npx bitgen --vue <path>
```

#### -a, --api

Using either of these flags will allow you to create a new RESTful API.

```sh
$> npx bitgen -a <path>
```

or

```sh
$> npx bitgen --api <path>
```

#### -V, --version

Show the current version of the cli utility

```sh
$> npx bitgen -V
```

or

```sh
$> npx bitgen --version
```

#### -h, --help

Show the help menu

```sh
$> npx bitgen -h
```

or

```sh
$> npx bitgen --help
```

### Path

This is the path the cli utility will output to. You can use either a relative path like so:

```sh
./example
```

or you can use an absolute path:

```sh
C:\Users\<username>\Desktop\example
```

You can also just provide a name and the cli utility will output a new folder with that name to the directory where you ran the command from.

**example:**

```sh
~/Development> npx bitgen -r new-react-app
```

This will create a new project called _new-react-app_ in the Development directory.
