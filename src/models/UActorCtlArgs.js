function CtlArgs(host, port, refresh, hashAsVersion, file, minify, publishCodeCount, uploadCodeNodeId) {
    this.host = host;
    this.port = port;
    this.refresh = refresh;
    this.hashAsVersion = hashAsVersion;
    this.file = file;
    this.minify = minify;
    this.publishCodeCount = publishCodeCount;
    this.uploadCodeNodeId = uploadCodeNodeId;
}

module.exports = CtlArgs;
