# nostr-identifying

This is a [Express.js](https://expressjs.com/de/) App to serve a /.well-known-endpoint which fullfill the [NIP-05](https://github.com/nostr-protocol/nips/blob/master/05.md) standard for [Nostr](https://nostr.com/).

## Getting started

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/n0vedad/nostr-identifying.git
   cd nostr-identifying
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

### Running the application

#### Development mode

To run the application in development mode with hot-reloading:

```sh
npm run dev
```

Open your browser and navigate to [http://localhost:3000/.well-known/nostr.json](http://localhost:3000/.well-known/nostr.json) to see the results.

#### Production mode

To build and run the application in production mode:

1. Build the application:

   ```sh
   npm run build
   ```

2. Start the application:

   ```sh
   npm start
   ```

Once you get your changes done simply serve this app with Node.js or e.g. the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## Project structure

### `src/` 

Contains the TypeScript source files

### `public/.well-known`

Contains the /.well-known-endpoint for verifying.

## Verify your own unique Nostr ID

Edit [nostr.json](/public/.well-known/nostr.json). The file currently looks like this

```json
{"names": {"_": "5f76fb9ebe892276650aa9ba696afe3218f2f1120d0d0abdbb9141a5e627a71e"}}
```

A Nostr ID splits into a `<local-part>` and `<domain>` and a client use these values to make a GET request to https://`<domain>`/.well-known/nostr.json?name=<local-part>. 

If you don't want to have a `<local-part>` you can leave a `_` like I did. The second part at the [nostr.json](/public/.well-known/nostr.json) is just your public key. 
Replace that with your own key

## License

This project is licensed under the MIT License. See the [LICENSE](/LICENSE) for details.
