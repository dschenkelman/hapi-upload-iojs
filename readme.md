# Hapi upload fail sample
The upload sometimes fails using io.js 1.2.0. Have been able to repro with all io.js versions and also with node.js starting from 0.11.6.

## Repro steps
Using OS Ubuntu 14.04.1 LTS (at least that's what I used).

Install the dependencies
```
npm i
```

Launch the server
```
node server.js
```

Use the client repeatedly (it does not always fail).
```
node client.js
```

You will get an error like this one:
```
ubuntu@ip-172-31-6-28:~/hapi-upload$ /opt/iojs-1.2.0/bin/node client.js
{ [Error: write EPIPE]
  code: 'EPIPE',
  errno: 'EPIPE',
  syscall: 'write',
  address: undefined }
```