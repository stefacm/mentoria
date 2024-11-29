import forge from 'node-forge';

export default () => forge.util.bytesToHex(forge.random.getBytesSync(4));
