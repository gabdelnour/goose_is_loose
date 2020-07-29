import { MiddlewareOptions } from 'graphql-playground-html';
export default function lambdaPlayground(options: MiddlewareOptions): (_event: any, _lambdaContext: any, callback: any) => Promise<void>;
