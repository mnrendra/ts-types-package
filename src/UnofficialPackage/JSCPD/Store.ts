/**
 * Store used to collect information about code (default: in-memory store);
 * install @jscpd/leveldb-store and use leveldb for big repositories.
 */
export type Store =
| 'leveldb'
| 'redis'

export default Store
