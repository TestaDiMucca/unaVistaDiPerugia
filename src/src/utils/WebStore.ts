import { IDBPDatabase, openDB } from 'idb';

/** Protect against invocations outside of browser context */
const getWindow = () => (typeof window !== 'undefined' ? window : null);

export const LocalStorage = {
  get: (key: string) => getWindow()?.localStorage.getItem(key),
  set: (key: string, value: string) =>
    getWindow()?.localStorage.setItem(key, value),
  remove: (key: string) => getWindow()?.localStorage.removeItem(key),
};

/**
 * @link https://javascript.plainenglish.io/working-with-indexeddb-in-typescript-react-ad504a1bdae3
 */
class IndexedDb {
  private database: DatabaseName;
  private db: IDBPDatabase | null = null;

  constructor(database: DatabaseName) {
    this.database = database;
  }

  public async createObjectStoreIfNotExist(tableNames: TableNames[]) {
    try {
      this.db = await openDB(this.database, 1, {
        upgrade(db: IDBPDatabase) {
          for (const tableName of tableNames) {
            if (db.objectStoreNames.contains(tableName)) {
              continue;
            }
            db.createObjectStore(tableName, {
              autoIncrement: true,
              keyPath: 'id',
            });
          }
        },
      });
    } catch (error) {
      return false;
    }
  }

  public async getValue(tableName: TableNames, id: number) {
    if (!this.db) return null;

    const tx = this.db.transaction(tableName, 'readonly');
    const store = tx.objectStore(tableName);
    const result = await store.get(id);
    console.log('Get Data ', JSON.stringify(result));
    return result;
  }

  public async getAllValue(tableName: TableNames) {
    if (!this.db) return null;

    const tx = this.db.transaction(tableName, 'readonly');
    const store = tx.objectStore(tableName);
    const result = await store.getAll();
    console.log('Get All Data', JSON.stringify(result));
    return result;
  }

  public async putValue(tableName: TableNames, value: object) {
    if (!this.db) return null;

    const tx = this.db.transaction(tableName, 'readwrite');
    const store = tx.objectStore(tableName);
    const result = await store.put(value);
    console.log('Put Data ', JSON.stringify(result));
    return result;
  }

  public async putBulkValue(tableName: TableNames, values: object[]) {
    if (!this.db) return null;

    const tx = this.db.transaction(tableName, 'readwrite');
    const store = tx.objectStore(tableName);
    for (const value of values) {
      const result = await store.put(value);
      console.log('Put Bulk Data ', JSON.stringify(result));
    }
    return this.getAllValue(tableName);
  }

  public async deleteValue(tableName: TableNames, id: number) {
    if (!this.db) return null;

    const tx = this.db.transaction(tableName, 'readwrite');
    const store = tx.objectStore(tableName);
    const result = await store.get(id);
    if (!result) {
      console.log('Id not found', id);
      return result;
    }
    await store.delete(id);
    console.log('Deleted Data', id);
    return id;
  }

  public async deleteAll(tableName: TableNames) {
    if (!this.db) return null;

    const tx = this.db.transaction(tableName, 'readwrite');
    const store = tx.objectStore(tableName);
    store.clear();
  }
}

type DatabaseName = 'library';
type TableNames = 'files';

export let idbInstance: IndexedDb | null = null;

export const initIdb = async () => {
  idbInstance = new IndexedDb('library');
  await idbInstance.createObjectStoreIfNotExist(['files']);

  // const currentShit = await idbInstance.getAllValue('files');
  // console.log(currentShit);
};

if (typeof window !== 'undefined')
  (window as any).clearDb = () => idbInstance?.deleteAll('files');
