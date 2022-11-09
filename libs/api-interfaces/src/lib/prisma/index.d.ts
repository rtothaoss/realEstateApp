
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  createdAt: Date
  updatedAt: Date
  email: string
  hash: string
  name: string | null
}

/**
 * Model SavedSearch
 * 
 */
export type SavedSearch = {
  id: number
  createdAt: Date
  updatedAt: Date
  location: string
  userId: number
}

/**
 * Model SavedHome
 * 
 */
export type SavedHome = {
  id: number
  createdAt: Date
  updatedAt: Date
  price: number
  beds: number
  bath: number
  sqft: number
  address: string
  type: string
  yearBuilt: number
  heating: string
  cooling: string
  parking: string
  lot: number
  image: string
  propertyId: string
  userId: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.savedSearch`: Exposes CRUD operations for the **SavedSearch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedSearches
    * const savedSearches = await prisma.savedSearch.findMany()
    * ```
    */
  get savedSearch(): Prisma.SavedSearchDelegate<GlobalReject>;

  /**
   * `prisma.savedHome`: Exposes CRUD operations for the **SavedHome** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedHomes
    * const savedHomes = await prisma.savedHome.findMany()
    * ```
    */
  get savedHome(): Prisma.SavedHomeDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.1.1
   * Query Engine version: 8d8414deb360336e4698a65aa45a1fbaf1ce13d8
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    SavedSearch: 'SavedSearch',
    SavedHome: 'SavedHome'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    savedsearches: number
    savedhomes: number
  }

  export type UserCountOutputTypeSelect = {
    savedsearches?: boolean
    savedhomes?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    hash: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    hash: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    hash: number
    name: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    hash?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    hash?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    hash?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    email: string
    hash: string
    name: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    hash?: boolean
    name?: boolean
    savedsearches?: boolean | SavedSearchFindManyArgs
    savedhomes?: boolean | SavedHomeFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    savedsearches?: boolean | SavedSearchFindManyArgs
    savedhomes?: boolean | SavedHomeFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'savedsearches' ? Array < SavedSearchGetPayload<S['include'][P]>>  :
        P extends 'savedhomes' ? Array < SavedHomeGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'savedsearches' ? Array < SavedSearchGetPayload<S['select'][P]>>  :
        P extends 'savedhomes' ? Array < SavedHomeGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    savedsearches<T extends SavedSearchFindManyArgs = {}>(args?: Subset<T, SavedSearchFindManyArgs>): CheckSelect<T, PrismaPromise<Array<SavedSearch>>, PrismaPromise<Array<SavedSearchGetPayload<T>>>>;

    savedhomes<T extends SavedHomeFindManyArgs = {}>(args?: Subset<T, SavedHomeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<SavedHome>>, PrismaPromise<Array<SavedHomeGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model SavedSearch
   */


  export type AggregateSavedSearch = {
    _count: SavedSearchCountAggregateOutputType | null
    _avg: SavedSearchAvgAggregateOutputType | null
    _sum: SavedSearchSumAggregateOutputType | null
    _min: SavedSearchMinAggregateOutputType | null
    _max: SavedSearchMaxAggregateOutputType | null
  }

  export type SavedSearchAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SavedSearchSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SavedSearchMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    location: string | null
    userId: number | null
  }

  export type SavedSearchMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    location: string | null
    userId: number | null
  }

  export type SavedSearchCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    location: number
    userId: number
    _all: number
  }


  export type SavedSearchAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SavedSearchSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SavedSearchMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    location?: true
    userId?: true
  }

  export type SavedSearchMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    location?: true
    userId?: true
  }

  export type SavedSearchCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    location?: true
    userId?: true
    _all?: true
  }

  export type SavedSearchAggregateArgs = {
    /**
     * Filter which SavedSearch to aggregate.
     * 
    **/
    where?: SavedSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedSearches to fetch.
     * 
    **/
    orderBy?: Enumerable<SavedSearchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SavedSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedSearches from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedSearches.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedSearches
    **/
    _count?: true | SavedSearchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavedSearchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavedSearchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedSearchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedSearchMaxAggregateInputType
  }

  export type GetSavedSearchAggregateType<T extends SavedSearchAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedSearch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedSearch[P]>
      : GetScalarType<T[P], AggregateSavedSearch[P]>
  }




  export type SavedSearchGroupByArgs = {
    where?: SavedSearchWhereInput
    orderBy?: Enumerable<SavedSearchOrderByWithAggregationInput>
    by: Array<SavedSearchScalarFieldEnum>
    having?: SavedSearchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedSearchCountAggregateInputType | true
    _avg?: SavedSearchAvgAggregateInputType
    _sum?: SavedSearchSumAggregateInputType
    _min?: SavedSearchMinAggregateInputType
    _max?: SavedSearchMaxAggregateInputType
  }


  export type SavedSearchGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    location: string
    userId: number
    _count: SavedSearchCountAggregateOutputType | null
    _avg: SavedSearchAvgAggregateOutputType | null
    _sum: SavedSearchSumAggregateOutputType | null
    _min: SavedSearchMinAggregateOutputType | null
    _max: SavedSearchMaxAggregateOutputType | null
  }

  type GetSavedSearchGroupByPayload<T extends SavedSearchGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SavedSearchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedSearchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedSearchGroupByOutputType[P]>
            : GetScalarType<T[P], SavedSearchGroupByOutputType[P]>
        }
      >
    >


  export type SavedSearchSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean
    userId?: boolean
    user?: boolean | UserArgs
  }

  export type SavedSearchInclude = {
    user?: boolean | UserArgs
  }

  export type SavedSearchGetPayload<
    S extends boolean | null | undefined | SavedSearchArgs,
    U = keyof S
      > = S extends true
        ? SavedSearch
    : S extends undefined
    ? never
    : S extends SavedSearchArgs | SavedSearchFindManyArgs
    ?'include' extends U
    ? SavedSearch  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof SavedSearch ? SavedSearch[P] : never
  } 
    : SavedSearch
  : SavedSearch


  type SavedSearchCountArgs = Merge<
    Omit<SavedSearchFindManyArgs, 'select' | 'include'> & {
      select?: SavedSearchCountAggregateInputType | true
    }
  >

  export interface SavedSearchDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one SavedSearch that matches the filter.
     * @param {SavedSearchFindUniqueArgs} args - Arguments to find a SavedSearch
     * @example
     * // Get one SavedSearch
     * const savedSearch = await prisma.savedSearch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SavedSearchFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SavedSearchFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SavedSearch'> extends True ? CheckSelect<T, Prisma__SavedSearchClient<SavedSearch>, Prisma__SavedSearchClient<SavedSearchGetPayload<T>>> : CheckSelect<T, Prisma__SavedSearchClient<SavedSearch | null >, Prisma__SavedSearchClient<SavedSearchGetPayload<T> | null >>

    /**
     * Find the first SavedSearch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedSearchFindFirstArgs} args - Arguments to find a SavedSearch
     * @example
     * // Get one SavedSearch
     * const savedSearch = await prisma.savedSearch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SavedSearchFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SavedSearchFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SavedSearch'> extends True ? CheckSelect<T, Prisma__SavedSearchClient<SavedSearch>, Prisma__SavedSearchClient<SavedSearchGetPayload<T>>> : CheckSelect<T, Prisma__SavedSearchClient<SavedSearch | null >, Prisma__SavedSearchClient<SavedSearchGetPayload<T> | null >>

    /**
     * Find zero or more SavedSearches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedSearchFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedSearches
     * const savedSearches = await prisma.savedSearch.findMany()
     * 
     * // Get first 10 SavedSearches
     * const savedSearches = await prisma.savedSearch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedSearchWithIdOnly = await prisma.savedSearch.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SavedSearchFindManyArgs>(
      args?: SelectSubset<T, SavedSearchFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<SavedSearch>>, PrismaPromise<Array<SavedSearchGetPayload<T>>>>

    /**
     * Create a SavedSearch.
     * @param {SavedSearchCreateArgs} args - Arguments to create a SavedSearch.
     * @example
     * // Create one SavedSearch
     * const SavedSearch = await prisma.savedSearch.create({
     *   data: {
     *     // ... data to create a SavedSearch
     *   }
     * })
     * 
    **/
    create<T extends SavedSearchCreateArgs>(
      args: SelectSubset<T, SavedSearchCreateArgs>
    ): CheckSelect<T, Prisma__SavedSearchClient<SavedSearch>, Prisma__SavedSearchClient<SavedSearchGetPayload<T>>>

    /**
     * Create many SavedSearches.
     *     @param {SavedSearchCreateManyArgs} args - Arguments to create many SavedSearches.
     *     @example
     *     // Create many SavedSearches
     *     const savedSearch = await prisma.savedSearch.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SavedSearchCreateManyArgs>(
      args?: SelectSubset<T, SavedSearchCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a SavedSearch.
     * @param {SavedSearchDeleteArgs} args - Arguments to delete one SavedSearch.
     * @example
     * // Delete one SavedSearch
     * const SavedSearch = await prisma.savedSearch.delete({
     *   where: {
     *     // ... filter to delete one SavedSearch
     *   }
     * })
     * 
    **/
    delete<T extends SavedSearchDeleteArgs>(
      args: SelectSubset<T, SavedSearchDeleteArgs>
    ): CheckSelect<T, Prisma__SavedSearchClient<SavedSearch>, Prisma__SavedSearchClient<SavedSearchGetPayload<T>>>

    /**
     * Update one SavedSearch.
     * @param {SavedSearchUpdateArgs} args - Arguments to update one SavedSearch.
     * @example
     * // Update one SavedSearch
     * const savedSearch = await prisma.savedSearch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SavedSearchUpdateArgs>(
      args: SelectSubset<T, SavedSearchUpdateArgs>
    ): CheckSelect<T, Prisma__SavedSearchClient<SavedSearch>, Prisma__SavedSearchClient<SavedSearchGetPayload<T>>>

    /**
     * Delete zero or more SavedSearches.
     * @param {SavedSearchDeleteManyArgs} args - Arguments to filter SavedSearches to delete.
     * @example
     * // Delete a few SavedSearches
     * const { count } = await prisma.savedSearch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SavedSearchDeleteManyArgs>(
      args?: SelectSubset<T, SavedSearchDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedSearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedSearchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedSearches
     * const savedSearch = await prisma.savedSearch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SavedSearchUpdateManyArgs>(
      args: SelectSubset<T, SavedSearchUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one SavedSearch.
     * @param {SavedSearchUpsertArgs} args - Arguments to update or create a SavedSearch.
     * @example
     * // Update or create a SavedSearch
     * const savedSearch = await prisma.savedSearch.upsert({
     *   create: {
     *     // ... data to create a SavedSearch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedSearch we want to update
     *   }
     * })
    **/
    upsert<T extends SavedSearchUpsertArgs>(
      args: SelectSubset<T, SavedSearchUpsertArgs>
    ): CheckSelect<T, Prisma__SavedSearchClient<SavedSearch>, Prisma__SavedSearchClient<SavedSearchGetPayload<T>>>

    /**
     * Find one SavedSearch that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SavedSearchFindUniqueOrThrowArgs} args - Arguments to find a SavedSearch
     * @example
     * // Get one SavedSearch
     * const savedSearch = await prisma.savedSearch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SavedSearchFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SavedSearchFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SavedSearchClient<SavedSearch>, Prisma__SavedSearchClient<SavedSearchGetPayload<T>>>

    /**
     * Find the first SavedSearch that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedSearchFindFirstOrThrowArgs} args - Arguments to find a SavedSearch
     * @example
     * // Get one SavedSearch
     * const savedSearch = await prisma.savedSearch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SavedSearchFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SavedSearchFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SavedSearchClient<SavedSearch>, Prisma__SavedSearchClient<SavedSearchGetPayload<T>>>

    /**
     * Count the number of SavedSearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedSearchCountArgs} args - Arguments to filter SavedSearches to count.
     * @example
     * // Count the number of SavedSearches
     * const count = await prisma.savedSearch.count({
     *   where: {
     *     // ... the filter for the SavedSearches we want to count
     *   }
     * })
    **/
    count<T extends SavedSearchCountArgs>(
      args?: Subset<T, SavedSearchCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedSearchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedSearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedSearchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedSearchAggregateArgs>(args: Subset<T, SavedSearchAggregateArgs>): PrismaPromise<GetSavedSearchAggregateType<T>>

    /**
     * Group by SavedSearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedSearchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavedSearchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedSearchGroupByArgs['orderBy'] }
        : { orderBy?: SavedSearchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedSearchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedSearchGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedSearch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SavedSearchClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * SavedSearch base type for findUnique actions
   */
  export type SavedSearchFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SavedSearch
     * 
    **/
    select?: SavedSearchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedSearchInclude | null
    /**
     * Filter, which SavedSearch to fetch.
     * 
    **/
    where: SavedSearchWhereUniqueInput
  }

  /**
   * SavedSearch: findUnique
   */
  export interface SavedSearchFindUniqueArgs extends SavedSearchFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SavedSearch base type for findFirst actions
   */
  export type SavedSearchFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SavedSearch
     * 
    **/
    select?: SavedSearchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedSearchInclude | null
    /**
     * Filter, which SavedSearch to fetch.
     * 
    **/
    where?: SavedSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedSearches to fetch.
     * 
    **/
    orderBy?: Enumerable<SavedSearchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedSearches.
     * 
    **/
    cursor?: SavedSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedSearches from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedSearches.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedSearches.
     * 
    **/
    distinct?: Enumerable<SavedSearchScalarFieldEnum>
  }

  /**
   * SavedSearch: findFirst
   */
  export interface SavedSearchFindFirstArgs extends SavedSearchFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SavedSearch findMany
   */
  export type SavedSearchFindManyArgs = {
    /**
     * Select specific fields to fetch from the SavedSearch
     * 
    **/
    select?: SavedSearchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedSearchInclude | null
    /**
     * Filter, which SavedSearches to fetch.
     * 
    **/
    where?: SavedSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedSearches to fetch.
     * 
    **/
    orderBy?: Enumerable<SavedSearchOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedSearches.
     * 
    **/
    cursor?: SavedSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedSearches from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedSearches.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SavedSearchScalarFieldEnum>
  }


  /**
   * SavedSearch create
   */
  export type SavedSearchCreateArgs = {
    /**
     * Select specific fields to fetch from the SavedSearch
     * 
    **/
    select?: SavedSearchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedSearchInclude | null
    /**
     * The data needed to create a SavedSearch.
     * 
    **/
    data: XOR<SavedSearchCreateInput, SavedSearchUncheckedCreateInput>
  }


  /**
   * SavedSearch createMany
   */
  export type SavedSearchCreateManyArgs = {
    /**
     * The data used to create many SavedSearches.
     * 
    **/
    data: Enumerable<SavedSearchCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SavedSearch update
   */
  export type SavedSearchUpdateArgs = {
    /**
     * Select specific fields to fetch from the SavedSearch
     * 
    **/
    select?: SavedSearchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedSearchInclude | null
    /**
     * The data needed to update a SavedSearch.
     * 
    **/
    data: XOR<SavedSearchUpdateInput, SavedSearchUncheckedUpdateInput>
    /**
     * Choose, which SavedSearch to update.
     * 
    **/
    where: SavedSearchWhereUniqueInput
  }


  /**
   * SavedSearch updateMany
   */
  export type SavedSearchUpdateManyArgs = {
    /**
     * The data used to update SavedSearches.
     * 
    **/
    data: XOR<SavedSearchUpdateManyMutationInput, SavedSearchUncheckedUpdateManyInput>
    /**
     * Filter which SavedSearches to update
     * 
    **/
    where?: SavedSearchWhereInput
  }


  /**
   * SavedSearch upsert
   */
  export type SavedSearchUpsertArgs = {
    /**
     * Select specific fields to fetch from the SavedSearch
     * 
    **/
    select?: SavedSearchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedSearchInclude | null
    /**
     * The filter to search for the SavedSearch to update in case it exists.
     * 
    **/
    where: SavedSearchWhereUniqueInput
    /**
     * In case the SavedSearch found by the `where` argument doesn't exist, create a new SavedSearch with this data.
     * 
    **/
    create: XOR<SavedSearchCreateInput, SavedSearchUncheckedCreateInput>
    /**
     * In case the SavedSearch was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SavedSearchUpdateInput, SavedSearchUncheckedUpdateInput>
  }


  /**
   * SavedSearch delete
   */
  export type SavedSearchDeleteArgs = {
    /**
     * Select specific fields to fetch from the SavedSearch
     * 
    **/
    select?: SavedSearchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedSearchInclude | null
    /**
     * Filter which SavedSearch to delete.
     * 
    **/
    where: SavedSearchWhereUniqueInput
  }


  /**
   * SavedSearch deleteMany
   */
  export type SavedSearchDeleteManyArgs = {
    /**
     * Filter which SavedSearches to delete
     * 
    **/
    where?: SavedSearchWhereInput
  }


  /**
   * SavedSearch: findUniqueOrThrow
   */
  export type SavedSearchFindUniqueOrThrowArgs = SavedSearchFindUniqueArgsBase
      

  /**
   * SavedSearch: findFirstOrThrow
   */
  export type SavedSearchFindFirstOrThrowArgs = SavedSearchFindFirstArgsBase
      

  /**
   * SavedSearch without action
   */
  export type SavedSearchArgs = {
    /**
     * Select specific fields to fetch from the SavedSearch
     * 
    **/
    select?: SavedSearchSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedSearchInclude | null
  }



  /**
   * Model SavedHome
   */


  export type AggregateSavedHome = {
    _count: SavedHomeCountAggregateOutputType | null
    _avg: SavedHomeAvgAggregateOutputType | null
    _sum: SavedHomeSumAggregateOutputType | null
    _min: SavedHomeMinAggregateOutputType | null
    _max: SavedHomeMaxAggregateOutputType | null
  }

  export type SavedHomeAvgAggregateOutputType = {
    id: number | null
    price: number | null
    beds: number | null
    bath: number | null
    sqft: number | null
    yearBuilt: number | null
    lot: number | null
    userId: number | null
  }

  export type SavedHomeSumAggregateOutputType = {
    id: number | null
    price: number | null
    beds: number | null
    bath: number | null
    sqft: number | null
    yearBuilt: number | null
    lot: number | null
    userId: number | null
  }

  export type SavedHomeMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    price: number | null
    beds: number | null
    bath: number | null
    sqft: number | null
    address: string | null
    type: string | null
    yearBuilt: number | null
    heating: string | null
    cooling: string | null
    parking: string | null
    lot: number | null
    image: string | null
    propertyId: string | null
    userId: number | null
  }

  export type SavedHomeMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    price: number | null
    beds: number | null
    bath: number | null
    sqft: number | null
    address: string | null
    type: string | null
    yearBuilt: number | null
    heating: string | null
    cooling: string | null
    parking: string | null
    lot: number | null
    image: string | null
    propertyId: string | null
    userId: number | null
  }

  export type SavedHomeCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    price: number
    beds: number
    bath: number
    sqft: number
    address: number
    type: number
    yearBuilt: number
    heating: number
    cooling: number
    parking: number
    lot: number
    image: number
    propertyId: number
    userId: number
    _all: number
  }


  export type SavedHomeAvgAggregateInputType = {
    id?: true
    price?: true
    beds?: true
    bath?: true
    sqft?: true
    yearBuilt?: true
    lot?: true
    userId?: true
  }

  export type SavedHomeSumAggregateInputType = {
    id?: true
    price?: true
    beds?: true
    bath?: true
    sqft?: true
    yearBuilt?: true
    lot?: true
    userId?: true
  }

  export type SavedHomeMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    price?: true
    beds?: true
    bath?: true
    sqft?: true
    address?: true
    type?: true
    yearBuilt?: true
    heating?: true
    cooling?: true
    parking?: true
    lot?: true
    image?: true
    propertyId?: true
    userId?: true
  }

  export type SavedHomeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    price?: true
    beds?: true
    bath?: true
    sqft?: true
    address?: true
    type?: true
    yearBuilt?: true
    heating?: true
    cooling?: true
    parking?: true
    lot?: true
    image?: true
    propertyId?: true
    userId?: true
  }

  export type SavedHomeCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    price?: true
    beds?: true
    bath?: true
    sqft?: true
    address?: true
    type?: true
    yearBuilt?: true
    heating?: true
    cooling?: true
    parking?: true
    lot?: true
    image?: true
    propertyId?: true
    userId?: true
    _all?: true
  }

  export type SavedHomeAggregateArgs = {
    /**
     * Filter which SavedHome to aggregate.
     * 
    **/
    where?: SavedHomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedHomes to fetch.
     * 
    **/
    orderBy?: Enumerable<SavedHomeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SavedHomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedHomes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedHomes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedHomes
    **/
    _count?: true | SavedHomeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavedHomeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavedHomeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedHomeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedHomeMaxAggregateInputType
  }

  export type GetSavedHomeAggregateType<T extends SavedHomeAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedHome]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedHome[P]>
      : GetScalarType<T[P], AggregateSavedHome[P]>
  }




  export type SavedHomeGroupByArgs = {
    where?: SavedHomeWhereInput
    orderBy?: Enumerable<SavedHomeOrderByWithAggregationInput>
    by: Array<SavedHomeScalarFieldEnum>
    having?: SavedHomeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedHomeCountAggregateInputType | true
    _avg?: SavedHomeAvgAggregateInputType
    _sum?: SavedHomeSumAggregateInputType
    _min?: SavedHomeMinAggregateInputType
    _max?: SavedHomeMaxAggregateInputType
  }


  export type SavedHomeGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    price: number
    beds: number
    bath: number
    sqft: number
    address: string
    type: string
    yearBuilt: number
    heating: string
    cooling: string
    parking: string
    lot: number
    image: string
    propertyId: string
    userId: number
    _count: SavedHomeCountAggregateOutputType | null
    _avg: SavedHomeAvgAggregateOutputType | null
    _sum: SavedHomeSumAggregateOutputType | null
    _min: SavedHomeMinAggregateOutputType | null
    _max: SavedHomeMaxAggregateOutputType | null
  }

  type GetSavedHomeGroupByPayload<T extends SavedHomeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SavedHomeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedHomeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedHomeGroupByOutputType[P]>
            : GetScalarType<T[P], SavedHomeGroupByOutputType[P]>
        }
      >
    >


  export type SavedHomeSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    price?: boolean
    beds?: boolean
    bath?: boolean
    sqft?: boolean
    address?: boolean
    type?: boolean
    yearBuilt?: boolean
    heating?: boolean
    cooling?: boolean
    parking?: boolean
    lot?: boolean
    image?: boolean
    propertyId?: boolean
    userId?: boolean
    user?: boolean | UserArgs
  }

  export type SavedHomeInclude = {
    user?: boolean | UserArgs
  }

  export type SavedHomeGetPayload<
    S extends boolean | null | undefined | SavedHomeArgs,
    U = keyof S
      > = S extends true
        ? SavedHome
    : S extends undefined
    ? never
    : S extends SavedHomeArgs | SavedHomeFindManyArgs
    ?'include' extends U
    ? SavedHome  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof SavedHome ? SavedHome[P] : never
  } 
    : SavedHome
  : SavedHome


  type SavedHomeCountArgs = Merge<
    Omit<SavedHomeFindManyArgs, 'select' | 'include'> & {
      select?: SavedHomeCountAggregateInputType | true
    }
  >

  export interface SavedHomeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one SavedHome that matches the filter.
     * @param {SavedHomeFindUniqueArgs} args - Arguments to find a SavedHome
     * @example
     * // Get one SavedHome
     * const savedHome = await prisma.savedHome.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SavedHomeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SavedHomeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SavedHome'> extends True ? CheckSelect<T, Prisma__SavedHomeClient<SavedHome>, Prisma__SavedHomeClient<SavedHomeGetPayload<T>>> : CheckSelect<T, Prisma__SavedHomeClient<SavedHome | null >, Prisma__SavedHomeClient<SavedHomeGetPayload<T> | null >>

    /**
     * Find the first SavedHome that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedHomeFindFirstArgs} args - Arguments to find a SavedHome
     * @example
     * // Get one SavedHome
     * const savedHome = await prisma.savedHome.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SavedHomeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SavedHomeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SavedHome'> extends True ? CheckSelect<T, Prisma__SavedHomeClient<SavedHome>, Prisma__SavedHomeClient<SavedHomeGetPayload<T>>> : CheckSelect<T, Prisma__SavedHomeClient<SavedHome | null >, Prisma__SavedHomeClient<SavedHomeGetPayload<T> | null >>

    /**
     * Find zero or more SavedHomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedHomeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedHomes
     * const savedHomes = await prisma.savedHome.findMany()
     * 
     * // Get first 10 SavedHomes
     * const savedHomes = await prisma.savedHome.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedHomeWithIdOnly = await prisma.savedHome.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SavedHomeFindManyArgs>(
      args?: SelectSubset<T, SavedHomeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<SavedHome>>, PrismaPromise<Array<SavedHomeGetPayload<T>>>>

    /**
     * Create a SavedHome.
     * @param {SavedHomeCreateArgs} args - Arguments to create a SavedHome.
     * @example
     * // Create one SavedHome
     * const SavedHome = await prisma.savedHome.create({
     *   data: {
     *     // ... data to create a SavedHome
     *   }
     * })
     * 
    **/
    create<T extends SavedHomeCreateArgs>(
      args: SelectSubset<T, SavedHomeCreateArgs>
    ): CheckSelect<T, Prisma__SavedHomeClient<SavedHome>, Prisma__SavedHomeClient<SavedHomeGetPayload<T>>>

    /**
     * Create many SavedHomes.
     *     @param {SavedHomeCreateManyArgs} args - Arguments to create many SavedHomes.
     *     @example
     *     // Create many SavedHomes
     *     const savedHome = await prisma.savedHome.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SavedHomeCreateManyArgs>(
      args?: SelectSubset<T, SavedHomeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a SavedHome.
     * @param {SavedHomeDeleteArgs} args - Arguments to delete one SavedHome.
     * @example
     * // Delete one SavedHome
     * const SavedHome = await prisma.savedHome.delete({
     *   where: {
     *     // ... filter to delete one SavedHome
     *   }
     * })
     * 
    **/
    delete<T extends SavedHomeDeleteArgs>(
      args: SelectSubset<T, SavedHomeDeleteArgs>
    ): CheckSelect<T, Prisma__SavedHomeClient<SavedHome>, Prisma__SavedHomeClient<SavedHomeGetPayload<T>>>

    /**
     * Update one SavedHome.
     * @param {SavedHomeUpdateArgs} args - Arguments to update one SavedHome.
     * @example
     * // Update one SavedHome
     * const savedHome = await prisma.savedHome.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SavedHomeUpdateArgs>(
      args: SelectSubset<T, SavedHomeUpdateArgs>
    ): CheckSelect<T, Prisma__SavedHomeClient<SavedHome>, Prisma__SavedHomeClient<SavedHomeGetPayload<T>>>

    /**
     * Delete zero or more SavedHomes.
     * @param {SavedHomeDeleteManyArgs} args - Arguments to filter SavedHomes to delete.
     * @example
     * // Delete a few SavedHomes
     * const { count } = await prisma.savedHome.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SavedHomeDeleteManyArgs>(
      args?: SelectSubset<T, SavedHomeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedHomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedHomeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedHomes
     * const savedHome = await prisma.savedHome.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SavedHomeUpdateManyArgs>(
      args: SelectSubset<T, SavedHomeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one SavedHome.
     * @param {SavedHomeUpsertArgs} args - Arguments to update or create a SavedHome.
     * @example
     * // Update or create a SavedHome
     * const savedHome = await prisma.savedHome.upsert({
     *   create: {
     *     // ... data to create a SavedHome
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedHome we want to update
     *   }
     * })
    **/
    upsert<T extends SavedHomeUpsertArgs>(
      args: SelectSubset<T, SavedHomeUpsertArgs>
    ): CheckSelect<T, Prisma__SavedHomeClient<SavedHome>, Prisma__SavedHomeClient<SavedHomeGetPayload<T>>>

    /**
     * Find one SavedHome that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SavedHomeFindUniqueOrThrowArgs} args - Arguments to find a SavedHome
     * @example
     * // Get one SavedHome
     * const savedHome = await prisma.savedHome.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SavedHomeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SavedHomeFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SavedHomeClient<SavedHome>, Prisma__SavedHomeClient<SavedHomeGetPayload<T>>>

    /**
     * Find the first SavedHome that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedHomeFindFirstOrThrowArgs} args - Arguments to find a SavedHome
     * @example
     * // Get one SavedHome
     * const savedHome = await prisma.savedHome.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SavedHomeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SavedHomeFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SavedHomeClient<SavedHome>, Prisma__SavedHomeClient<SavedHomeGetPayload<T>>>

    /**
     * Count the number of SavedHomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedHomeCountArgs} args - Arguments to filter SavedHomes to count.
     * @example
     * // Count the number of SavedHomes
     * const count = await prisma.savedHome.count({
     *   where: {
     *     // ... the filter for the SavedHomes we want to count
     *   }
     * })
    **/
    count<T extends SavedHomeCountArgs>(
      args?: Subset<T, SavedHomeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedHomeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedHome.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedHomeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedHomeAggregateArgs>(args: Subset<T, SavedHomeAggregateArgs>): PrismaPromise<GetSavedHomeAggregateType<T>>

    /**
     * Group by SavedHome.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedHomeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavedHomeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedHomeGroupByArgs['orderBy'] }
        : { orderBy?: SavedHomeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedHomeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedHomeGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedHome.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SavedHomeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * SavedHome base type for findUnique actions
   */
  export type SavedHomeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SavedHome
     * 
    **/
    select?: SavedHomeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedHomeInclude | null
    /**
     * Filter, which SavedHome to fetch.
     * 
    **/
    where: SavedHomeWhereUniqueInput
  }

  /**
   * SavedHome: findUnique
   */
  export interface SavedHomeFindUniqueArgs extends SavedHomeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SavedHome base type for findFirst actions
   */
  export type SavedHomeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SavedHome
     * 
    **/
    select?: SavedHomeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedHomeInclude | null
    /**
     * Filter, which SavedHome to fetch.
     * 
    **/
    where?: SavedHomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedHomes to fetch.
     * 
    **/
    orderBy?: Enumerable<SavedHomeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedHomes.
     * 
    **/
    cursor?: SavedHomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedHomes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedHomes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedHomes.
     * 
    **/
    distinct?: Enumerable<SavedHomeScalarFieldEnum>
  }

  /**
   * SavedHome: findFirst
   */
  export interface SavedHomeFindFirstArgs extends SavedHomeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SavedHome findMany
   */
  export type SavedHomeFindManyArgs = {
    /**
     * Select specific fields to fetch from the SavedHome
     * 
    **/
    select?: SavedHomeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedHomeInclude | null
    /**
     * Filter, which SavedHomes to fetch.
     * 
    **/
    where?: SavedHomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedHomes to fetch.
     * 
    **/
    orderBy?: Enumerable<SavedHomeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedHomes.
     * 
    **/
    cursor?: SavedHomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedHomes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedHomes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SavedHomeScalarFieldEnum>
  }


  /**
   * SavedHome create
   */
  export type SavedHomeCreateArgs = {
    /**
     * Select specific fields to fetch from the SavedHome
     * 
    **/
    select?: SavedHomeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedHomeInclude | null
    /**
     * The data needed to create a SavedHome.
     * 
    **/
    data: XOR<SavedHomeCreateInput, SavedHomeUncheckedCreateInput>
  }


  /**
   * SavedHome createMany
   */
  export type SavedHomeCreateManyArgs = {
    /**
     * The data used to create many SavedHomes.
     * 
    **/
    data: Enumerable<SavedHomeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SavedHome update
   */
  export type SavedHomeUpdateArgs = {
    /**
     * Select specific fields to fetch from the SavedHome
     * 
    **/
    select?: SavedHomeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedHomeInclude | null
    /**
     * The data needed to update a SavedHome.
     * 
    **/
    data: XOR<SavedHomeUpdateInput, SavedHomeUncheckedUpdateInput>
    /**
     * Choose, which SavedHome to update.
     * 
    **/
    where: SavedHomeWhereUniqueInput
  }


  /**
   * SavedHome updateMany
   */
  export type SavedHomeUpdateManyArgs = {
    /**
     * The data used to update SavedHomes.
     * 
    **/
    data: XOR<SavedHomeUpdateManyMutationInput, SavedHomeUncheckedUpdateManyInput>
    /**
     * Filter which SavedHomes to update
     * 
    **/
    where?: SavedHomeWhereInput
  }


  /**
   * SavedHome upsert
   */
  export type SavedHomeUpsertArgs = {
    /**
     * Select specific fields to fetch from the SavedHome
     * 
    **/
    select?: SavedHomeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedHomeInclude | null
    /**
     * The filter to search for the SavedHome to update in case it exists.
     * 
    **/
    where: SavedHomeWhereUniqueInput
    /**
     * In case the SavedHome found by the `where` argument doesn't exist, create a new SavedHome with this data.
     * 
    **/
    create: XOR<SavedHomeCreateInput, SavedHomeUncheckedCreateInput>
    /**
     * In case the SavedHome was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SavedHomeUpdateInput, SavedHomeUncheckedUpdateInput>
  }


  /**
   * SavedHome delete
   */
  export type SavedHomeDeleteArgs = {
    /**
     * Select specific fields to fetch from the SavedHome
     * 
    **/
    select?: SavedHomeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedHomeInclude | null
    /**
     * Filter which SavedHome to delete.
     * 
    **/
    where: SavedHomeWhereUniqueInput
  }


  /**
   * SavedHome deleteMany
   */
  export type SavedHomeDeleteManyArgs = {
    /**
     * Filter which SavedHomes to delete
     * 
    **/
    where?: SavedHomeWhereInput
  }


  /**
   * SavedHome: findUniqueOrThrow
   */
  export type SavedHomeFindUniqueOrThrowArgs = SavedHomeFindUniqueArgsBase
      

  /**
   * SavedHome: findFirstOrThrow
   */
  export type SavedHomeFindFirstOrThrowArgs = SavedHomeFindFirstArgsBase
      

  /**
   * SavedHome without action
   */
  export type SavedHomeArgs = {
    /**
     * Select specific fields to fetch from the SavedHome
     * 
    **/
    select?: SavedHomeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedHomeInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    hash: 'hash',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SavedSearchScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    location: 'location',
    userId: 'userId'
  };

  export type SavedSearchScalarFieldEnum = (typeof SavedSearchScalarFieldEnum)[keyof typeof SavedSearchScalarFieldEnum]


  export const SavedHomeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    price: 'price',
    beds: 'beds',
    bath: 'bath',
    sqft: 'sqft',
    address: 'address',
    type: 'type',
    yearBuilt: 'yearBuilt',
    heating: 'heating',
    cooling: 'cooling',
    parking: 'parking',
    lot: 'lot',
    image: 'image',
    propertyId: 'propertyId',
    userId: 'userId'
  };

  export type SavedHomeScalarFieldEnum = (typeof SavedHomeScalarFieldEnum)[keyof typeof SavedHomeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    email?: StringFilter | string
    hash?: StringFilter | string
    name?: StringNullableFilter | string | null
    savedsearches?: SavedSearchListRelationFilter
    savedhomes?: SavedHomeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    name?: SortOrder
    savedsearches?: SavedSearchOrderByRelationAggregateInput
    savedhomes?: SavedHomeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    name?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    email?: StringWithAggregatesFilter | string
    hash?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
  }

  export type SavedSearchWhereInput = {
    AND?: Enumerable<SavedSearchWhereInput>
    OR?: Enumerable<SavedSearchWhereInput>
    NOT?: Enumerable<SavedSearchWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    location?: StringFilter | string
    userId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SavedSearchOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SavedSearchWhereUniqueInput = {
    id?: number
  }

  export type SavedSearchOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrder
    userId?: SortOrder
    _count?: SavedSearchCountOrderByAggregateInput
    _avg?: SavedSearchAvgOrderByAggregateInput
    _max?: SavedSearchMaxOrderByAggregateInput
    _min?: SavedSearchMinOrderByAggregateInput
    _sum?: SavedSearchSumOrderByAggregateInput
  }

  export type SavedSearchScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SavedSearchScalarWhereWithAggregatesInput>
    OR?: Enumerable<SavedSearchScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SavedSearchScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    location?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
  }

  export type SavedHomeWhereInput = {
    AND?: Enumerable<SavedHomeWhereInput>
    OR?: Enumerable<SavedHomeWhereInput>
    NOT?: Enumerable<SavedHomeWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    price?: IntFilter | number
    beds?: IntFilter | number
    bath?: IntFilter | number
    sqft?: IntFilter | number
    address?: StringFilter | string
    type?: StringFilter | string
    yearBuilt?: IntFilter | number
    heating?: StringFilter | string
    cooling?: StringFilter | string
    parking?: StringFilter | string
    lot?: IntFilter | number
    image?: StringFilter | string
    propertyId?: StringFilter | string
    userId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SavedHomeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    price?: SortOrder
    beds?: SortOrder
    bath?: SortOrder
    sqft?: SortOrder
    address?: SortOrder
    type?: SortOrder
    yearBuilt?: SortOrder
    heating?: SortOrder
    cooling?: SortOrder
    parking?: SortOrder
    lot?: SortOrder
    image?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SavedHomeWhereUniqueInput = {
    id?: number
  }

  export type SavedHomeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    price?: SortOrder
    beds?: SortOrder
    bath?: SortOrder
    sqft?: SortOrder
    address?: SortOrder
    type?: SortOrder
    yearBuilt?: SortOrder
    heating?: SortOrder
    cooling?: SortOrder
    parking?: SortOrder
    lot?: SortOrder
    image?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    _count?: SavedHomeCountOrderByAggregateInput
    _avg?: SavedHomeAvgOrderByAggregateInput
    _max?: SavedHomeMaxOrderByAggregateInput
    _min?: SavedHomeMinOrderByAggregateInput
    _sum?: SavedHomeSumOrderByAggregateInput
  }

  export type SavedHomeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SavedHomeScalarWhereWithAggregatesInput>
    OR?: Enumerable<SavedHomeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SavedHomeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    price?: IntWithAggregatesFilter | number
    beds?: IntWithAggregatesFilter | number
    bath?: IntWithAggregatesFilter | number
    sqft?: IntWithAggregatesFilter | number
    address?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    yearBuilt?: IntWithAggregatesFilter | number
    heating?: StringWithAggregatesFilter | string
    cooling?: StringWithAggregatesFilter | string
    parking?: StringWithAggregatesFilter | string
    lot?: IntWithAggregatesFilter | number
    image?: StringWithAggregatesFilter | string
    propertyId?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    hash: string
    name?: string | null
    savedsearches?: SavedSearchCreateNestedManyWithoutUserInput
    savedhomes?: SavedHomeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    hash: string
    name?: string | null
    savedsearches?: SavedSearchUncheckedCreateNestedManyWithoutUserInput
    savedhomes?: SavedHomeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    savedsearches?: SavedSearchUpdateManyWithoutUserNestedInput
    savedhomes?: SavedHomeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    savedsearches?: SavedSearchUncheckedUpdateManyWithoutUserNestedInput
    savedhomes?: SavedHomeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    hash: string
    name?: string | null
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SavedSearchCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    location: string
    user: UserCreateNestedOneWithoutSavedsearchesInput
  }

  export type SavedSearchUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    location: string
    userId: number
  }

  export type SavedSearchUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSavedsearchesNestedInput
  }

  export type SavedSearchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SavedSearchCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    location: string
    userId: number
  }

  export type SavedSearchUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type SavedSearchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SavedHomeCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    price: number
    beds: number
    bath: number
    sqft: number
    address: string
    type: string
    yearBuilt: number
    heating: string
    cooling: string
    parking: string
    lot: number
    image: string
    propertyId: string
    user: UserCreateNestedOneWithoutSavedhomesInput
  }

  export type SavedHomeUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    price: number
    beds: number
    bath: number
    sqft: number
    address: string
    type: string
    yearBuilt: number
    heating: string
    cooling: string
    parking: string
    lot: number
    image: string
    propertyId: string
    userId: number
  }

  export type SavedHomeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    bath?: IntFieldUpdateOperationsInput | number
    sqft?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    yearBuilt?: IntFieldUpdateOperationsInput | number
    heating?: StringFieldUpdateOperationsInput | string
    cooling?: StringFieldUpdateOperationsInput | string
    parking?: StringFieldUpdateOperationsInput | string
    lot?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSavedhomesNestedInput
  }

  export type SavedHomeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    bath?: IntFieldUpdateOperationsInput | number
    sqft?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    yearBuilt?: IntFieldUpdateOperationsInput | number
    heating?: StringFieldUpdateOperationsInput | string
    cooling?: StringFieldUpdateOperationsInput | string
    parking?: StringFieldUpdateOperationsInput | string
    lot?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SavedHomeCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    price: number
    beds: number
    bath: number
    sqft: number
    address: string
    type: string
    yearBuilt: number
    heating: string
    cooling: string
    parking: string
    lot: number
    image: string
    propertyId: string
    userId: number
  }

  export type SavedHomeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    bath?: IntFieldUpdateOperationsInput | number
    sqft?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    yearBuilt?: IntFieldUpdateOperationsInput | number
    heating?: StringFieldUpdateOperationsInput | string
    cooling?: StringFieldUpdateOperationsInput | string
    parking?: StringFieldUpdateOperationsInput | string
    lot?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedHomeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    bath?: IntFieldUpdateOperationsInput | number
    sqft?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    yearBuilt?: IntFieldUpdateOperationsInput | number
    heating?: StringFieldUpdateOperationsInput | string
    cooling?: StringFieldUpdateOperationsInput | string
    parking?: StringFieldUpdateOperationsInput | string
    lot?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type SavedSearchListRelationFilter = {
    every?: SavedSearchWhereInput
    some?: SavedSearchWhereInput
    none?: SavedSearchWhereInput
  }

  export type SavedHomeListRelationFilter = {
    every?: SavedHomeWhereInput
    some?: SavedHomeWhereInput
    none?: SavedHomeWhereInput
  }

  export type SavedSearchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedHomeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    name?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    name?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SavedSearchCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrder
    userId?: SortOrder
  }

  export type SavedSearchAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SavedSearchMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrder
    userId?: SortOrder
  }

  export type SavedSearchMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrder
    userId?: SortOrder
  }

  export type SavedSearchSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SavedHomeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    price?: SortOrder
    beds?: SortOrder
    bath?: SortOrder
    sqft?: SortOrder
    address?: SortOrder
    type?: SortOrder
    yearBuilt?: SortOrder
    heating?: SortOrder
    cooling?: SortOrder
    parking?: SortOrder
    lot?: SortOrder
    image?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
  }

  export type SavedHomeAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    beds?: SortOrder
    bath?: SortOrder
    sqft?: SortOrder
    yearBuilt?: SortOrder
    lot?: SortOrder
    userId?: SortOrder
  }

  export type SavedHomeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    price?: SortOrder
    beds?: SortOrder
    bath?: SortOrder
    sqft?: SortOrder
    address?: SortOrder
    type?: SortOrder
    yearBuilt?: SortOrder
    heating?: SortOrder
    cooling?: SortOrder
    parking?: SortOrder
    lot?: SortOrder
    image?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
  }

  export type SavedHomeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    price?: SortOrder
    beds?: SortOrder
    bath?: SortOrder
    sqft?: SortOrder
    address?: SortOrder
    type?: SortOrder
    yearBuilt?: SortOrder
    heating?: SortOrder
    cooling?: SortOrder
    parking?: SortOrder
    lot?: SortOrder
    image?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
  }

  export type SavedHomeSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    beds?: SortOrder
    bath?: SortOrder
    sqft?: SortOrder
    yearBuilt?: SortOrder
    lot?: SortOrder
    userId?: SortOrder
  }

  export type SavedSearchCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SavedSearchCreateWithoutUserInput>, Enumerable<SavedSearchUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SavedSearchCreateOrConnectWithoutUserInput>
    createMany?: SavedSearchCreateManyUserInputEnvelope
    connect?: Enumerable<SavedSearchWhereUniqueInput>
  }

  export type SavedHomeCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SavedHomeCreateWithoutUserInput>, Enumerable<SavedHomeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SavedHomeCreateOrConnectWithoutUserInput>
    createMany?: SavedHomeCreateManyUserInputEnvelope
    connect?: Enumerable<SavedHomeWhereUniqueInput>
  }

  export type SavedSearchUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SavedSearchCreateWithoutUserInput>, Enumerable<SavedSearchUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SavedSearchCreateOrConnectWithoutUserInput>
    createMany?: SavedSearchCreateManyUserInputEnvelope
    connect?: Enumerable<SavedSearchWhereUniqueInput>
  }

  export type SavedHomeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SavedHomeCreateWithoutUserInput>, Enumerable<SavedHomeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SavedHomeCreateOrConnectWithoutUserInput>
    createMany?: SavedHomeCreateManyUserInputEnvelope
    connect?: Enumerable<SavedHomeWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SavedSearchUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SavedSearchCreateWithoutUserInput>, Enumerable<SavedSearchUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SavedSearchCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SavedSearchUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SavedSearchCreateManyUserInputEnvelope
    set?: Enumerable<SavedSearchWhereUniqueInput>
    disconnect?: Enumerable<SavedSearchWhereUniqueInput>
    delete?: Enumerable<SavedSearchWhereUniqueInput>
    connect?: Enumerable<SavedSearchWhereUniqueInput>
    update?: Enumerable<SavedSearchUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SavedSearchUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SavedSearchScalarWhereInput>
  }

  export type SavedHomeUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SavedHomeCreateWithoutUserInput>, Enumerable<SavedHomeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SavedHomeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SavedHomeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SavedHomeCreateManyUserInputEnvelope
    set?: Enumerable<SavedHomeWhereUniqueInput>
    disconnect?: Enumerable<SavedHomeWhereUniqueInput>
    delete?: Enumerable<SavedHomeWhereUniqueInput>
    connect?: Enumerable<SavedHomeWhereUniqueInput>
    update?: Enumerable<SavedHomeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SavedHomeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SavedHomeScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SavedSearchUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SavedSearchCreateWithoutUserInput>, Enumerable<SavedSearchUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SavedSearchCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SavedSearchUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SavedSearchCreateManyUserInputEnvelope
    set?: Enumerable<SavedSearchWhereUniqueInput>
    disconnect?: Enumerable<SavedSearchWhereUniqueInput>
    delete?: Enumerable<SavedSearchWhereUniqueInput>
    connect?: Enumerable<SavedSearchWhereUniqueInput>
    update?: Enumerable<SavedSearchUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SavedSearchUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SavedSearchScalarWhereInput>
  }

  export type SavedHomeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SavedHomeCreateWithoutUserInput>, Enumerable<SavedHomeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SavedHomeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SavedHomeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SavedHomeCreateManyUserInputEnvelope
    set?: Enumerable<SavedHomeWhereUniqueInput>
    disconnect?: Enumerable<SavedHomeWhereUniqueInput>
    delete?: Enumerable<SavedHomeWhereUniqueInput>
    connect?: Enumerable<SavedHomeWhereUniqueInput>
    update?: Enumerable<SavedHomeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SavedHomeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SavedHomeScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutSavedsearchesInput = {
    create?: XOR<UserCreateWithoutSavedsearchesInput, UserUncheckedCreateWithoutSavedsearchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedsearchesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSavedsearchesNestedInput = {
    create?: XOR<UserCreateWithoutSavedsearchesInput, UserUncheckedCreateWithoutSavedsearchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedsearchesInput
    upsert?: UserUpsertWithoutSavedsearchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSavedsearchesInput, UserUncheckedUpdateWithoutSavedsearchesInput>
  }

  export type UserCreateNestedOneWithoutSavedhomesInput = {
    create?: XOR<UserCreateWithoutSavedhomesInput, UserUncheckedCreateWithoutSavedhomesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedhomesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSavedhomesNestedInput = {
    create?: XOR<UserCreateWithoutSavedhomesInput, UserUncheckedCreateWithoutSavedhomesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedhomesInput
    upsert?: UserUpsertWithoutSavedhomesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSavedhomesInput, UserUncheckedUpdateWithoutSavedhomesInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type SavedSearchCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    location: string
  }

  export type SavedSearchUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    location: string
  }

  export type SavedSearchCreateOrConnectWithoutUserInput = {
    where: SavedSearchWhereUniqueInput
    create: XOR<SavedSearchCreateWithoutUserInput, SavedSearchUncheckedCreateWithoutUserInput>
  }

  export type SavedSearchCreateManyUserInputEnvelope = {
    data: Enumerable<SavedSearchCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type SavedHomeCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    price: number
    beds: number
    bath: number
    sqft: number
    address: string
    type: string
    yearBuilt: number
    heating: string
    cooling: string
    parking: string
    lot: number
    image: string
    propertyId: string
  }

  export type SavedHomeUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    price: number
    beds: number
    bath: number
    sqft: number
    address: string
    type: string
    yearBuilt: number
    heating: string
    cooling: string
    parking: string
    lot: number
    image: string
    propertyId: string
  }

  export type SavedHomeCreateOrConnectWithoutUserInput = {
    where: SavedHomeWhereUniqueInput
    create: XOR<SavedHomeCreateWithoutUserInput, SavedHomeUncheckedCreateWithoutUserInput>
  }

  export type SavedHomeCreateManyUserInputEnvelope = {
    data: Enumerable<SavedHomeCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type SavedSearchUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedSearchWhereUniqueInput
    update: XOR<SavedSearchUpdateWithoutUserInput, SavedSearchUncheckedUpdateWithoutUserInput>
    create: XOR<SavedSearchCreateWithoutUserInput, SavedSearchUncheckedCreateWithoutUserInput>
  }

  export type SavedSearchUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedSearchWhereUniqueInput
    data: XOR<SavedSearchUpdateWithoutUserInput, SavedSearchUncheckedUpdateWithoutUserInput>
  }

  export type SavedSearchUpdateManyWithWhereWithoutUserInput = {
    where: SavedSearchScalarWhereInput
    data: XOR<SavedSearchUpdateManyMutationInput, SavedSearchUncheckedUpdateManyWithoutSavedsearchesInput>
  }

  export type SavedSearchScalarWhereInput = {
    AND?: Enumerable<SavedSearchScalarWhereInput>
    OR?: Enumerable<SavedSearchScalarWhereInput>
    NOT?: Enumerable<SavedSearchScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    location?: StringFilter | string
    userId?: IntFilter | number
  }

  export type SavedHomeUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedHomeWhereUniqueInput
    update: XOR<SavedHomeUpdateWithoutUserInput, SavedHomeUncheckedUpdateWithoutUserInput>
    create: XOR<SavedHomeCreateWithoutUserInput, SavedHomeUncheckedCreateWithoutUserInput>
  }

  export type SavedHomeUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedHomeWhereUniqueInput
    data: XOR<SavedHomeUpdateWithoutUserInput, SavedHomeUncheckedUpdateWithoutUserInput>
  }

  export type SavedHomeUpdateManyWithWhereWithoutUserInput = {
    where: SavedHomeScalarWhereInput
    data: XOR<SavedHomeUpdateManyMutationInput, SavedHomeUncheckedUpdateManyWithoutSavedhomesInput>
  }

  export type SavedHomeScalarWhereInput = {
    AND?: Enumerable<SavedHomeScalarWhereInput>
    OR?: Enumerable<SavedHomeScalarWhereInput>
    NOT?: Enumerable<SavedHomeScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    price?: IntFilter | number
    beds?: IntFilter | number
    bath?: IntFilter | number
    sqft?: IntFilter | number
    address?: StringFilter | string
    type?: StringFilter | string
    yearBuilt?: IntFilter | number
    heating?: StringFilter | string
    cooling?: StringFilter | string
    parking?: StringFilter | string
    lot?: IntFilter | number
    image?: StringFilter | string
    propertyId?: StringFilter | string
    userId?: IntFilter | number
  }

  export type UserCreateWithoutSavedsearchesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    hash: string
    name?: string | null
    savedhomes?: SavedHomeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedsearchesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    hash: string
    name?: string | null
    savedhomes?: SavedHomeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedsearchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedsearchesInput, UserUncheckedCreateWithoutSavedsearchesInput>
  }

  export type UserUpsertWithoutSavedsearchesInput = {
    update: XOR<UserUpdateWithoutSavedsearchesInput, UserUncheckedUpdateWithoutSavedsearchesInput>
    create: XOR<UserCreateWithoutSavedsearchesInput, UserUncheckedCreateWithoutSavedsearchesInput>
  }

  export type UserUpdateWithoutSavedsearchesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    savedhomes?: SavedHomeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedsearchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    savedhomes?: SavedHomeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSavedhomesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    hash: string
    name?: string | null
    savedsearches?: SavedSearchCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedhomesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    hash: string
    name?: string | null
    savedsearches?: SavedSearchUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedhomesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedhomesInput, UserUncheckedCreateWithoutSavedhomesInput>
  }

  export type UserUpsertWithoutSavedhomesInput = {
    update: XOR<UserUpdateWithoutSavedhomesInput, UserUncheckedUpdateWithoutSavedhomesInput>
    create: XOR<UserCreateWithoutSavedhomesInput, UserUncheckedCreateWithoutSavedhomesInput>
  }

  export type UserUpdateWithoutSavedhomesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    savedsearches?: SavedSearchUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedhomesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    savedsearches?: SavedSearchUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SavedSearchCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    location: string
  }

  export type SavedHomeCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    price: number
    beds: number
    bath: number
    sqft: number
    address: string
    type: string
    yearBuilt: number
    heating: string
    cooling: string
    parking: string
    lot: number
    image: string
    propertyId: string
  }

  export type SavedSearchUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type SavedSearchUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type SavedSearchUncheckedUpdateManyWithoutSavedsearchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type SavedHomeUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    bath?: IntFieldUpdateOperationsInput | number
    sqft?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    yearBuilt?: IntFieldUpdateOperationsInput | number
    heating?: StringFieldUpdateOperationsInput | string
    cooling?: StringFieldUpdateOperationsInput | string
    parking?: StringFieldUpdateOperationsInput | string
    lot?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedHomeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    bath?: IntFieldUpdateOperationsInput | number
    sqft?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    yearBuilt?: IntFieldUpdateOperationsInput | number
    heating?: StringFieldUpdateOperationsInput | string
    cooling?: StringFieldUpdateOperationsInput | string
    parking?: StringFieldUpdateOperationsInput | string
    lot?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
  }

  export type SavedHomeUncheckedUpdateManyWithoutSavedhomesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    beds?: IntFieldUpdateOperationsInput | number
    bath?: IntFieldUpdateOperationsInput | number
    sqft?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    yearBuilt?: IntFieldUpdateOperationsInput | number
    heating?: StringFieldUpdateOperationsInput | string
    cooling?: StringFieldUpdateOperationsInput | string
    parking?: StringFieldUpdateOperationsInput | string
    lot?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}