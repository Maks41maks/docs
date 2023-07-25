---
id: greeter-tutorial
title: Indexing Greeter contract using Envio
sidebar_label: Greeter Tutorial
slug: /greeter-tutorial
---


This tutorial will take you through a step by step guide to indexing a Greeter smart contract that is deployed on Polygon using Envio. 

<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

<!-- - [Background](#background)
  * [Greeter contract](#greeter-contract)
  * [Hardhat](#hardhat)
  * [Envio](#envio)
- [Pre-requisites](#pre-requisites)
  * [Environment tooling](#environment-tooling)
  * [Install Envio](#install-envio)
- [Step by step instructions](#step-by-step-instructions)
  * [1. Create the project folders](#1-create-the-project-folders)
  * [2. Initialize the indexer](#2-initialize-the-indexer)
  * [3. Run our docker containers for local development](#3-run-our-docker-containers-for-local-development)
  * [4. Clone the contracts repository](#4-clone-the-contracts-repository)
  * [5. Deploy the contracts](#5-deploy-the-contracts)
  * [6. Start indexing!](#6-start-indexing)
  * [A couple extras](#a-couple-extras) -->

<!-- TOC end -->

## Background

### [Greeter contract](https://github.com/Float-Capital/hardhat-template)

The Greeter contract is a very simple smart contract that allows user to write a greeting message on the blockchain.

### [Envio](https://envio.dev)

Envio is a framework for developing a backend to index and aggregate blockchain data into a graphQL query-able database. 

## Prerequisites

### Environment tooling

1. [<ins>Node.js</ins>](https://nodejs.org/en/download/current) we recommend using something like [fnm](https://github.com/Schniz/fnm) or [nvm](https://github.com/nvm-sh/nvm) to install Node
1. [<ins>pnpm</ins>](https://pnpm.io/installation)
1. [<ins>Docker Desktop</ins>](https://www.docker.com/products/docker-desktop/)

### Install Envio
```bash
npm i -g envio
```

## Step by step instructions

### Initialize the project 

Initialize the project using the Greeter template.

Run
```bash
envio init
```

Choose `Greeter` when prompted to choose template.

```bash
? Which template would you like to use?
  "Blank"
> "Greeter"
  "Erc20"
[↑↓ to move, enter to select, type to filter]
```

Then choose a language of your choice for the event handlers.

```bash
? Which language would you like to use?
> "Javascript"
  "Typescript"
  "Rescript"
[↑↓ to move, enter to select, type to filter]
```

### Set up the local docker environment

> Dev note: 📢 make sure you have docker open

The following commands will start the docker and create databases for indexed data.

Run
```bash
envio local docker up
envio local db-migrate setup
```

### Generate the indexing files

After selecting the template and the language, the setup files will be ready to generate the indexing files.

Run
```bash
envio codegen
```

### Start the indexer

Once the setup and indexing files are in place, you are ready to run the indexer.

Run
```bash
envio start
```

The indexer will then start indexing the contract specified in the `config.yaml` file from the `start_block` specified.

### Write to contract on Polygonscan

Once the indexer is running, you can call functions on the Greeter contract that is deployed on Polygon.

Navigate to the contract on [Polygonscan](https://polygonscan.com/address/0x9D02A17dE4E68545d3a58D3a20BbBE0399E05c9c#writeContract) and call `setGreeting` function.

### View the indexed results

You can view the indexed results on a local Hasura server.

```bash
open http://localhost:8080
```

The hasura admin-secret is `testing` and the tables can be viewed in the `data` tab or queried from the playground