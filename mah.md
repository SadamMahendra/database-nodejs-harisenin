Node.js v18.20.3
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node src/index.js`
Server Running
[nodemon] restarting due to changes...
[nodemon] starting `node src/index.js`
Server Running
<ref *2> IncomingMessage {
\_readableState: ReadableState {
state: 137264,
highWaterMark: 16384,
buffer: BufferList { head: null, tail: null, length: 0 },
length: 0,
pipes: [],
flowing: null,
errored: null,
defaultEncoding: 'utf8',
awaitDrainWriters: null,
decoder: null,
encoding: null,
[Symbol(kPaused)]: null
},
\_events: [Object: null prototype] {},
\_eventsCount: 0,
\_maxListeners: undefined,
socket: <ref *1> Socket {
connecting: false,
\_hadError: false,
\_parent: null,
\_host: null,
\_closeAfterHandlingError: false,
\_readableState: ReadableState {
state: 4184,
highWaterMark: 16384,
buffer: BufferList { head: null, tail: null, length: 0 },
length: 0,
pipes: [],
flowing: true,
errored: null,
defaultEncoding: 'utf8',
awaitDrainWriters: null,
decoder: null,
encoding: null,
[Symbol(kPaused)]: false
},
\_events: [Object: null prototype] {
end: [Array],
timeout: [Function: socketOnTimeout],
data: [Function: bound socketOnData],
error: [Function: socketOnError],
close: [Array],
drain: [Function: bound socketOnDrain],
resume: [Function: onSocketResume],
pause: [Function: onSocketPause]
},
\_eventsCount: 8,
\_maxListeners: undefined,
\_writableState: WritableState {
objectMode: false,
highWaterMark: 16384,
finalCalled: false,
needDrain: false,
ending: false,
ended: false,
finished: false,
destroyed: false,
decodeStrings: false,
defaultEncoding: 'utf8',
length: 0,
writing: false,
corked: 0,
sync: true,
bufferProcessing: false,
onwrite: [Function: bound onwrite],
writecb: null,
writelen: 0,
afterWriteTickInfo: null,
buffered: [],
bufferedIndex: 0,
allBuffers: true,
allNoop: true,
pendingcb: 0,
constructed: true,
prefinished: false,
errorEmitted: false,
emitClose: false,
autoDestroy: true,
errored: null,
closed: false,
closeEmitted: false,
[Symbol(kOnFinished)]: []
},
allowHalfOpen: true,
\_sockname: null,
\_pendingData: null,
\_pendingEncoding: '',
server: Server {
maxHeaderSize: undefined,
insecureHTTPParser: undefined,
requestTimeout: 300000,
headersTimeout: 60000,
keepAliveTimeout: 5000,
connectionsCheckingInterval: 30000,
joinDuplicateHeaders: undefined,
rejectNonStandardBodyWrites: false,
\_events: [Object: null prototype],
\_eventsCount: 3,
\_maxListeners: undefined,
\_connections: 1,
\_handle: [TCP],
\_usingWorkers: false,
\_workers: [],
\_unref: false,
allowHalfOpen: true,
pauseOnConnect: false,
noDelay: true,
keepAlive: false,
keepAliveInitialDelay: 0,
highWaterMark: 16384,
httpAllowHalfOpen: false,
timeout: 0,
maxHeadersCount: null,
maxRequestsPerSocket: 0,
\_connectionKey: '6::::3000',
[Symbol(IncomingMessage)]: [Function: IncomingMessage],
[Symbol(ServerResponse)]: [Function: ServerResponse],
[Symbol(kCapture)]: false,
[Symbol(async_id_symbol)]: 12,
[Symbol(kUniqueHeaders)]: null,
[Symbol(http.server.connections)]: ConnectionsList {},
[Symbol(http.server.connectionsCheckingInterval)]: Timeout {
\_idleTimeout: 30000,
\_idlePrev: [TimersList],
\_idleNext: [TimersList],
\_idleStart: 1207,
\_onTimeout: [Function: bound checkConnections],
\_timerArgs: undefined,
\_repeat: 30000,
\_destroyed: false,
[Symbol(refed)]: false,
[Symbol(kHasPrimitive)]: false,
[Symbol(asyncId)]: 14,
[Symbol(triggerId)]: 13
}
},
\_server: Server {
maxHeaderSize: undefined,
insecureHTTPParser: undefined,
requestTimeout: 300000,
headersTimeout: 60000,
keepAliveTimeout: 5000,
connectionsCheckingInterval: 30000,
joinDuplicateHeaders: undefined,
rejectNonStandardBodyWrites: false,
\_events: [Object: null prototype],
\_eventsCount: 3,
\_maxListeners: undefined,
\_connections: 1,
\_handle: [TCP],
\_usingWorkers: false,
\_workers: [],
\_unref: false,
allowHalfOpen: true,
pauseOnConnect: false,
noDelay: true,
keepAlive: false,
keepAliveInitialDelay: 0,
highWaterMark: 16384,
httpAllowHalfOpen: false,
timeout: 0,
maxHeadersCount: null,
maxRequestsPerSocket: 0,
\_connectionKey: '6::::3000',
[Symbol(IncomingMessage)]: [Function: IncomingMessage],
[Symbol(ServerResponse)]: [Function: ServerResponse],
[Symbol(kCapture)]: false,
[Symbol(async_id_symbol)]: 12,
[Symbol(kUniqueHeaders)]: null,
[Symbol(http.server.connections)]: ConnectionsList {},
[Symbol(http.server.connectionsCheckingInterval)]: Timeout {
\_idleTimeout: 30000,
\_idlePrev: [TimersList],
\_idleNext: [TimersList],
\_idleStart: 1207,
\_onTimeout: [Function: bound checkConnections],
\_timerArgs: undefined,
\_repeat: 30000,
\_destroyed: false,
[Symbol(refed)]: false,
[Symbol(kHasPrimitive)]: false,
[Symbol(asyncId)]: 14,
[Symbol(triggerId)]: 13
}
},
parser: HTTPParser {
'0': null,
'1': [Function: parserOnHeaders],
'2': [Function: parserOnHeadersComplete],
'3': [Function: parserOnBody],
'4': [Function: parserOnMessageComplete],
'5': [Function: bound onParserExecute],
'6': [Function: bound onParserTimeout],
\_headers: [],
\_url: '',
socket: [Circular *1],
incoming: [Circular *2],
outgoing: null,
maxHeaderPairs: 2000,
\_consumed: true,
onIncoming: [Function: bound parserOnIncoming],
joinDuplicateHeaders: null,
[Symbol(resource_symbol)]: [HTTPServerAsyncResource]
},
on: [Function: socketListenerWrap],
addListener: [Function: socketListenerWrap],
prependListener: [Function: socketListenerWrap],
setEncoding: [Function: socketSetEncoding],
\_paused: false,
\_httpMessage: ServerResponse {
\_events: [Object: null prototype],
\_eventsCount: 1,
\_maxListeners: undefined,
outputData: [],
outputSize: 0,
writable: true,
destroyed: false,
\_last: false,
chunkedEncoding: false,
shouldKeepAlive: true,
maxRequestsOnConnectionReached: false,
\_defaultKeepAlive: true,
useChunkedEncodingByDefault: true,
sendDate: true,
\_removedConnection: false,
\_removedContLen: false,
\_removedTE: false,
strictContentLength: false,
\_contentLength: null,
\_hasBody: true,
\_trailer: '',
finished: false,
\_headerSent: false,
\_closed: false,
socket: [Circular *1],
\_header: null,
\_keepAliveTimeout: 5000,
\_onPendingData: [Function: bound updateOutgoingData],
req: [Circular *2],
\_sent100: false,
\_expect_continue: false,
\_maxRequestsPerSocket: 0,
locals: [Object: null prototype] {},
[Symbol(kCapture)]: false,
[Symbol(kBytesWritten)]: 0,
[Symbol(kNeedDrain)]: false,
[Symbol(corked)]: 0,
[Symbol(kOutHeaders)]: [Object: null prototype],
[Symbol(errored)]: null,
[Symbol(kHighWaterMark)]: 16384,
[Symbol(kRejectNonStandardBodyWrites)]: false,
[Symbol(kUniqueHeaders)]: null
},
[Symbol(async_id_symbol)]: 24,
[Symbol(kHandle)]: TCP {
reading: true,
onconnection: null,
\_consumed: true,
[Symbol(owner_symbol)]: [Circular *1]
},
[Symbol(lastWriteQueueSize)]: 0,
[Symbol(timeout)]: null,
[Symbol(kBuffer)]: null,
[Symbol(kBufferCb)]: null,
[Symbol(kBufferGen)]: null,
[Symbol(kCapture)]: false,
[Symbol(kSetNoDelay)]: true,
[Symbol(kSetKeepAlive)]: false,
[Symbol(kSetKeepAliveInitialDelay)]: 0,
[Symbol(kBytesRead)]: 0,
[Symbol(kBytesWritten)]: 0
},
httpVersionMajor: 1,
httpVersionMinor: 1,
httpVersion: '1.1',
complete: false,
rawHeaders: [
'User-Agent',
'PostmanRuntime/7.39.0',
'Accept',
'*/*',
'Postman-Token',
'be4bde44-1838-4652-a5d6-c87ca915e7c9',
'Host',
'localhost:3000',
'Accept-Encoding',
'gzip, deflate, br',
'Connection',
'keep-alive'
],
rawTrailers: [],
joinDuplicateHeaders: null,
aborted: false,
upgrade: false,
url: '/?id_mode_pembelajaran=1',
method: 'GET',
statusCode: null,
statusMessage: null,
client: <ref *1> Socket {
connecting: false,
\_hadError: false,
\_parent: null,
\_host: null,
\_closeAfterHandlingError: false,
\_readableState: ReadableState {
state: 4184,
highWaterMark: 16384,
buffer: BufferList { head: null, tail: null, length: 0 },
length: 0,
pipes: [],
flowing: true,
errored: null,
defaultEncoding: 'utf8',
awaitDrainWriters: null,
decoder: null,
encoding: null,
[Symbol(kPaused)]: false
},
\_events: [Object: null prototype] {
end: [Array],
timeout: [Function: socketOnTimeout],
data: [Function: bound socketOnData],
error: [Function: socketOnError],
close: [Array],
drain: [Function: bound socketOnDrain],
resume: [Function: onSocketResume],
pause: [Function: onSocketPause]
},
\_eventsCount: 8,
\_maxListeners: undefined,
\_writableState: WritableState {
objectMode: false,
highWaterMark: 16384,
finalCalled: false,
needDrain: false,
ending: false,
ended: false,
finished: false,
destroyed: false,
decodeStrings: false,
defaultEncoding: 'utf8',
length: 0,
writing: false,
corked: 0,
sync: true,
bufferProcessing: false,
onwrite: [Function: bound onwrite],
writecb: null,
writelen: 0,
afterWriteTickInfo: null,
buffered: [],
bufferedIndex: 0,
allBuffers: true,
allNoop: true,
pendingcb: 0,
constructed: true,
prefinished: false,
errorEmitted: false,
emitClose: false,
autoDestroy: true,
errored: null,
closed: false,
closeEmitted: false,
[Symbol(kOnFinished)]: []
},
allowHalfOpen: true,
\_sockname: null,
\_pendingData: null,
\_pendingEncoding: '',
server: Server {
maxHeaderSize: undefined,
insecureHTTPParser: undefined,
requestTimeout: 300000,
headersTimeout: 60000,
keepAliveTimeout: 5000,
connectionsCheckingInterval: 30000,
joinDuplicateHeaders: undefined,
rejectNonStandardBodyWrites: false,
\_events: [Object: null prototype],
\_eventsCount: 3,
\_maxListeners: undefined,
\_connections: 1,
\_handle: [TCP],
\_usingWorkers: false,
\_workers: [],
\_unref: false,
allowHalfOpen: true,
pauseOnConnect: false,
noDelay: true,
keepAlive: false,
keepAliveInitialDelay: 0,
highWaterMark: 16384,
httpAllowHalfOpen: false,
timeout: 0,
maxHeadersCount: null,
maxRequestsPerSocket: 0,
\_connectionKey: '6::::3000',
[Symbol(IncomingMessage)]: [Function: IncomingMessage],
[Symbol(ServerResponse)]: [Function: ServerResponse],
[Symbol(kCapture)]: false,
[Symbol(async_id_symbol)]: 12,
[Symbol(kUniqueHeaders)]: null,
[Symbol(http.server.connections)]: ConnectionsList {},
[Symbol(http.server.connectionsCheckingInterval)]: Timeout {
\_idleTimeout: 30000,
\_idlePrev: [TimersList],
\_idleNext: [TimersList],
\_idleStart: 1207,
\_onTimeout: [Function: bound checkConnections],
\_timerArgs: undefined,
\_repeat: 30000,
\_destroyed: false,
[Symbol(refed)]: false,
[Symbol(kHasPrimitive)]: false,
[Symbol(asyncId)]: 14,
[Symbol(triggerId)]: 13
}
},
\_server: Server {
maxHeaderSize: undefined,
insecureHTTPParser: undefined,
requestTimeout: 300000,
headersTimeout: 60000,
keepAliveTimeout: 5000,
connectionsCheckingInterval: 30000,
joinDuplicateHeaders: undefined,
rejectNonStandardBodyWrites: false,
\_events: [Object: null prototype],
\_eventsCount: 3,
\_maxListeners: undefined,
\_connections: 1,
\_handle: [TCP],
\_usingWorkers: false,
\_workers: [],
\_unref: false,
allowHalfOpen: true,
pauseOnConnect: false,
noDelay: true,
keepAlive: false,
keepAliveInitialDelay: 0,
highWaterMark: 16384,
httpAllowHalfOpen: false,
timeout: 0,
maxHeadersCount: null,
maxRequestsPerSocket: 0,
\_connectionKey: '6::::3000',
[Symbol(IncomingMessage)]: [Function: IncomingMessage],
[Symbol(ServerResponse)]: [Function: ServerResponse],
[Symbol(kCapture)]: false,
[Symbol(async_id_symbol)]: 12,
[Symbol(kUniqueHeaders)]: null,
[Symbol(http.server.connections)]: ConnectionsList {},
[Symbol(http.server.connectionsCheckingInterval)]: Timeout {
\_idleTimeout: 30000,
\_idlePrev: [TimersList],
\_idleNext: [TimersList],
\_idleStart: 1207,
\_onTimeout: [Function: bound checkConnections],
\_timerArgs: undefined,
\_repeat: 30000,
\_destroyed: false,
[Symbol(refed)]: false,
[Symbol(kHasPrimitive)]: false,
[Symbol(asyncId)]: 14,
[Symbol(triggerId)]: 13
}
},
parser: HTTPParser {
'0': null,
'1': [Function: parserOnHeaders],
'2': [Function: parserOnHeadersComplete],
'3': [Function: parserOnBody],
'4': [Function: parserOnMessageComplete],
'5': [Function: bound onParserExecute],
'6': [Function: bound onParserTimeout],
\_headers: [],
\_url: '',
socket: [Circular *1],
incoming: [Circular *2],
outgoing: null,
maxHeaderPairs: 2000,
\_consumed: true,
onIncoming: [Function: bound parserOnIncoming],
joinDuplicateHeaders: null,
[Symbol(resource_symbol)]: [HTTPServerAsyncResource]
},
on: [Function: socketListenerWrap],
addListener: [Function: socketListenerWrap],
prependListener: [Function: socketListenerWrap],
setEncoding: [Function: socketSetEncoding],
\_paused: false,
\_httpMessage: ServerResponse {
\_events: [Object: null prototype],
\_eventsCount: 1,
\_maxListeners: undefined,
outputData: [],
outputSize: 0,
writable: true,
destroyed: false,
\_last: false,
chunkedEncoding: false,
shouldKeepAlive: true,
maxRequestsOnConnectionReached: false,
\_defaultKeepAlive: true,
useChunkedEncodingByDefault: true,
sendDate: true,
\_removedConnection: false,
\_removedContLen: false,
\_removedTE: false,
strictContentLength: false,
\_contentLength: null,
\_hasBody: true,
\_trailer: '',
finished: false,
\_headerSent: false,
\_closed: false,
socket: [Circular *1],
\_header: null,
\_keepAliveTimeout: 5000,
\_onPendingData: [Function: bound updateOutgoingData],
req: [Circular *2],
\_sent100: false,
\_expect_continue: false,
\_maxRequestsPerSocket: 0,
locals: [Object: null prototype] {},
[Symbol(kCapture)]: false,
[Symbol(kBytesWritten)]: 0,
[Symbol(kNeedDrain)]: false,
[Symbol(corked)]: 0,
[Symbol(kOutHeaders)]: [Object: null prototype],
[Symbol(errored)]: null,
[Symbol(kHighWaterMark)]: 16384,
[Symbol(kRejectNonStandardBodyWrites)]: false,
[Symbol(kUniqueHeaders)]: null
},
[Symbol(async_id_symbol)]: 24,
[Symbol(kHandle)]: TCP {
reading: true,
onconnection: null,
\_consumed: true,
[Symbol(owner_symbol)]: [Circular *1]
},
[Symbol(lastWriteQueueSize)]: 0,
[Symbol(timeout)]: null,
[Symbol(kBuffer)]: null,
[Symbol(kBufferCb)]: null,
[Symbol(kBufferGen)]: null,
[Symbol(kCapture)]: false,
[Symbol(kSetNoDelay)]: true,
[Symbol(kSetKeepAlive)]: false,
[Symbol(kSetKeepAliveInitialDelay)]: 0,
[Symbol(kBytesRead)]: 0,
[Symbol(kBytesWritten)]: 0
},
\_consuming: false,
\_dumped: false,
next: [Function: next],
baseUrl: '/mata_pelajaran',
originalUrl: '/mata_pelajaran?id_mode_pembelajaran=1',
\_parsedUrl: Url {
protocol: null,
slashes: null,
auth: null,
host: null,
port: null,
hostname: null,
hash: null,
search: '?id_mode_pembelajaran=1',
query: 'id_mode_pembelajaran=1',
pathname: '/',
path: '/?id_mode_pembelajaran=1',
href: '/?id_mode_pembelajaran=1',
\_raw: '/?id_mode_pembelajaran=1'
},
params: {},
query: { id_mode_pembelajaran: '1' },
res: <ref *3> ServerResponse {
\_events: [Object: null prototype] { finish: [Function: bound resOnFinish] },
\_eventsCount: 1,
\_maxListeners: undefined,
outputData: [],
outputSize: 0,
writable: true,
destroyed: false,
\_last: false,
chunkedEncoding: false,
shouldKeepAlive: true,
maxRequestsOnConnectionReached: false,
\_defaultKeepAlive: true,
useChunkedEncodingByDefault: true,
sendDate: true,
\_removedConnection: false,
\_removedContLen: false,
\_removedTE: false,
strictContentLength: false,
\_contentLength: null,
\_hasBody: true,
\_trailer: '',
finished: false,
\_headerSent: false,
\_closed: false,
socket: <ref *1> Socket {
connecting: false,
\_hadError: false,
\_parent: null,
\_host: null,
\_closeAfterHandlingError: false,
\_readableState: [ReadableState],
\_events: [Object: null prototype],
\_eventsCount: 8,
\_maxListeners: undefined,
\_writableState: [WritableState],
allowHalfOpen: true,
\_sockname: null,
\_pendingData: null,
\_pendingEncoding: '',
server: [Server],
\_server: [Server],
parser: [HTTPParser],
on: [Function: socketListenerWrap],
addListener: [Function: socketListenerWrap],
prependListener: [Function: socketListenerWrap],
setEncoding: [Function: socketSetEncoding],
\_paused: false,
\_httpMessage: [Circular *3],
[Symbol(async_id_symbol)]: 24,
[Symbol(kHandle)]: [TCP],
[Symbol(lastWriteQueueSize)]: 0,
[Symbol(timeout)]: null,
[Symbol(kBuffer)]: null,
[Symbol(kBufferCb)]: null,
[Symbol(kBufferGen)]: null,
[Symbol(kCapture)]: false,
[Symbol(kSetNoDelay)]: true,
[Symbol(kSetKeepAlive)]: false,
[Symbol(kSetKeepAliveInitialDelay)]: 0,
[Symbol(kBytesRead)]: 0,
[Symbol(kBytesWritten)]: 0
},
\_header: null,
\_keepAliveTimeout: 5000,
\_onPendingData: [Function: bound updateOutgoingData],
req: [Circular *2],
\_sent100: false,
\_expect_continue: false,
\_maxRequestsPerSocket: 0,
locals: [Object: null prototype] {},
[Symbol(kCapture)]: false,
[Symbol(kBytesWritten)]: 0,
[Symbol(kNeedDrain)]: false,
[Symbol(corked)]: 0,
[Symbol(kOutHeaders)]: [Object: null prototype] { 'x-powered-by': [Array] },
[Symbol(errored)]: null,
[Symbol(kHighWaterMark)]: 16384,
[Symbol(kRejectNonStandardBodyWrites)]: false,
[Symbol(kUniqueHeaders)]: null
},
body: {},
route: Route { path: '/', stack: [ [Layer] ], methods: { get: true } },
[Symbol(kCapture)]: false,
[Symbol(kHeaders)]: {
'user-agent': 'PostmanRuntime/7.39.0',
accept: '_/_',
'postman-token': 'be4bde44-1838-4652-a5d6-c87ca915e7c9',
host: 'localhost:3000',
'accept-encoding': 'gzip, deflate, br',
connection: 'keep-alive'
},
[Symbol(kHeadersCount)]: 12,
[Symbol(kTrailers)]: null,
[Symbol(kTrailersCount)]: 0
}
C:\Sadam\Harisenin\NodeJS App\tugas-nodejs\src\controllers\mata_pembelajaran.controllers.js:12
id_mode_pembelajaran,
^

ReferenceError: id_mode_pembelajaran is not defined
at index (C:\Sadam\Harisenin\NodeJS App\tugas-nodejs\src\controllers\mata_pembelajaran.controllers.js:12:7)
at Layer.handle [as handle_request] (C:\Sadam\Harisenin\NodeJS App\tugas-nodejs\node_modules\express\lib\router\layer.js:95:5)
at next (C:\Sadam\Harisenin\NodeJS App\tugas-nodejs\node_modules\express\lib\router\route.js:149:13)
at Route.dispatch (C:\Sadam\Harisenin\NodeJS App\tugas-nodejs\node_modules\express\lib\router\route.js:119:3)
at Layer.handle [as handle_request] (C:\Sadam\Harisenin\NodeJS App\tugas-nodejs\node_modules\express\lib\router\layer.js:95:5)
at C:\Sadam\Harisenin\NodeJS App\tugas-nodejs\node_modules\express\lib\router\index.js:284:15
at Function.process_params (C:\Sadam\Harisenin\NodeJS App\tugas-nodejs\node_modules\express\lib\router\index.js:346:12)
at next (C:\Sadam\Harisenin\NodeJS App\tugas-nodejs\node_modules\express\lib\router\index.js:280:10)
at Function.handle (C:\Sadam\Harisenin\NodeJS App\tugas-nodejs\node_modules\express\lib\router\index.js:175:3)
at router (C:\Sadam\Harisenin\NodeJS App\tugas-nodejs\node_modules\express\lib\router\index.js:47:12)

Node.js v18.20.3
[nodemon] app crashed - waiting for file changes before starting...
