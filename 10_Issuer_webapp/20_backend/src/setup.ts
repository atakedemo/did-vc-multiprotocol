// Core interfaces
import {
    createAgent,
    IDIDManager,
    IResolver,
    IDataStore,
    IDataStoreORM,
    IKeyManager,
    ICredentialPlugin,
  } from '@veramo/core'
  
  // Core identity manager plugin
  import { DIDManager } from '@veramo/did-manager'
  
  // Ethr did identity provider
  import { EthrDIDProvider } from '@veramo/did-provider-ethr'
  
  // Core key manager plugin
  import { KeyManager } from '@veramo/key-manager'
  
  // Custom key management system for RN
  import { KeyManagementSystem, SecretBox } from '@veramo/kms-local'
  
  // W3C Verifiable Credential plugin
  import { CredentialPlugin } from '@veramo/credential-w3c'
  
  // Custom resolvers
  import { DIDResolverPlugin } from '@veramo/did-resolver'
  import { Resolver } from 'did-resolver'
  import { getResolver as ethrDidResolver } from 'ethr-did-resolver'
  import { getResolver as webDidResolver } from 'web-did-resolver'
  
  // Storage plugin using TypeOrm
  import { Entities, KeyStore, DIDStore, PrivateKeyStore, migrations } from '@veramo/data-store'
  
  // TypeORM is installed with `@veramo/data-store`
  import { DataSource } from 'typeorm'