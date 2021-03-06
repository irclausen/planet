/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../blog/params";
import { Post } from "../blog/post";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { SentPost } from "../blog/sent_post";
import { TimeoutPost } from "../blog/timeout_post";

export const protobufPackage = "irclausen.planet.blog";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetPostRequest {
  id: number;
}

export interface QueryGetPostResponse {
  Post: Post | undefined;
}

export interface QueryAllPostRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPostResponse {
  Post: Post[];
  pagination: PageResponse | undefined;
}

export interface QueryGetSentPostRequest {
  id: number;
}

export interface QueryGetSentPostResponse {
  SentPost: SentPost | undefined;
}

export interface QueryAllSentPostRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllSentPostResponse {
  SentPost: SentPost[];
  pagination: PageResponse | undefined;
}

export interface QueryGetTimeoutPostRequest {
  id: number;
}

export interface QueryGetTimeoutPostResponse {
  TimeoutPost: TimeoutPost | undefined;
}

export interface QueryAllTimeoutPostRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllTimeoutPostResponse {
  TimeoutPost: TimeoutPost[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetPostRequest: object = { id: 0 };

export const QueryGetPostRequest = {
  encode(
    message: QueryGetPostRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPostRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPostRequest } as QueryGetPostRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPostRequest {
    const message = { ...baseQueryGetPostRequest } as QueryGetPostRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetPostRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPostRequest>): QueryGetPostRequest {
    const message = { ...baseQueryGetPostRequest } as QueryGetPostRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetPostResponse: object = {};

export const QueryGetPostResponse = {
  encode(
    message: QueryGetPostResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Post !== undefined) {
      Post.encode(message.Post, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPostResponse } as QueryGetPostResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Post = Post.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPostResponse {
    const message = { ...baseQueryGetPostResponse } as QueryGetPostResponse;
    if (object.Post !== undefined && object.Post !== null) {
      message.Post = Post.fromJSON(object.Post);
    } else {
      message.Post = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPostResponse): unknown {
    const obj: any = {};
    message.Post !== undefined &&
      (obj.Post = message.Post ? Post.toJSON(message.Post) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPostResponse>): QueryGetPostResponse {
    const message = { ...baseQueryGetPostResponse } as QueryGetPostResponse;
    if (object.Post !== undefined && object.Post !== null) {
      message.Post = Post.fromPartial(object.Post);
    } else {
      message.Post = undefined;
    }
    return message;
  },
};

const baseQueryAllPostRequest: object = {};

export const QueryAllPostRequest = {
  encode(
    message: QueryAllPostRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPostRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPostRequest } as QueryAllPostRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPostRequest {
    const message = { ...baseQueryAllPostRequest } as QueryAllPostRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPostRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPostRequest>): QueryAllPostRequest {
    const message = { ...baseQueryAllPostRequest } as QueryAllPostRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPostResponse: object = {};

export const QueryAllPostResponse = {
  encode(
    message: QueryAllPostResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Post) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPostResponse } as QueryAllPostResponse;
    message.Post = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Post.push(Post.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPostResponse {
    const message = { ...baseQueryAllPostResponse } as QueryAllPostResponse;
    message.Post = [];
    if (object.Post !== undefined && object.Post !== null) {
      for (const e of object.Post) {
        message.Post.push(Post.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPostResponse): unknown {
    const obj: any = {};
    if (message.Post) {
      obj.Post = message.Post.map((e) => (e ? Post.toJSON(e) : undefined));
    } else {
      obj.Post = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPostResponse>): QueryAllPostResponse {
    const message = { ...baseQueryAllPostResponse } as QueryAllPostResponse;
    message.Post = [];
    if (object.Post !== undefined && object.Post !== null) {
      for (const e of object.Post) {
        message.Post.push(Post.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetSentPostRequest: object = { id: 0 };

export const QueryGetSentPostRequest = {
  encode(
    message: QueryGetSentPostRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSentPostRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSentPostRequest,
    } as QueryGetSentPostRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSentPostRequest {
    const message = {
      ...baseQueryGetSentPostRequest,
    } as QueryGetSentPostRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetSentPostRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSentPostRequest>
  ): QueryGetSentPostRequest {
    const message = {
      ...baseQueryGetSentPostRequest,
    } as QueryGetSentPostRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetSentPostResponse: object = {};

export const QueryGetSentPostResponse = {
  encode(
    message: QueryGetSentPostResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.SentPost !== undefined) {
      SentPost.encode(message.SentPost, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSentPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSentPostResponse,
    } as QueryGetSentPostResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.SentPost = SentPost.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSentPostResponse {
    const message = {
      ...baseQueryGetSentPostResponse,
    } as QueryGetSentPostResponse;
    if (object.SentPost !== undefined && object.SentPost !== null) {
      message.SentPost = SentPost.fromJSON(object.SentPost);
    } else {
      message.SentPost = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSentPostResponse): unknown {
    const obj: any = {};
    message.SentPost !== undefined &&
      (obj.SentPost = message.SentPost
        ? SentPost.toJSON(message.SentPost)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSentPostResponse>
  ): QueryGetSentPostResponse {
    const message = {
      ...baseQueryGetSentPostResponse,
    } as QueryGetSentPostResponse;
    if (object.SentPost !== undefined && object.SentPost !== null) {
      message.SentPost = SentPost.fromPartial(object.SentPost);
    } else {
      message.SentPost = undefined;
    }
    return message;
  },
};

const baseQueryAllSentPostRequest: object = {};

export const QueryAllSentPostRequest = {
  encode(
    message: QueryAllSentPostRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSentPostRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSentPostRequest,
    } as QueryAllSentPostRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSentPostRequest {
    const message = {
      ...baseQueryAllSentPostRequest,
    } as QueryAllSentPostRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSentPostRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSentPostRequest>
  ): QueryAllSentPostRequest {
    const message = {
      ...baseQueryAllSentPostRequest,
    } as QueryAllSentPostRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllSentPostResponse: object = {};

export const QueryAllSentPostResponse = {
  encode(
    message: QueryAllSentPostResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.SentPost) {
      SentPost.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllSentPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSentPostResponse,
    } as QueryAllSentPostResponse;
    message.SentPost = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.SentPost.push(SentPost.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSentPostResponse {
    const message = {
      ...baseQueryAllSentPostResponse,
    } as QueryAllSentPostResponse;
    message.SentPost = [];
    if (object.SentPost !== undefined && object.SentPost !== null) {
      for (const e of object.SentPost) {
        message.SentPost.push(SentPost.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSentPostResponse): unknown {
    const obj: any = {};
    if (message.SentPost) {
      obj.SentPost = message.SentPost.map((e) =>
        e ? SentPost.toJSON(e) : undefined
      );
    } else {
      obj.SentPost = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSentPostResponse>
  ): QueryAllSentPostResponse {
    const message = {
      ...baseQueryAllSentPostResponse,
    } as QueryAllSentPostResponse;
    message.SentPost = [];
    if (object.SentPost !== undefined && object.SentPost !== null) {
      for (const e of object.SentPost) {
        message.SentPost.push(SentPost.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetTimeoutPostRequest: object = { id: 0 };

export const QueryGetTimeoutPostRequest = {
  encode(
    message: QueryGetTimeoutPostRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetTimeoutPostRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTimeoutPostRequest,
    } as QueryGetTimeoutPostRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTimeoutPostRequest {
    const message = {
      ...baseQueryGetTimeoutPostRequest,
    } as QueryGetTimeoutPostRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetTimeoutPostRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTimeoutPostRequest>
  ): QueryGetTimeoutPostRequest {
    const message = {
      ...baseQueryGetTimeoutPostRequest,
    } as QueryGetTimeoutPostRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetTimeoutPostResponse: object = {};

export const QueryGetTimeoutPostResponse = {
  encode(
    message: QueryGetTimeoutPostResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.TimeoutPost !== undefined) {
      TimeoutPost.encode(
        message.TimeoutPost,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetTimeoutPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTimeoutPostResponse,
    } as QueryGetTimeoutPostResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.TimeoutPost = TimeoutPost.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTimeoutPostResponse {
    const message = {
      ...baseQueryGetTimeoutPostResponse,
    } as QueryGetTimeoutPostResponse;
    if (object.TimeoutPost !== undefined && object.TimeoutPost !== null) {
      message.TimeoutPost = TimeoutPost.fromJSON(object.TimeoutPost);
    } else {
      message.TimeoutPost = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetTimeoutPostResponse): unknown {
    const obj: any = {};
    message.TimeoutPost !== undefined &&
      (obj.TimeoutPost = message.TimeoutPost
        ? TimeoutPost.toJSON(message.TimeoutPost)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTimeoutPostResponse>
  ): QueryGetTimeoutPostResponse {
    const message = {
      ...baseQueryGetTimeoutPostResponse,
    } as QueryGetTimeoutPostResponse;
    if (object.TimeoutPost !== undefined && object.TimeoutPost !== null) {
      message.TimeoutPost = TimeoutPost.fromPartial(object.TimeoutPost);
    } else {
      message.TimeoutPost = undefined;
    }
    return message;
  },
};

const baseQueryAllTimeoutPostRequest: object = {};

export const QueryAllTimeoutPostRequest = {
  encode(
    message: QueryAllTimeoutPostRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllTimeoutPostRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTimeoutPostRequest,
    } as QueryAllTimeoutPostRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTimeoutPostRequest {
    const message = {
      ...baseQueryAllTimeoutPostRequest,
    } as QueryAllTimeoutPostRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTimeoutPostRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTimeoutPostRequest>
  ): QueryAllTimeoutPostRequest {
    const message = {
      ...baseQueryAllTimeoutPostRequest,
    } as QueryAllTimeoutPostRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllTimeoutPostResponse: object = {};

export const QueryAllTimeoutPostResponse = {
  encode(
    message: QueryAllTimeoutPostResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.TimeoutPost) {
      TimeoutPost.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllTimeoutPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTimeoutPostResponse,
    } as QueryAllTimeoutPostResponse;
    message.TimeoutPost = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.TimeoutPost.push(TimeoutPost.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTimeoutPostResponse {
    const message = {
      ...baseQueryAllTimeoutPostResponse,
    } as QueryAllTimeoutPostResponse;
    message.TimeoutPost = [];
    if (object.TimeoutPost !== undefined && object.TimeoutPost !== null) {
      for (const e of object.TimeoutPost) {
        message.TimeoutPost.push(TimeoutPost.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTimeoutPostResponse): unknown {
    const obj: any = {};
    if (message.TimeoutPost) {
      obj.TimeoutPost = message.TimeoutPost.map((e) =>
        e ? TimeoutPost.toJSON(e) : undefined
      );
    } else {
      obj.TimeoutPost = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTimeoutPostResponse>
  ): QueryAllTimeoutPostResponse {
    const message = {
      ...baseQueryAllTimeoutPostResponse,
    } as QueryAllTimeoutPostResponse;
    message.TimeoutPost = [];
    if (object.TimeoutPost !== undefined && object.TimeoutPost !== null) {
      for (const e of object.TimeoutPost) {
        message.TimeoutPost.push(TimeoutPost.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Post by id. */
  Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse>;
  /** Queries a list of Post items. */
  PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse>;
  /** Queries a SentPost by id. */
  SentPost(request: QueryGetSentPostRequest): Promise<QueryGetSentPostResponse>;
  /** Queries a list of SentPost items. */
  SentPostAll(
    request: QueryAllSentPostRequest
  ): Promise<QueryAllSentPostResponse>;
  /** Queries a TimeoutPost by id. */
  TimeoutPost(
    request: QueryGetTimeoutPostRequest
  ): Promise<QueryGetTimeoutPostResponse>;
  /** Queries a list of TimeoutPost items. */
  TimeoutPostAll(
    request: QueryAllTimeoutPostRequest
  ): Promise<QueryAllTimeoutPostResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "irclausen.planet.blog.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse> {
    const data = QueryGetPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      "irclausen.planet.blog.Query",
      "Post",
      data
    );
    return promise.then((data) =>
      QueryGetPostResponse.decode(new Reader(data))
    );
  }

  PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse> {
    const data = QueryAllPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      "irclausen.planet.blog.Query",
      "PostAll",
      data
    );
    return promise.then((data) =>
      QueryAllPostResponse.decode(new Reader(data))
    );
  }

  SentPost(
    request: QueryGetSentPostRequest
  ): Promise<QueryGetSentPostResponse> {
    const data = QueryGetSentPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      "irclausen.planet.blog.Query",
      "SentPost",
      data
    );
    return promise.then((data) =>
      QueryGetSentPostResponse.decode(new Reader(data))
    );
  }

  SentPostAll(
    request: QueryAllSentPostRequest
  ): Promise<QueryAllSentPostResponse> {
    const data = QueryAllSentPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      "irclausen.planet.blog.Query",
      "SentPostAll",
      data
    );
    return promise.then((data) =>
      QueryAllSentPostResponse.decode(new Reader(data))
    );
  }

  TimeoutPost(
    request: QueryGetTimeoutPostRequest
  ): Promise<QueryGetTimeoutPostResponse> {
    const data = QueryGetTimeoutPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      "irclausen.planet.blog.Query",
      "TimeoutPost",
      data
    );
    return promise.then((data) =>
      QueryGetTimeoutPostResponse.decode(new Reader(data))
    );
  }

  TimeoutPostAll(
    request: QueryAllTimeoutPostRequest
  ): Promise<QueryAllTimeoutPostResponse> {
    const data = QueryAllTimeoutPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      "irclausen.planet.blog.Query",
      "TimeoutPostAll",
      data
    );
    return promise.then((data) =>
      QueryAllTimeoutPostResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
