import { handleEventStreamResponse } from '../src/event-stream/handleEventStreamResponse.js';
import { ReadableStream, Response } from '@whatwg-node/fetch';

describe('handleEventStreamResponse', () => {
  const encoder = new TextEncoder();
  it('should handle an event with data', async () => {
    const readableStream = new ReadableStream<Uint8Array>({
      start(controller) {
        controller.enqueue(encoder.encode('event: complete\n'));
        controller.enqueue(encoder.encode('data: { "foo": "bar" }\n'));
        controller.enqueue(encoder.encode('\n'));
      },
    });

    const response = new Response(readableStream);
    const asyncIterable = await handleEventStreamResponse(response);
    const iterator = asyncIterable[Symbol.asyncIterator]();
    const { value } = await iterator.next();

    expect(value).toMatchInlineSnapshot(`
          Object {
            "foo": "bar",
          }
      `);
  });

  it('should ignore server pings', async () => {
    const readableStream = new ReadableStream<Uint8Array>({
      start(controller) {
        controller.enqueue(encoder.encode(':\n\n'));
        controller.enqueue(encoder.encode('event: next\n'));
        controller.enqueue(encoder.encode('data: { "foo": "bar" }\n\n'));
      },
    });
    const response = new Response(readableStream);
    const asyncIterable = await handleEventStreamResponse(response);
    const iterator = asyncIterable[Symbol.asyncIterator]();
    const iteratorResult = await iterator.next();

    expect(iteratorResult).toMatchInlineSnapshot(`
      Object {
        "done": false,
        "value": Object {
          "foo": "bar",
        },
      }
    `);
  });
});
