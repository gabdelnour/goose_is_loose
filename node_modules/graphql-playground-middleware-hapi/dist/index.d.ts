import { Server, Plugin } from '@hapi/hapi';
import { MiddlewareOptions } from 'graphql-playground-html';
export interface Register {
    (server: Server, options: MiddlewareOptions): void;
}
declare const plugin: Plugin;
export default plugin;
