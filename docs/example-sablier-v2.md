---
id: example-sablier-v2
title: Sablier V2
sidebar_label: Sablier V2
slug: /example-sablier-v2
---

# Sablier V2 indexer

This [repo](https://github.com/enviodev/sablier-v2) contains an example Envio indexer built using TypeScript for [Sablier V2](https://sablier.com/), which is deployed on 9 different blockchains.

Sablier V2 is a protocol designed for on-chain money streaming and token distribution. DAOs and businesses use Sablier for vesting, payroll, airdrops, and more.

The majority of the implementation is complete and repo is undergoing final development stage.

## Steps to run the indexer

1. Clone the [repo](https://github.com/enviodev/sablier-v2)
1. Install any other pre-requisite packages for Envio listed [here](https://docs.envio.dev/docs/installation#prerequisites)
1. Install Envio via `npm i -g envio`
1. Generate indexing code via `envio codegen`
1. Run the indexer via `envio dev` (make sure you have Docker running)
1. Stop the indexer via `envio stop`
